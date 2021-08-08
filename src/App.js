import React from 'react';
import {Ecommerce}  from './ecommerce/index.jsx';
import axios from 'axios';
 
import './App.css';

function App()  {
  const [products, setProducts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("")

  React.useEffect(async () => {
    const response = await axios('/info.json');

    setProducts(response.data);
  },[]);

  return (
    products ? 
      (
        <div className="App">
            <Ecommerce products={products}/>
          </div>
      )
    : 
      null
  )
}

export default App;

