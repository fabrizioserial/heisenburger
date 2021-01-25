import React,{useState,useEffect} from "react";
import { ItemCount } from "../../itemcount/ItemCount";
import { ItemList } from "../../itemList/ItemList";
import { ApiComponent } from "../../apiComponent/ApiComponent";
import "./ItemListContainer.css";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";


export const ItemListContainer = (props) =>{


    const listOfProduct = [
        {
            id:"a11",
            title:"Hamburguesa Triple Cheddar",
            price:"250",
            thumbnail:"#",
        },
        {
            id:"a12",
            title:"Hamburguesa Cuarto De Libra",
            price:"350",
            thumbnail:"#",
        },
        {
            id:"a13",
            title:"Hamburguesa Vegana",
            price:"200",
            thumbnail:"#",
        }
    ]

    const [product,setProduct] = useState([]);

    useEffect(()=>{
       
        const task = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(listOfProduct)
            },3000)
        })
        task.then(response =>{
            setProduct(response)
        })
    },[])
    
    

    return(
        <div className="container">
            <h1 className="text-cont">{props.text}</h1>
            <ItemCount stock={5} initial={1}/>
            <ItemList listOfProducts={product}/>
            <ApiComponent/>
            <ItemDetailContainer/>
        </div>
    )
}