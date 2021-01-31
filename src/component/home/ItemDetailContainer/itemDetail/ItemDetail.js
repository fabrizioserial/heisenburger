import React from "react";
import { ItemCount } from "../../../itemcount/ItemCount";
import '../itemDetail/ItemDetail.css'

export const ItemDetail = (props)=>{

  
    

    console.log()
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
                    <ItemCount stock={props.stock} initial={0} />
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