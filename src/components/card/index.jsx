import React from "react";

import "./index.css";

export const Card = (props) => {
  const product = props.product;
  return (
    <div className="card">
      {product.isSale && <div id="ribbon"> <span id="content">SALE</span></div>}
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${product.productImage}`}
        alt="drink"
      />
      <h2>{product.productName}</h2>
      <h3>{product.price}</h3>
    </div>
  );
};
