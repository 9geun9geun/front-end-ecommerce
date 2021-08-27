import React from 'react';
import {Ecommerce}  from './Ecommerce/index.jsx';
import axios from 'axios';
 
import './App.css';

function App()  {
  const [products, setProducts] = React.useState([]);

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

