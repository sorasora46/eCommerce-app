import axios from "axios";
import { FC, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Navbar } from "../components/navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import { accentColor, primaryColor } from "../resources/colors";
import { ProductStatus } from "../resources/productStatus";

export const Cart = () => {
  const { userId } = useParams();
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState<any>([]);

  useEffect(() => {
    const fetchCart = () => {
      axios
        .get(`http://127.0.0.1:8000/cart/getcart/${userId}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setCart(res.data);
        })
        .catch((err) => console.log(err));
    };
    if (userContext.userId === userId) {
      fetchCart();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="container flex-column"
        style={{ width: "100%", paddingTop: "10rem", gap: "5rem" }}
      >
        {cart.map((item: any, index: number) => {
          return <CartItem cart={item} key={index} />;
        })}
      </div>
    </>
  );
};

const CartItem: FC<{ cart: any }> = ({ cart }) => {
  console.log(cart);
  return (
    <div
      className="container flex-row"
      style={{
        width: "40%",
        border: `1px solid ${accentColor}`,
        borderRadius: "10px",
        alignSelf: "center",
        backgroundColor: `${accentColor}`,
        gap: "1rem",
      }}
    >
      <img
        src={`data:image/*;base64, ${cart?.pImage}`}
        alt={`${cart.pName}`}
        style={{
          objectFit: "cover",
          border: `1px solid ${accentColor}`,
          borderRadius: "10px",
        }}
        width="150rem"
        height="150rem"
      />
      <div
        className="container flex-column"
        style={{ color: `${primaryColor}`, padding: "1rem 0 1rem 0" }}
      >
        <h3>{cart.pName}</h3>
        <p>Price: {cart.pPrice}</p>
        <p>Amount: {cart.productAmount}</p>
        <p>Status: {cart.status}</p>
        <p>
          From: {cart.shopName} (Shop ID: {cart.shopId})
        </p>
      </div>
      {cart.status === ProductStatus.waitingPayment ? (
        <Button style={{ alignSelf: "center" }}>Buy now</Button>
      ) : (
        ""
      )}
      {cart.status === ProductStatus.shipping ? (
        <Button style={{ alignSelf: "center" }}>Cancel Order</Button>
      ) : (
        ""
      )}
      {cart.status === ProductStatus.waitingRecieved ? (
        <Button style={{ alignSelf: "center" }}>Confirm</Button>
      ) : (
        ""
      )}
    </div>
  );
};
