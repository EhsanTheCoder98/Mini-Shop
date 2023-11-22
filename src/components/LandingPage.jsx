import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";
import loading from "../gif/Infinity-1.1s-210px (1).gif";

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
    <div className={styles.bigContainer}>
      <div className={styles.leftcontainer}>
        {productsData.loading ? (
          <div className={styles.loadingContainer}>
            <img className={styles.phrases} src={loading} />
            <h2>Loading Products</h2>
          </div>
        ) : productsData.error ? (
          <h1 className={styles.phrases}>{productsData.error}</h1>
        ) : (
          productsData.products.map((item) => (
            <ProductsDiv key={item.id} products={item} />
          ))
        )}
      </div>
      <div className={styles.rightcontainer}>
        bonus status filters
      </div>
    </div>
  );
};

export default LandingPage;
