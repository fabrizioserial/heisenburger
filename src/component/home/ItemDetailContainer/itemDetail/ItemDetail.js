import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../ContextCart";
import { ItemCount } from "../../../itemcount/ItemCount";
import '../itemDetail/ItemDetail.css'

export const ItemDetail = (props)=>{
    const contador = useContext(CartContext)[0]
    const addItem = useContext(CartContext)[3]
    const setContadorFun = useContext(CartContext)[1]
    const [product,setProduct] = useState([
                props.title,
                props.price,
                props.desc,
                props.id,
                props.thumbnail
            ])

    const AddToCart = (i) =>{
        setProduct([...product,i])
        setContadorFun(i) 
    }
    
    return(
        <div className="item-d-main-container">
            <div className="item-d-pictureandprice">
                <div className="item-d-cont-picture">
                    <img src={props.thumbnail} className="image"/>
                </div>
                <div className="item-d-cont-price">
                    <h3>{props.title}</h3>
                    <p>${props.price}</p>
                    <div className="counter-itemdetail">
                        {
                            
                            contador === 0 ? <ItemCount stock={props.stock} handleEvent={AddToCart} initial={0} />
                            : <Link to="/cart"><button onClick={()=>{
                                addItem(product)
                            }}>Terminar compra</button></Link>

                        }
                        {
                            console.log(contador)
                        }
                    </div>
                </div>
            </div>
            <div className="item-d-descr">
                <h2>Descripcion</h2>
                <p>{props.desc}</p>
                <div>
                    <p>{props.id}</p>
                </div>
            </div>
        </div>
    )
}