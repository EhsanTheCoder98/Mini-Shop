import React from 'react';
import styles from './ProductsDiv.module.css';
import { Link, Navigate } from 'react-router-dom';

// methods
import { titleHandler } from '../methods/functions';

const ProductsDiv = ({products}) => {
    return (
        <div className={styles.container}>
            <img src={products.image}/>
            <p className={styles.title}>{titleHandler(products.title)}</p>
            <span className={styles.title}>{products.price}$</span>
            <Link to={`productdetail/${products.id}`} className={styles.detail}>Details&Buy</Link>
        </div>
    );
};

export default ProductsDiv;