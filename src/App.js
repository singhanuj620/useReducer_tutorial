import './App.css';
import { Cart, Product } from './components'
import React, { useReducer } from 'react';
import { productReducer } from './reducers'

const App = () => {
  const initialState = {
    products: [],
    cart: []
  }

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <div className="app-container">
      <div>
        <Product state={state} dispatch={dispatch} />
      </div>
      <div>
        <Cart state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
