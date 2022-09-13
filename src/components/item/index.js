import React, { useState, useEffect } from 'react';
import './style.css';

const Item = ({ product, state, dispatch }) => {

    const { thumbnail, title, price, id } = product;
    const { cart, products } = state;
    const isPresentInCart = cart.some(item => item.id === id);

    const handleAdd = (id) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: products.find(item => item.id === id)
        });
    }

    const handleRemove = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        });
    }

    return (
        <div className="item-container">
            <div className="item-thumbnail"><img src={thumbnail} alt={title} className="img-thumbnail" /></div>
            <div>
                <div className="item-title">{title}</div>
                <div className='item-details'>
                    <div>Price : <strong>{price}</strong></div>
                    <div>Qty : 1</div>
                </div>
            </div>
            {isPresentInCart ? <div className="item-button-div">
                <button className="item-button-remove" onClick={() => handleRemove(id)}>Remove from cart </button>
            </div> : <div className="item-button-div">
                <button className="item-button-success" onClick={() => handleAdd(id)}>Add to cart</button>
            </div>
            }
        </div>
    )
}

export { Item }