import React from 'react'
import '../itemRecomendado/ItemRecommended.css'

export const ItemRecommended  = ({item}) =>{
    return(
        <div>
            <img src={item.thumbnail} className="img-recommended"/>
        </div>
    )
}