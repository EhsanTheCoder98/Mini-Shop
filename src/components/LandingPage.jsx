import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";
import loading from '../gif/Infinity-1.1s-210px (1).gif';

// components
import ProductsDiv from "./ProductsDiv";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchAPI } from "../redux/products/productsAction";

const LandingPage = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productsContainer);

  useEffect(() => {
    dispatch(fetchAPI());
    console.log("rendered");
  }, []);
  return (
    <div className={styles.container}>
      {productsData.loading ? (
        <img className={styles.phrases} src={loading} />
      ) : productsData.error ? (
        <h1 className={styles.phrases}>There is a problem!</h1>
      ) : (
        productsData.products.map((item) => (
          <ProductsDiv key={item.id} products={item} />
        ))
      )}
    </div>
  );
};

export default LandingPage;
