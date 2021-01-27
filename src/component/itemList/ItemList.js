import React,{useEffect, useState} from 'react';

import "./ItemList.css"
import { Item } from './item/Item';
import { Link } from "react-router-dom";


export const ItemList = (props) =>{

    return(
        <div className="cont-itemslist">
            {   
                props.listOfProducts && props.listOfProducts.map(product =><Item id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/> )
            }
        </div>
    )
}