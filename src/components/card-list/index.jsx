import React from 'react';
import {Card} from '../card/card.component';



import './card-list.styles.css';


//functional component
export const CardList = function(props){


    return (
        
        <div className="card-list">
            {props.products.map(function(product){
                console.log(product)
                return <Card key={product.id} product={product}/>
            })}
        
        </div>
    )
    

}