import React,{useState,useEffect} from 'react'
import '../ItemDetailContainer/ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetailContainer/itemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { ItemRecommended } from './itemRecomendado/ItemRecommended '

export const ItemDetailContainer = ()=>{
    const [item,setItem]=useState();

    const {itemId} = useParams()

    const listOfProduct = [
        {
            id:"a11",
            categoryId:"carne",
            title:"HAMBURGUESA TRIPLE CHEDDAR",
            price:"250",
            stock:20,
            desc:"A demás de tener ingredientes exóticos, vas a saborear el borde con salchichas Argentinas 🌭",
            thumbnail:"https://media-cdn.tripadvisor.com/media/photo-s/18/92/e1/f9/hamburguesa-duke-triple.jpg",
        },
        {
            id:"a12",
            categoryId:"carne",
            title:"HAMBURGUESA CUARTO DE LIBRA",
            price:"350",
            stock:10,
            desc:"A demás de tener ingredientes exóticos, vas a saborear el borde con salchichas Argentinas 🌭",
            thumbnail:"https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/fftq60l5bk4ss6mgsf9i",
        },
        {
            id:"a13",
            categoryId:"vegan",
            title:"HAMBURGUESA VEGANA",
            price:"200",
            stock:5,
            desc:"A demás de tener ingredientes exóticos, vas a saborear el borde con salchichas Argentinas 🌭",
            thumbnail:"https://unareceta.com/wp-content/uploads/2017/09/receta-de-hamburguesa-vegana.jpg",
        }
    ]

    useEffect(()=>{
        itemId && listOfProduct.map((product)=>{

            return(
                <>
                {
                    product.id === itemId && setItem(product)
                }
                </>
            )
        })
    },[])

    /*useEffect(()=>{
        const task = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(itemToReturn)
            },2000)
        })
        task.then(resolve=>{
            setItem(resolve)
        })
    },[])
    */

    return(
        <div className="detail-container">
            
            {
                item && <ItemDetail id={item.id} categoryId={item.categoryId} title={item.title} price ={item.price}
                desc={item.desc} thumbnail={item.thumbnail} stock={item.stock}/>
            }
            <div className="detail-container-recomendados-cont">
                <p className="det-cont-prod-title">TAMBIEN PODES PROBAR</p>
                <div className="det-cont-products-cont">
                    {
                        item &&  <ItemRecommended item={item}/>

                    }
                </div>
            </div>
            
        </div>
    )
}
