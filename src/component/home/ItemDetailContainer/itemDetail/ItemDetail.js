import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemCount } from "../../../itemcount/ItemCount";
import '../itemDetail/ItemDetail.css'

export const ItemDetail = (props)=>{
    const [value,setValue] = useState(0)

    const AddToCart = (i) =>{
        setValue(i) 
        
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
                            
                            value === 0 ? <ItemCount stock={props.stock} handleEvent={AddToCart} initial={0} />
                            : <Link to="/cart"><button>Terminar compra</button></Link>

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