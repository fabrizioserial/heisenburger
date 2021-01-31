import React,{useState} from "react"
import {Link} from 'react-router-dom'


export const CategoryItem = (props) =>{

    return(
        <Link to={"/category/" + props.name}>
            <h1>{props.title}</h1>
        </Link>
        
    )
}