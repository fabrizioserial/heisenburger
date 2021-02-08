import React from 'react'
import '../Categories_home/CategoryItemHome.css'

export const CategoryItemHome = ({item,size}) =>{

    return(
        size === "large" ?
        <div className="cat-cont-background-item">
            <img src={item.thumbnail} className="cat-cont-image-item"/>
        </div>:
        <div className="cat-cont-background-item-small">
            <img src={item.thumbnail} className="cat-cont-image-item-small"/>
        </div>
    )
}