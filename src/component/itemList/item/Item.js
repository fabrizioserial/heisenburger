import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

export const Item = (props) =>{
    return(
        <Link to={`/item/${props.id}`}>
            <div className="item-cont" id={props.id}>
                <img className="item-img" src={props.thumbnail}/>
                <p className="item-title">{props.title}</p>
                <p className="item-price">${props.price}</p>
            </div>
        </Link>
    )
}