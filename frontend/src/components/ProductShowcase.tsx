import axios from "axios";
import { CSSProperties, useEffect, useState } from "react";
import { accentColor } from "../resources/colors";
import { Modal } from "./Modal";
import { Product } from "./Product";

export const ProductShowcase = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productIndex, setProductIndex] = useState<number>(0);
  const [shop, setShop] = useState<any>({});

  const outerStyle: CSSProperties = {
    paddingTop: "5rem",
    justifyContent: "center",
    backgroundColor: "rgba(255, 253, 214, 0.5)",
    paddingBottom: "15rem",
  };

  const innerStyle: CSSProperties = {
    gap: "2rem",
    width: "65%",
    flexWrap: "wrap",
  };

  function initShowcase() {
    axios
      .get("http://127.0.0.1:8000/product/getproducts", {
        withCredentials: true,
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  function fetchProductData() {
    axios
      .get(
        `http://127.0.0.1:8000/shop/getshop/${products[productIndex]?.pOwnerId}`,
        { withCredentials: true }
      )
      .then((res) => setShop(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    initShowcase();
  }, []);

  return (
    <div className="container" style={outerStyle}>
      <div className="container flex-row center-items" style={innerStyle}>
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              onClick={(e) => {
                fetchProductData();
                setProductIndex(index); // why setting index?
                setIsOpen(true);
                /*
                    The problem is that the state variable "isOpen" is shared among all the elements in the map,
                    so when you set it to true, all the modals will open. To fix this,
                    you should use a separate state variable for each product,
                    for example by keeping track of the index of the product that was clicked and only opening the corresponding modal.
                    You can use the index of the current element in the map as the key for the product state.
                    You can also move the Modal component out of the map to avoid re-rendering it every time the state changes.
                   */
              }}
              product={product}
            />
          );
        })}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="container flex-row modal-content" style={{ gap: "2rem" }}>
          <img
            src={`data:image/*;base64, ${products[productIndex]?.pImage}`}
            alt={`${products[productIndex]?.pName}`}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              border: `1px solid ${accentColor}`,
            }}
            className="product-modal-img"
          />
          <div
            className="container flex-column"
            style={{ gap: "1rem", width: "50%", fontSize: "1.55rem" }}
          >
            <h3>{products[productIndex]?.pName}</h3>
            <p>{products[productIndex]?.pAmount} pieces in stock</p>
            <p>views: {products[productIndex]?.pClickAmount}</p>
            <p>
              <b>{products[productIndex]?.pPrice} ฿</b>
            </p>
            <div
              className="container flex-column"
              style={{ fontSize: "1rem", gap: "0.75rem" }}
            >
              <div className="container flex-row" style={{ gap: "1rem" }}>
                <img
                  src={`data:image/*;base64, ${shop?.profileImage}`}
                  alt={`${shop?.name}`}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                    border: `1px solid ${accentColor}`,
                  }}
                  className="shop-modal-img"
                />
                <b>By {shop?.name}</b>
              </div>
              <p>
                <b>Shop ID:</b> <br />
                {products[productIndex]?.pOwnerId}
              </p>
              <p>
                <b>Product ID:</b> <br />
                {products[productIndex]?.productId}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
