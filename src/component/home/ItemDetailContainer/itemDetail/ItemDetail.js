import React,{useState,useEffect} from "react";
import '../itemDetail/ItemDetail.css'
import { useParams } from "react-router-dom";

export const ItemDetail = ()=>{

    const itemId = useParams();
    const [item,setItem] = useState({});

    useEffect(()=>{
        itemId && listOfProduct.map((product)=>{
            console.log(product.id)
            console.log(itemId)

            return(
                <>
                {
                    product.id === itemId.itemId && setItem(product)
                }
                </>
            )
        })
    },[itemId])
    
    const listOfProduct = [
        {
            id:"a11",
            categoryId:"carne",
            title:"Hamburguesa Triple Cheddar",
            price:"250",
            desc:"A demás de tener ingredientes exóticos, vas a saborear el borde con salchichas Argentinas 🌭",
            thumbnail:"https://media-cdn.tripadvisor.com/media/photo-s/18/92/e1/f9/hamburguesa-duke-triple.jpg",
        },
        {
            id:"a12",
            categoryId:"carne",
            title:"Hamburguesa Cuarto De Libra",
            price:"350",
            desc:"A demás de tener ingredientes exóticos, vas a saborear el borde con salchichas Argentinas 🌭",
            thumbnail:"https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/fftq60l5bk4ss6mgsf9i",
        },
        {
            id:"a13",
            categoryId:"vegan",
            title:"Hamburguesa Vegana",
            price:"200",
            desc:"A demás de tener ingredientes exóticos, vas a saborear el borde con salchichas Argentinas 🌭",
            thumbnail:"https://unareceta.com/wp-content/uploads/2017/09/receta-de-hamburguesa-vegana.jpg",
        }
    ]

    console.log()
    return(
        <div className="item-d-main-container">
            <div className="item-d-pictureandprice">
                <div className="item-d-cont-picture">
                    <img src={item.thumbnail} className="image"/>
                </div>
                <div className="item-d-cont-price">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
            </div>
            <div className="item-d-descr">
                <p>Descripcion</p>
                <p>{item.desc}</p>
                <div>
                    <p>{item.id}</p>
                </div>
            </div>
        </div>
    )
}