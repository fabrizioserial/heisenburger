import React from 'react'
import '../Categories_home/CategoryItemHome.css'
import { NavLink} from 'react-router-dom'

export const CategoryItemHome = ({item,size}) =>{

    return(
        size === "large" ?
        
        <div className="cat-cont-background-item">
            <NavLink to={"/category/" + item.id} activeClassName="cat-cont-link-item">
                <img src={item.thumbnail} className="cat-cont-image-item"/>
                <p className="cat-cont-title-item">{item.title}</p>
            </NavLink>
        </div> :
        <div className="cat-cont-background-item-small">
            <NavLink to={"/category/" + item.id} activeClassName="cat-cont-link-item">
                <img src={item.thumbnail} className="cat-cont-image-item-small"/>
                <p className="cat-cont-title-item">{item.title}</p>
            </NavLink>
        </div>
    )
}