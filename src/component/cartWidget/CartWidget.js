import React from 'react'
import "./CartWidget.css"
import cartlogo from './cart.svg';

export const CartWidget = () => {
    return(
        <div className="cart-cont">
            <img src={cartlogo} className="cart"/>
            <div className="cart-counter">
                <p>0</p>
            </div>
        </div>
    )
}