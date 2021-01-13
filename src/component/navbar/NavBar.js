import React from 'react';
import "./NavBar.css";
import { CartWidget } from '../cartWidget/CartWidget';

export const NavBar = () =>{
    return(
        <div className="nav-content">
            <img src="#" className="nav-logo"/>
            <div className="nav-items">
                <p>HOME</p>
                <p>CATEGORIES</p>
                <p>FAVORITES</p>
                <CartWidget/>
            </div>
        </div>
    )
}