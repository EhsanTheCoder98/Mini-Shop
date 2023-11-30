import React from "react";
import styles from "./ProductDetails.module.css";

import { useParams } from "react-router-dom";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { titleHandler } from "../methods/functions";

const ProductDetails = () => {
  const params = useParams();
  const products = useSelector((state) => state.productsContainer.products);
  const data = products[params.id - 1];
  const { title , image , description , price , category } = data;

  return (
    <div className={styles.bigcontainer}>
      <div className={styles.container}>
        <img src={image}/>
        <div className={styles.rightContainer}>
          <h3>{titleHandler(title)}</h3>
          <p>{description}</p>
          <span>{category}</span>
          <span>{price}$</span>
          <button>Add to cart</button>
          <button>Erase from cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
