import React from "react"
import "./ItemListContainer.css"

export const ItemListContainer = (props) =>{
    return(
        <div className="container">
            <h1 className="text-cont">{props.text}</h1>
        </div>
    )
}