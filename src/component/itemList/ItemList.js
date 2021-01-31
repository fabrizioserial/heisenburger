import React,{useEffect, useState} from 'react';

import "./ItemList.css"
import { Item } from './item/Item';
import { Link } from "react-router-dom";


export const ItemList = (props) =>{
    const [product,setProduct] = useState([])

    const listOfProduct = props.listOfProduct
    useEffect(()=>{
        const task = new Promise((resolve,reject)=>{
            resolve(listOfProduct)    
        })
        task.then(response =>{
            var i = [];
            listOfProduct.map(product => {
                return(
                    <>
                    {
                        product.categoryId === props.categoryId && i.push(product)
                    }
                    </>  
                )
            })
            console.log(props.categoryId)
            setProduct(i)

        })

    },[props.categoryId])

    return(
        <div className="cont-itemslist">
            {   
                props.categoryId ? 
                product.length >= 1 && product.map(product =><Item id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/> )
                :
                listOfProduct.map(product =><Item id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/> )
            }
        </div>
    )
}