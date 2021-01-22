import React,{useEffect, useState} from 'react';

import "./ItemList.css"
import { Item } from './item/Item';


export const ItemList = (props) =>{

    return(
        <div className="cont-itemslist">
            {   
                props.listOfProducts && props.listOfProducts.map(product => <Item id={product.id} title={product.title} price={product.price} pictureURL={product.pictureURL}/>)
            }
        </div>
    )
}