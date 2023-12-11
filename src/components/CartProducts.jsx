import React from 'react';
import styles from "./CartProducts.module.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { ImBin } from "react-icons/im";

// functions
import { quantityCheck, titleHandler} from "../methods/functions";
// redux
import { useSelector,useDispatch } from 'react-redux';
import { increaseItem ,deleteItem ,decreaseItem } from '../redux/cart/cartAction';

const CartProducts = ({products}) => {
    const cartProducts = useSelector(state=>state.cartContainer.selectedProducts);
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={products.image}/>
            </div>
            <div className={styles.centerContainer}>
                <p>{titleHandler(products.title)}</p>
                <span>{products.price}$</span>
                <span>{products.quantity}</span>
            </div>
            <div    className={styles.buttonContainer}>
            <button onClick={() => dispatch(increaseItem(products))}>
                  <FaPlus />
                </button>
                {quantityCheck(cartProducts,products.id) === 1 &&  <button onClick={() => dispatch(deleteItem(products))}>
                    <ImBin />
                  </button>}
                {quantityCheck(cartProducts,products.id) > 1 && <button onClick={() => dispatch(decreaseItem(products))}>
                    <FaMinus />
                  </button>}  
            </div>
        </div>
    );
};

export default CartProducts;