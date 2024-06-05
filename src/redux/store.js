import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesReducer } from './reducers/CategoryReducer';
import { productReducer, productDetailsReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/CartReducer';


const reducer = combineReducers({
    cat: categoriesReducer,
    pro : productReducer,
    pDetail: productDetailsReducer,
    cart : cartReducer
})

let initializeState = {
    cart: {
        cartItems : localStorage.getItem('cart123')
        ? JSON.parse(localStorage.getItem('cart123'))
        : []
    }
}

const Store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))

export default Store