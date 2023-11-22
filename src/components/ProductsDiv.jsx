import React from 'react';
import styles from './ProductsDiv.module.css';
import { Link, Navigate } from 'react-router-dom';

// methods
import { titleHandler } from '../methods/functions';

const ProductsDiv = ({products}) => {
    return (
        <div className={styles.container}>
            <img src={products.image}/>
            <p>{titleHandler(products.title)}</p>
            <span>{products.price}$</span>
            <Link to={"productdetail"}>Details</Link>
        </div>
    );
};

export default ProductsDiv;