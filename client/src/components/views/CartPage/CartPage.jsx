import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../actions/user_actions';
import UserCartBlock from './sections/UserCartBlock';
import { Result,Empty } from 'antd';

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

            <UserCartBlock
            products={props.user.cartDetail}
            />
            
                    <div style={{ marginTop: '3rem' }}>
                        <h5>Total amount: Rs </h5>
                    </div>
                    <Result
                            status="success"
                            title="Successfully Purchased Items"
                        /> :
                        <div style={{
                            width: '100%', display: 'flex', flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <br />
                            <Empty description={false} />
                            <p>No Items In the Cart</p>

                        </div>
            </div>
            </div>

    )
}
export default CartPage