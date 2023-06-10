import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductDetailsReducer, getProductReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/CartReducer';

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;