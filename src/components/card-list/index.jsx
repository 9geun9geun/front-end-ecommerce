import React from "react";
import { Card } from "../card";

import "./index.css";

export const CardList = function (props) {
  return (
    <div className="card-list">
      {props.products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};
