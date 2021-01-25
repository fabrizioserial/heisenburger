import React from 'react'
import './Item.css'

export const Item = (props) =>{
    return(
        <div className="item-cont" id={props.id}>
            <img className="item-img" src={props.thumbnail}/>
            <h3 className="item-title">{props.title}</h3>
            <h4 className="item-price">${props.price}</h4>
        </div>
    )
}