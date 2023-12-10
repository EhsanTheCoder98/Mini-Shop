import React from "react";
import styles from "./ProductDetails.module.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { useParams } from "react-router-dom";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import {useDispatch} from 'react-redux'
import { titleHandler } from "../methods/functions";
import { addItem ,deleteItem ,increaseItem ,decreaseItem } from "../redux/cart/cartAction";

const ProductDetails = () => {
  const params = useParams();
  const products = useSelector((state) => state.productsContainer.products);
  const data = products[params.id - 1];
  const { title , image , description , price , category } = data;
  const dispatch = useDispatch();

  return (
    <div className={styles.bigcontainer}>
      <div className={styles.container}>
        <img src={image}/>
        <div className={styles.rightContainer}>
          <h3>{titleHandler(title)}</h3>
          <p>{description}</p>
          <span>category: {category}</span>
          <span>price: {price}$</span>
          <div className={styles.buttonContainer}>
            <button onClick={()=>dispatch(addItem(data))}>Add to cart</button>
            <button onClick={()=>dispatch(deleteItem(data))}><ImBin /></button>
            <button onClick={()=>dispatch(decreaseItem(data))}><FaMinus /></button>
            <button onClick={()=>dispatch(increaseItem(data))}><FaPlus /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
