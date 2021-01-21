import React from 'react'

export const Item = (props) =>{
    return(
        <div id={props.id}>
            <img src={props.pictureUrl}/>
            <h3>{props.title}</h3>
            <h4>${props.price}</h4>
        </div>
    )
}