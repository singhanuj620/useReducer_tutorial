import React from 'react';
import './style.css';

const CartItem = ({ state, dispatch, item, handleInc, handleDec }) => {
    const { id, title, thumbnail, price, qty } = item;
    return (
        <div className="cart-item-container">
            <div className="cart-item-img"><img src={thumbnail} className="cart-img-thumbnail" alt={id} /></div>
            <div className="cart-item-details">
                <div className="cart-item-title">{title}</div>
                <div className="cart-item-qty">
                    <button onClick={() => handleInc(id)}>+</button>
                    <div>Qty: &nbsp; {qty}</div>
                    <button onClick={() => handleDec(id)}>-</button>
                </div>
                <div className="cart-item-price">
                    Total : &nbsp; {price * qty}
                </div>
            </div>
        </div>
    )
}

export default CartItem;