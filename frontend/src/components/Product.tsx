import { CSSProperties, FC } from "react";
import { accentColor, primaryColor } from "../resources/colors";

export const Product: FC<{ product: any }> = ({ product }) => {
  const cardStyle: CSSProperties = {
    height: "27rem",
    width: "20rem",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: `${accentColor}`,
    cursor: "pointer",
  };

  return (
    <div className="container flex-column shadow" style={cardStyle}>
      <img
        src={`data:image/*;base64, ${product.pImage}`}
        alt={`${product.pName}`}
        style={{ borderRadius: "10px", objectFit: "cover" }}
        width="100%"
        height="75%"
      />
      <div
        className="container flex-row"
        style={{
          padding: "0.5rem 1rem 0 1rem",
          color: `${primaryColor}`,
          justifyContent: "space-between",
        }}
      >
        <div className="container flex-column">
          <h3>{product.pName}</h3>
          <p>{product.pAmount} pieces in stock</p>
          <p>views: {product.pClickAmount}</p>
        </div>
        <p style={{ fontWeight: "500" }}>{product.pPrice} ฿</p>
      </div>
    </div>
  );
};
