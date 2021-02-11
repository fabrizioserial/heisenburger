import React,{useEffect, useState} from 'react';

import "./ItemList.css"
import { Item } from './item/Item';
import {getFirestore} from "../../firebase/index"


export const ItemList = (props) =>{
    const [product,setProduct] = useState([])
    const categoryId = props.categoryId

    const listOfProduct = props.listOfProduct
    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = db.collection("items")
        if(categoryId){
            const categoryCollection = itemCollection.where("category","==",categoryId)
            
            categoryCollection.get().then((querySnapshot) => {
                
                let arrayItems = querySnapshot.docs.map(doc => {
                    return(
                        {id:doc.id,...doc.data()}
                        )
                    }
                    )
                    console.log(arrayItems)
                setProduct(arrayItems)
                
                
            })
        }else{
            const limitTo6TheResults = itemCollection.limit(6)
            limitTo6TheResults.get().then((querySnapshot) =>{
                let arrayItems = querySnapshot.docs.map(doc =>{
                    return(
                        {id:doc.id,...doc.data()}
                    )
                })
                setProduct(arrayItems)
            })
        }
    },[props.categoryId])

    return(
        <div className="cont-itemslist">
            {   
                props.categoryId ? 
                product.length >= 1 && product.map(product =><Item id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/> )
                :
                product.map(product =><Item id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/> )
            }
        </div>
    )
}