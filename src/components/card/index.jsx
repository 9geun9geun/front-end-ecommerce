import React from 'react'

import './card.styles.css'

export const Card = function(props){
    return(
        <div className ='card-container'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${props.product.productImage}`} alt= "drink"></img>
            
            <h2> <u>{props.product.productName}</u></h2>
            <h3> {props.product.price} </h3>
        </div>
    )
}