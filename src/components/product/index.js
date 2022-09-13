import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { Item } from '../item/index';

const Product = ({ state, dispatch }) => {
    const [products, setProducts] = useState([]);

    const fetchProduct = async () => {
        const res = await axios.get('https://dummyjson.com/products');
        setProducts(res.data.products);
        dispatch({
            type: 'ADD_TO_PRODUCT',
            payload: res.data.products
        });
    }

    useEffect(() => {
        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="product-container">
            {products.map((product) => {
                return <Item key={product.id} product={product} state={state} dispatch={dispatch} />
            })}
        </div>
    )
}

export { Product }