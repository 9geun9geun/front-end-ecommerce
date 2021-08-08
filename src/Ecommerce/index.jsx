import React from "react";
import { CardList } from "../components/card-list/index.jsx";
import { FilterBox } from "../components/filter-box/index.jsx";

import "./index.css";

export const Ecommerce = (props) => {
  const products = props.products;
  const [selectedOption, setSelectedOption] = React.useState("All");

  function getAvailableFilterOptions(products) {
    var availableOptions = [];

    products.forEach((product) => {
      availableOptions.indexOf(product.type) === -1 &&
        availableOptions.push(product.type);
    });
    return availableOptions;
  }

  function getFilteredProducts(products) {
    if (selectedOption === "All") return products;

    return products.filter((p) => p.type === selectedOption);
  }

  return (
    <div className="App">
      <FilterBox
        filterOptions={getAvailableFilterOptions(products)}
        cb={setSelectedOption}
      />
      <CardList products={getFilteredProducts(products)} />
    </div>
  );
};
