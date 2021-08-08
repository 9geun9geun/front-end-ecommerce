import React, { Component } from 'react';
import {CardList}  from './components/card-list/card-list-component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import axios from 'axios';
import {GlobalStyle} from './global.styles'
 
import './App.css';
// import Data from './pages/homepage/info.json'


class App extends React.Component{
  constructor(){
    super()

    this.state ={
      products: [],
      searchField: ''
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({searchField:e.target.value})
  }
 
  componentDidMount(){
   
    axios.get(`/info.json`)
    .then(res => {
      console.log(res)
      this.setState({products:res.data})
    })
  
    
  }
  render(){
    
    const { products, searchField} = this.state
    console.log(this.state)
    
    const filteredProducts = products.filter(function(product){
      return (product.productName.toLowerCase().includes(searchField.toLowerCase()) || product.price.includes(searchField))
    })

 
    return(
      <div className="App">
      <GlobalStyle/>
      <h1> Products </h1>
      <SearchBox 
        placeholder = 'Search Product'
        handleChange = {this.handleChange}
        />
      <CardList products={filteredProducts}/>
      

    </div>
    )
  }
}

export default App;


