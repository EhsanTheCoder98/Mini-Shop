import React from 'react';
import styles from './Cart.module.css';

// components
import CartProducts from './CartProducts';

// redux
import { useSelector , useDispatch } from 'react-redux';
import { checkout } from '../redux/cart/cartAction';

const Cart = () => {
    const selectedProducts = useSelector(state=>state.cartContainer.selectedProducts);
    const overallPrice = useSelector(state=>state.cartContainer.overallPrice);
    const checkedout = useSelector(state=>state.cartContainer.checkout);
    const dispatch = useDispatch();
    return (
        <>
        <div className={styles.container}>
            {selectedProducts.map(item=><CartProducts key={item.id} products={item}/>)}
        </div>
        {selectedProducts.length ? <div className={styles.checkoutContainer}>
            <span>Your Overall Payment Is {overallPrice.toFixed(2)}$ </span>
            <button onClick={()=>dispatch(checkout())}>Want To Checkout?</button>
        </div> : null}
        {checkedout ? <h3 className={styles.succeedMsg}>Successfully Done!</h3> : null}
        </>
    );
};

export default Cart;