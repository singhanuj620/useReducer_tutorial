![useReducer](https://daveceddia.com/images/useReducer-hook-twitter.png)

## useReducer
A inbuilt react hook for mimicking **Redux** concepts in react itself. If you are comfortable with Redux concepts, you will get the jist.

### Don't know about REDUX ? 🙈
#### ➡️➡️ Read it here [Learn Redux easily with a project](https://dev.to/singhanuj620/react-redux-learn-the-redux-easily-with-project-aji)

**Note** : The code snippets or the code reference is from this Github repo, which I have made for this tutorial. It's the basic shopping cart application, that add, removes products to cart and also you can increase or decrease the product quantity.

Github Repo : [useReducer_tutorial](https://github.com/singhanuj620/useReducer_tutorial)
Live Demo of the application : [Click Here](https://singhanuj620.github.io/useReducer_tutorial/)

![0](./screenshots/0.png)

## Let's get started 😈😈👇👇

> An alternative to useState. Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a `dispatch` method. (If you’re familiar with Redux, you already know how this works.)

The official definition of useReducer [Official Doc](https://reactjs.org/docs/hooks-reference.html#usereducer)

The syntax of declaration is :

```javascript 
const [state, dispatch] = useReducer(reducer, initialArg);
```

See the main motive behind using useReducer is to have a common place known as **store or state** in the application, where we can store the data that we wanted which can be accessible to the components directly. They can fetch that data from that state or update that state as required. *( There is a catch in updating the store, we will see later in the blog )*

In our shopping cart application, we have 2 main components : 
 1. Product Section
 2. Cart Section

These both will be required to access the same state, so we will have to declare the state in their parent component, which in our case is [App.js](https://github.com/singhanuj620/useReducer_tutorial/blob/master/src/App.js)

```javascript
import { productReducer } from  './reducers'
const  App = () => {
	const  initialState = {
		products: [],
		cart: []
	}  

	const [state, dispatch] = useReducer(productReducer, initialState);
```
We have declare the initial state to have 2 key value pair:

 - products []
 - cart []

and for the reducer we are importing it from another file *( for better readability )*.


![1](./screenshots/1.png)

And for the child component to access the same state, you need to pass these two i.e. state and dispatch as a prop to those child component which you want to interact with same state.


![2](./screenshots/2.png)

> **Note** : If you are not comfortable with this code that what's state, action, action.payload, type etc., you need to brush up redux
> concepts. More about that here : [Learn Redux with
> project](https://dev.to/singhanuj620/react-redux-learn-the-redux-easily-with-project-aji)

we will be using **dispatch** with specific type to update the state as per requirement. *We can only update the state using dispatch, **not directly**.*

Make sure your reducer function accepts 2 parameter i.e **state and action**

```javascript
const  productReducer = (state, action) => { }
```

### How Product component will interact with state : 
[*src/components/product/index.js*](https://github.com/singhanuj620/useReducer_tutorial/blob/master/src/components/product/index.js)

We are using a dummy product API for fetching some sample products data. So from the product component, we will store the all product details to the state, so that we have access to the product list.

```javascript
const fetchProduct = async () => {
        const res = await axios.get('https://dummyjson.com/products');
        setProducts(res.data.products);
        dispatch({
            type: 'ADD_TO_PRODUCT',
            payload: res.data.products
        });
    }
```

Using the dispatch, I'm updating all the product list into state. And on the basis of data present in cart [] of state, Product component is dynamically changing the button to 'add to cart' or 'remove from cart'.

### How Cart component will interact with state : 
[*src/components/cart/index.js*](https://github.com/singhanuj620/useReducer_tutorial/blob/master/src/components/cart/index.js)

```javascript
const  Cart = ({ state, dispatch }) => {
const { cart } = state;
```

we will access the state directly as shown. And if any state updating is required as changing the cart item quantity, we will use dispatch with a specific action type and payload data which will instruct the reducer to change the state as per requirement.

```javascript
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
```

### That's It, You have now understood what is useReducer. 😎😎

You can play around with the github repo for more practice.
Till then **ADIOS** 🙌
### Don't forgot to like 💗
