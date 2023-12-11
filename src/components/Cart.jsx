import React from 'react';
import styles from './Cart.module.css';

// components
import CartProducts from './CartProducts';

// redux
import { useSelector , useDispatch } from 'react-redux';

const Cart = () => {
    const selectedProducts = useSelector(state=>state.cartContainer.selectedProducts);
    return (
        <div className={styles.container}>
            {selectedProducts.map(item=><CartProducts key={item.id} products={item}/>)}
        </div>
    );
};

export default Cart;