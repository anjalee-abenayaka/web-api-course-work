import {
    LOGIN_USER,
    REGISTER_USER,
    ADD_TO_CART_USER,
    GET_CART_ITEMS_USER
} from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload}
        case REGISTER_USER:
            return { ...state, loginSuccess: action.payload}
            
         case ADD_TO_CART_USER:
                return {
                    ...state, userData: {
                        ...state.userData,
                        cart: action.payload
                    }
                }
          case GET_CART_ITEMS_USER:
                    return {
                        ...state, cartDetail: action.payload
                    }       
        default:
             return state;
    }
}