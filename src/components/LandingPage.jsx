import React, { useEffect } from "react";
import styles from './LandingPage.module.css';

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
    console.log("rendered")
  }, []);
  return (
    <div className={styles.container}>
      {productsData.products.map(item=><ProductsDiv key={item.id} products={item} />)}
    </div>
  );
};

export default LandingPage;
