import React, { useContext, useEffect, useState } from 'react'
import "./CartWidget.css"
import cartlogo from '../../image/ic_cart_black.png';

export const CartWidget = (props) => {


    return(
        <div className="cart-cont">
            <img src={cartlogo} className="cart"/>
            <div className="cart-counter">
                <p>{props.cont}</p>
            </div>
        </div>
    )
}