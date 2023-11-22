import React, { useEffect , useState } from "react";
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
  const [isVisible,setIsVisibile] = useState(false);
  const productsData = useSelector((state) => state.productsContainer);

  useEffect(() => {
    dispatch(fetchAPI());
    setTimeout(()=>{
      setIsVisibile(true);
    },1200)
  }, []);
  return (
    <div className={styles.bigContainer}>
      <div className={`${styles.leftcontainer} ${isVisible ? styles.fade : ''}`}>
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
      {!productsData.loading && !productsData.error ? <div className={`${styles.rightcontainer} ${isVisible ? styles.fade : ''}`}>
        bonus status filters
      </div> : null }
      
    </div>
  );
};

export default LandingPage;
