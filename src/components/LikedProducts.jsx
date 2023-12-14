import React from 'react';
import styles from "./LikedProducts.module.css";

// redux
import { useSelector } from 'react-redux';

const LikedProducts = () => {
    const likedProducts = useSelector(state=>state.cartContainer.likedProducts);
    return (
        <div className={styles.container}>
            {likedProducts.length ? likedProducts.map(item=><p>{item.title}</p>) : <h1>No Liked Products</h1>}
        </div>
    );
};

export default LikedProducts;