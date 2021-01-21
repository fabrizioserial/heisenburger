import React,{useState,useEffect,Component} from 'react';

import "./ItemList.css"
import { Item } from './item/Item';


export const ItemList = () =>{

    const listOfProduct = [
        {
            id:"a11",
            title:"Hamburguesa Triple Cheddar",
            price:"250",
            pictureUrl:""
        },
        {
            id:"a12",
            title:"Hamburguesa Cuarto De Libra",
            price:"350",
            pictureUrl:""
        },
        {
            id:"a13",
            title:"Hamburguesa Vegana",
            price:"200",
            pictureUrl:""
        }
    ]

    
    return(
        <ul className="cont-itemslist">
            {   

                listOfProduct.map((item,index)=>{
                    let itemss = new Promise((res,re)=>{
                        setTimeout(()=>{
                            <li key={Item.id}><Item id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl}/></li>
                
                        },3000)
                    })
                    })
            }
        </ul>
    )
}