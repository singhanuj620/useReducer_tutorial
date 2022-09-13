import React, { useEffect, useState } from 'react';
import './style.css';
import { rupee, shopping } from '../../assests';
import CartItem from '../cartItem';

const Cart = ({ state, dispatch }) => {

    const { cart } = state;
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let newCartTotal = 0;
        cart.forEach(item => {
            newCartTotal = newCartTotal + (item.price * item.qty);
        });
        setCartTotal(newCartTotal);
    }, [cart]);

    const handleInc = (id) => {
        dispatch({
            type: 'INCREASE_QTY',
            payload: id
        });
    }

    const handleDec = (id) => {
        dispatch({
            type: 'DECREASE_QTY',
            payload: id
        });
    }


    return (
        <div className="cart-container border-green">
            <div className="cart-heading">
                <div><img src={shopping} alt='shopping-cart-icon' className='cart-icon' /></div>
                <div className="cart-title">Cart</div>
            </div>
            <div className="cart-total">
                Total : &nbsp;<div><img src={rupee} alt='rupee-icon' className='rupee-icon' /></div> {cartTotal}
            </div>
            <div className='cart-item-div'>
                {cart.map(item => {
                    return <CartItem key={item.id} state={state} dispatch={dispatch} item={item} handleInc={handleInc} handleDec={handleDec} />
                })}
            </div>
        </div>
    )
}

export { Cart }