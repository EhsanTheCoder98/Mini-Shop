import React from 'react';
import styles from './ProductDetails.module.css';

import { useParams } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux/es/hooks/useSelector';

const ProductDetails = () => {
    const params = useParams();
    const products = useSelector(state=>state.productsContainer.products);
    const data = products[params.id - 1];
    const {title} = data;

    return (
        <div className={styles.container}>
          <p style={{padding:"60px"}}>{title}</p>
        </div>
    );
};

export default ProductDetails;