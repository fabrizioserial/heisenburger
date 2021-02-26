import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContextElement } from "../../../../ContextCart";
import { ItemCount } from "../../../itemcount/ItemCount";
import '../itemDetail/ItemDetail.css'

export const ItemDetail = ({itemProp})=>{
    const [item,setItem] = useState()
    const [contador,setContador] = useState(0)
    const addItem = useContext(ContextElement).addItem
    const setContadorFun = useContext(ContextElement).setContadorFun


    const AddToCart = (i) =>{
        const item = {
            item:{
                title:itemProp.title,
                price:itemProp.price,
                desc:itemProp.desc,
                id:itemProp.id,
                thumbnail:itemProp.thumbnail,
                category:itemProp.category
            },
            quantity:i
        }
    
        setItem(item)
        setContador(i)
    }


    
    return(
        <React.Fragment>
            <div className="item-d-main-container">
                <div className="item-d-pictureandprice">
                    <div className="item-d-cont-picture">
                        <img src={itemProp.thumbnail} className="image"/>
                    </div>
                    <div className="item-d-cont-price">
                        <div className="title-cont">
                            <p className="item_category">{itemProp.category}</p>
                            <h3 className="item_title">{itemProp.title}</h3>
                        </div>
                    <p>${itemProp.price}</p>
                    <div className="counter-itemdetail">
                        {
                            
                            contador === 0 ? <ItemCount stock={20} handleEvent={AddToCart} initial={0} />
                            : <Link to="/cart"><button className="itemcount-terminar" onClick={()=>{
                                console.log("el item a pushear es ",item)
                                addItem(item)
                                
                            }}>Terminar compra</button></Link>

                        }
                        {
                            console.log(contador)
                        }
                    </div>
                    </div>
                </div>
            </div>
            <div className="item-d-descr">
                <h2>DESCRIPCION</h2>
                <hr className="line-desc">
                </hr>
                <p>{itemProp.desc}</p>
                
            </div>
        </React.Fragment>


    )
}