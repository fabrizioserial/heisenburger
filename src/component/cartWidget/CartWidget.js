import React, { useContext } from 'react'
import "./CartWidget.css"
import cartlogo from './cart.svg';
import { ContextElement } from '../../ContextCart';

export const CartWidget = () => {

    const contador = useContext(ContextElement).contador

    return(
        <div className="cart-cont">
            <img src={cartlogo} className="cart"/>
            <div className="cart-counter">
                <p>{contador}</p>
            </div>
        </div>
    )
}