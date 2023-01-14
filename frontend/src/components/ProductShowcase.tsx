import axios from "axios";
import { CSSProperties, useEffect, useState } from "react";
import { Product } from "./Product";

export const ProductShowcase = () => {
  const [products, setProducts] = useState<any[]>([]);

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

  useEffect(() => {
    initShowcase();
  }, []);

  return (
    <div className="container" style={outerStyle}>
      <div className="container flex-row center-items" style={innerStyle}>
        {products.map((item, index) => {
          return <Product key={index} product={item} />;
        })}
      </div>
    </div>
  );
};
