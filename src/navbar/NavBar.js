import React from 'react';
import "./NavBar.css";

export const NavBar = () =>{
    return(
        <div className="nav-content">
            <img src="#" className="nav-logo"/>
            <div className="nav-items">
                <a>HOME</a>
                <a>CATEGORIES</a>
                <a>FAVORITES</a>
                <a>CART</a>
            </div>
        </div>
    )
}