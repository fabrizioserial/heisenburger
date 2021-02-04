import React, { useContext } from 'react'
import "./CartWidget.css"
import cartlogo from './cart.svg';
import { CartContext } from '../../ContextCart';

export const CartWidget = () => {

    const contador = useContext(CartContext)[0]

    return(
        <div className="cart-cont">
            <img src={cartlogo} className="cart"/>
            <div className="cart-counter">
                <p>{contador}</p>
            </div>
        </div>
    )
}