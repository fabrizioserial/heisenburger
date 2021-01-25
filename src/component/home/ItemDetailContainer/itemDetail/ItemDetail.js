import React,{useState,useEffect} from "react";
import '../itemDetail/ItemDetail.css'

export const ItemDetail = (props)=>{
    console.log(props)
    return(
        <div className="item-d-main-container">
            <div className="item-d-pictureandprice">
                <div className="item-d-cont-picture">
                    <img src={props.item.image}/>
                </div>
                <div className="item-d-cont-price">
                    <h3>{props.item.title}</h3>
                    <p>${props.item.price}</p>
                </div>
            </div>
            <div className="item-d-descr">
                <p>Descripcion</p>
                <p>{props.item.desc}</p>
                <div>
                    <p>{props.item.id}</p>
                </div>
            </div>
        </div>
    )
}