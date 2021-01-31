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
                    <ItemCount stock={20} initial={0}/>
                </div>
            </div>
            <div className="item-d-descr">
                <p>Descripcion</p>
                <p>{props.desc}</p>
                <div>
                    <p>{props.id}</p>
                </div>
            </div>
        </div>
    )
}