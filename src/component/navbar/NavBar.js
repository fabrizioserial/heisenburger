import React from 'react';
import "./NavBar.css";
import { CartWidget } from '../cartWidget/CartWidget';
import {Link} from 'react-router-dom'
import  Logo  from "../../image/logo.png";

export const NavBar = () =>{
    return(
        <React.Fragment>
        <div className="nav-content">
            <Link to="/">
                <img src={Logo}  className="nav-logo"/>
            </Link>
            <div className="nav-items">
                <Link to="/">
                     <p>HOME</p>
                </Link>
                <Link to="/categories">
                    <p>CATEGORIES</p>
                </Link>
                <p>FAVORITES</p>
                <CartWidget/>
            </div>
        </div>
        
        </React.Fragment>

    )
}