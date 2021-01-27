import React from 'react';
import "./NavBar.css";
import { CartWidget } from '../cartWidget/CartWidget';
import {Link} from 'react-router-dom'

export const NavCategory = () =>{
    return(
        <React.Fragment>
        
        <div className="category-content">
            <div className="nav-items">
                <Link to={"/category/carne"}>
                    <p>🥩 CARNE</p>
                </Link>
                <Link to={"/category/vegan"}>
                    <p>🥦 VEGANA</p>
                </Link>
            </div>
            
        </div>
        </React.Fragment>

    )
}