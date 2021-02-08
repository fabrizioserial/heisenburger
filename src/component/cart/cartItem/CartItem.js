import React from "react";
import './CartItem.css'

export const CartItem = ({item,deletefun}) =>{
    return(
        <React.Fragment>
            <div className="cart-item-background">
                <img className="img-cart" src={item.item.thumbnail}/>
                <div className="name-cart-item">
                    <p className="cat-cart-item">{item.item.categoryId}</p>
                    <p className="title-cart-item">{item.item.title}</p>
                    <p className="price-cart-item">${item.item.price}</p>
                </div>
                <div className="cart-indicator">
                    <p>CANTIDAD</p>
                    <p className="cart-indicator-quantiy">{item.quantity}</p>
                    
                    <div className="cart-ind-btn">
                        <button>-</button>
                        <button>+</button>
                    </div>
                    <button className="cart-item-delete" onClick={()=>{deletefun(item.item.id)}}>ELIMINAR</button>
                </div>
            </div>
            <div className="line-under-item-cart"/>
        </React.Fragment>
        
    )
}