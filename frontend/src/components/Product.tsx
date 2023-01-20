import axios from "axios";
import {
  CSSProperties,
  FC,
  MouseEventHandler,
  useContext,
  useState,
} from "react";
import { AuthContext } from "../context/AuthContext";
import { accentColor, primaryColor } from "../resources/colors";
import { ProductStatus } from "../resources/productStatus";
import { Button } from "./Button";
import { Modal } from "./Modal";

export const Product: FC<{ product: any; onClick: MouseEventHandler }> = ({
  product,
  onClick,
}) => {
  const user = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productAmount, setProductAmount] = useState<number>(1);

  const cardStyle: CSSProperties = {
    width: "20rem",
    border: `1px solid ${accentColor}`,
    borderRadius: "10px",
    backgroundColor: `${accentColor}`,
    cursor: "pointer",
  };

  function addItemToCart() {
    if (user.error) {
      alert("Please login to add item to your cart");
      return;
    }

    if (user.role !== "CUSTOMER") {
      alert("You have to use customer account in order to purchase");
      return;
    }

    axios
      .post(
        "http://127.0.0.1:8000/cart/additem",
        {
          userId: user.userId,
          productId: product.productId,
          status: ProductStatus.waitingPayment,
          productAmount: productAmount,
          pName: product.pName,
          pPrice: product.pPrice,
          pImage: product.pImage,
          pOwnerId: product.pOwnerId
        },
        { withCredentials: true }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div
        className="container flex-column shadow"
        style={cardStyle}
        onClick={onClick}
      >
        <img
          src={`data:image/*;base64, ${product.pImage}`}
          alt={`${product.pName}`}
          style={{
            borderRadius: "10px",
            objectFit: "cover",
            border: `1px solid ${accentColor}`,
          }}
          width="100%"
          height="240rem"
        />
        <div
          className="container flex-row"
          style={{
            padding: "0.5rem 1rem 0 1rem",
            color: `${primaryColor}`,
            justifyContent: "space-between",
          }}
        >
          <div className="container flex-column" style={{ gap: "1rem" }}>
            <h3>{product.pName}</h3>
            <p>{product.pAmount} pieces in stock</p>
            <p>views: {product.pClickAmount}</p>
          </div>
          <p style={{ fontWeight: "500" }}>{product.pPrice} ฿</p>
        </div>
        <div
          className="container flex-row"
          style={{
            padding: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Button>Buy now</Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="container flex-row" style={{ gap: "2rem" }}>
          <img
            src={`data:image/*;base64, ${product.pImage}`}
            alt={`${product.pName}`}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              border: `1px solid ${accentColor}`,
            }}
            className="buy-product-modal-img"
          />
          <div
            className="container flex-column"
            style={{ width: "50%", fontSize: "1.55rem", gap: "1rem" }}
          >
            <h3>{product.pName}</h3>
            <p>{product.pAmount} pieces in stock</p>
            <p>views: {product.pClickAmount}</p>
            <p>
              <b>{product.pPrice} ฿</b>
            </p>
            <div style={{ marginTop: "2rem" }}>
              <label htmlFor="productamount">
                <b>Amount of item</b>
              </label>
              <input
                type="range"
                min={1}
                max={product.pAmount}
                onChange={(e) => setProductAmount(parseInt(e.target.value))}
                value={productAmount}
              />
              <output>
                <b>{productAmount}</b>
              </output>
            </div>
            <div className="container flex-row" style={{ gap: "2rem" }}>
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button
                onClick={() => {
                  addItemToCart();
                  setIsOpen(false);
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
