import { from } from 'core-js/fn/array';
import React,{useState,useEffect} from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetailContainer/itemDetail/ItemDetail'

export const ItemDetailContainer = ()=>{
    const [item,setItem]=useState();

    const itemToReturn ={
        title: "Pizza de Salchicha",
        id: "aa122",
        price: 200,
        desc:"A demás de tener ingredientes exóticos, vas a saborear el borde con salchichas Argentinas 🌭",
        image: "https://kikikas.files.wordpress.com/2015/09/pizzas7.jpg"
    }

    useEffect(()=>{
        const task = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(itemToReturn)
            },2000)
        })
        task.then(resolve=>{
            setItem(resolve)
        })
    },[])

    return(
        <div className="detail-container">
            {
                item && <ItemDetail item={item}/>
            }
        </div>
    )
}
