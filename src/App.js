import React from "react";
import { CardList } from "./components/card-list";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searchField: "",
    };
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  componentDidMount() {
    axios.get(`/info.json`).then((res) => {
      console.log(res);
      this.setState({ products: res.data });
    });
  }
  render() {
    const { products, searchField } = this.state;
    console.log(this.state);

    const filteredProducts = products.filter(function (product) {
      return (
        product.productName.toLowerCase().includes(searchField.toLowerCase()) ||
        product.price.includes(searchField)
      );
    });

    return (
      <div className="App">
        <h1>Drinks</h1>
        <CardList products={filteredProducts}/>
      </div>
    );
  }
}

export default App;
