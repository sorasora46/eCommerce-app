import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import { CartItem } from "../components/CartItem";

export const Cart = () => {
  const { userId } = useParams();
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState<any>([]);

  // TODO: Change API endpoint
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
