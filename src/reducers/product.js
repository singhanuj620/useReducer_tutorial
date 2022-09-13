const productReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_PRODUCT':
            return { ...state, products: action.payload }
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case 'REMOVE_FROM_CART':
            return { ...state, cart: [...state.cart.filter(item => item.id !== action.payload)] }
        case 'INCREASE_QTY':
            let cart_item_inc = state.cart.find(item => item.id === action.payload);
            cart_item_inc.qty = cart_item_inc.qty + 1;
            return { ...state, cart: [...state.cart] };
        case 'DECREASE_QTY':
            let cart_item_dec = state.cart.find(item => item.id === action.payload);
            if (cart_item_dec.qty === 1) {
                return { ...state, cart: [...state.cart.filter(item => item.id !== action.payload)] }
            }
            else {
                cart_item_dec.qty = cart_item_dec.qty - 1;
                return { ...state, cart: [...state.cart] };
            }
        default:
            return state
    }
}

export { productReducer }