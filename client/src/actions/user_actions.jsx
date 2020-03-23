import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    ADD_TO_CART_USER,
    GET_CART_ITEMS_USER
   
} from './types';

export function loginUser(dataToSubmit){
    const request = axios.post(`/api/users/login`, dataToSubmit)
                         .then(response => response.data)

 return {
        type: LOGIN_USER,
         payload: request
   }
}
export function registerUser(dataToSubmit){
    const request = axios.post(`/api/users/register`, dataToSubmit)
                         .then(response => response.data)

 return {
        type: REGISTER_USER,
         payload: request
   }
}


export function auth() {
    const request = axios.get(`/api/users/auth`)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function addToCart(_id) {
    const request = axios.get(`/api/users/addToCart?productId=${_id}`)
        .then(response => response.data);

    return {
        type: ADD_TO_CART_USER,
        payload: request
    }
}

export function getCartItems(cartItems, userCart) {
    const request = axios.get(`/api/product/products_by_id?id=${cartItems}&type=array`)
        .then(response => {


            //Make CartDetail inside Redux Store 
            // We need to add quantity data to Product Information that come from Product Collection. 

            userCart.forEach(cartItem => {
                response.data.forEach((productDetail, i) => {
                    if (cartItem.id === productDetail._id) {
                        response.data[i].quantity = cartItem.quantity;
                    }
                })
            })
            return response.data;
        });

    return {
        type: GET_CART_ITEMS_USER,
        payload: request
    }
}