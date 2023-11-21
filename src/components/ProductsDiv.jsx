import React from 'react';
import styles from './ProductsDiv.module.css';

const ProductsDiv = ({products}) => {
    return (
        <div className={styles.container}>
            <img src={products.image}/>
            <p>{products.title}</p>
        </div>
    );
};

export default ProductsDiv;