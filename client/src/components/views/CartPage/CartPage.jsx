import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../actions/user_actions';
import UserCartBlock from './sections/UserCartBlock';

function CartPage(props){
    const dispatch = useDispatch();

    useEffect(() => {
        let cartItems = [];
        if (props.user.userData && props.user.userData.cart){
            if (props.user.userData.cart.length > 0 ){
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
            }
        }
        
    }, [props.user.userData])

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
        <h5>My Cart</h5>
        <div>

            <UserCartBlock/>
            </div>
            </div>

    )
}
export default CartPage