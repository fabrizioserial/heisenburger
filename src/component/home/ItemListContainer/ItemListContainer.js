import React from "react";
import { ItemCount } from "../../itemcount/ItemCount";
import "./ItemListContainer.css";


export const ItemListContainer = (props) =>{
    return(
        <div className="container">
            <h1 className="text-cont">{props.text}</h1>
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}