import React from "react";

import "./index.scss";

export const FilterBox = (props) => {
  const { filterOptions, cb } = props;

  function onChange(event) {
    cb(event.target.value);
  }

  return (
    <div className="header">
      <div className="filter">
        <span>Filter by: </span>
        <select name="drinks" id="drinks" onChange={onChange}>
          <option value="All" defaultValue="selected">
            {" "}
            All
          </option>
          {filterOptions.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
