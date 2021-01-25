import { from } from "core-js/fn/array";
import React,{useState,useEffect} from "react";
import "./ApiComponent.css"
import {Item} from '../itemList/item/Item'


export const ApiComponent = () =>{
    const [products,setProducts] = useState({});

    useEffect(()=>{
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=Monitores&offset=0&limit=10")
        .then(itemML=>{
            return itemML.json()
        }).then((itemjson)=>{
            setProducts(itemjson.results);
        })
    },[])

    console.log(products)
    return(
        <div className="cont-apicomp">
        {
                products.length && products.map(product => <Item id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/>)
        }
        </div>
    )
}