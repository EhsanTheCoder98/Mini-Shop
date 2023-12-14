import React from 'react';
import styles from "./LikedProducts.module.css";

// redux
import { useSelector } from 'react-redux';

// helping Functions
import { titleHandler } from '../methods/functions';

const LikedProducts = () => {
    const likedProducts = useSelector(state=>state.cartContainer.likedProducts);
    return (
        <div className={styles.bigContainer}>
            {likedProducts.length ? likedProducts.map(item=>
            <div className={styles.container}>
                <img className={styles.images} src={item.image}/>
                <p>{titleHandler(item.title)}</p>
            </div>) 
            : <h1>No Liked Products</h1>}
        </div>
    );
};

export default LikedProducts;