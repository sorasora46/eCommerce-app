import { FC } from "react";
import { Button } from "./Button";
import { accentColor, primaryColor } from "../resources/colors";
import { ProductStatus } from "../resources/productStatus";

export const CartItem: FC<{ cart: any; }> = ({ cart }) => {
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
        height="150rem" />
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
