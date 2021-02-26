import  React, { useContext, useEffect, useState }  from "react";
import { ContextElement } from "../../ContextCart";
import './Cart.css'
import { CartItem } from "./cartItem/CartItem";
import  emptyCart from "../../image/carro-vacio.png"
import {Link} from 'react-router-dom'
import { FinishPayment } from "../cart/FinishedPayment/FinishPayment";

export const Cart = () =>{

    const [price,setPrice] = useState(0)
    const [elements,setElement] = useState(useContext(ContextElement).elements)
    const [orderItem,setOrder] =useState(useContext(ContextElement).orderItem)
    const [finish,setFinish] = useState(false)
        

    useEffect(()=>{
        
        console.log("finished cart es ",orderItem)
    },[orderItem])

    var finalPrice = 0
    const updateElement = useContext(ContextElement).changeValue

    /*
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
        setItem(listOfProduct)
    },[])

    const getFinalPrice = () =>{
        return "250"
    }
    
*/

    const deleteElement = (idOfItemToDelete)=>{
        console.log("Se va a eliminar el valor de ",idOfItemToDelete)
        var newmap = elements.slice()
        var index = 0
        newmap.map(item => {

            item.item.id === idOfItemToDelete ?
                newmap.splice(index,1):
                index = index +1
        })
        updateElement(newmap)
        setElement(newmap)
        
        
    }
    useEffect(()=>{
        
        elements.map(item => {finalPrice = finalPrice +  (item.item.price * item.quantity)})
        console.log("El valor final es ",finalPrice)
        console.log("el elemento del carro es ",elements)
        setPrice(finalPrice)
        
        
    },[elements,deleteElement])

    const switchFinish = () =>{
        setFinish(true)
        console.log("se cambio a ", finish)
    }
    
    useEffect(()=>{

    },[finish])

    return(
        <div className="cart-background">
            <div className="cart-back-cart">
                <div className="cart-title">
                    <p className="cart-title-text">Carro</p>
                    <div className="line-undercart"/>
                </div>
                {
                     (elements.length >0 && elements) ?
                     <div>
                         {
                             elements.map((product) =>  <CartItem key={product.id} item={product} deletefun={deleteElement}/>)
                         }
                         
                         <div className="cart-total">

                            
                             
                             {
                                 finish ? <FinishPayment order={orderItem} totalprice={price}/> : 
                                 <div className="cart-pay">
                                    {
                                        <p className="cart-total-totalvalue">
                                            Total: ${price}
                                        </p>
                                    }
                                    <button className="cart-total-btn-pagar" onClick={switchFinish}>
                                        PAGAR
                                    </button>
                                 </div>
                             }
                         </div>
                     </div>
                     :
                     <div className="cart-empty">
                         <img src={emptyCart}/>
                         <p className="cart-empty-text">CARRITO VACIO</p>
                         <p className="cart-empty-text2">Parece que todavia no seleccionaste ningun pedido!</p>
                         
                         <Link to="/"><button className="cart-empty-btn">Volver al inicio</button></Link>
                     </div>
                     
                }
            </div>

        </div>
    )
}