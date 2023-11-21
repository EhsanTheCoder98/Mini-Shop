import React from 'react';
import styles from './ProductsDiv.module.css';
import { Link } from 'react-router-dom';

const ProductsDiv = ({products}) => {
    return (
        <div className={styles.container}>
            <img src={products.image}/>
            <p>{products.title}</p>
            <span>{products.price}$</span>
            <Link to={"/productdetail"}>Details</Link>
        </div>
    );
};

export default ProductsDiv;