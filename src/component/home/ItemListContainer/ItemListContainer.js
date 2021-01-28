import React,{useState,useEffect, useDebugValue} from "react";
import { ItemCount } from "../../itemcount/ItemCount";
import { ItemList } from "../../itemList/ItemList";
import { ApiComponent } from "../../apiComponent/ApiComponent";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom'
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";


export const ItemListContainer = (props) =>{

    const {categoryId} = useParams();

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
                        product.categoryId === categoryId && i.push(product)
                    }
                    </>  
                )
            })
            setProduct(i)

        })

    },[categoryId])
    const listOfProduct = [
        {
            id:"a11",
            categoryId:"carne",
            title:"Hamburguesa Triple Cheddar",
            price:"250",
            thumbnail:"https://media-cdn.tripadvisor.com/media/photo-s/18/92/e1/f9/hamburguesa-duke-triple.jpg",
        },
        {
            id:"a12",
            categoryId:"carne",
            title:"Hamburguesa Cuarto De Libra",
            price:"350",
            thumbnail:"https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/fftq60l5bk4ss6mgsf9i",
        },
        {
            id:"a13",
            categoryId:"vegan",
            title:"Hamburguesa Vegana",
            price:"200",
            thumbnail:"https://unareceta.com/wp-content/uploads/2017/09/receta-de-hamburguesa-vegana.jpg",
        }
    ]

    const [product,setProduct] = useState([]);


    
    

    return(
        <div className="container">
            {
                props.text ?
                    <div className="container-home">
                        <div className="cont-background">
                            <h1 className="text-cont">{props.text}</h1>
                            <h3>LAS MEJORES HAMBURGUESAS</h3>
                            {
                                console.log("hola")
                            }
                        </div>
                    </div> 
                    
                    :
                   <ItemList listOfProducts={product}/>
            }
        </div>
    )
}