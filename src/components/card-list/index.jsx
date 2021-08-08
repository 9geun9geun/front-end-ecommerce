import React from "react";
import { Card } from "../card/index";

import "./index.css";

export const CardList = function (props) {
  return (
    <div className="card-list">
      {props.products.map(function (product) {
        console.log(product);
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};
