import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import loading from "../gif/Infinity-1.1s-210px (1).gif";
import { IoSearchOutline } from "react-icons/io5";

// components
import ProductsDiv from "./ProductsDiv";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchAPI } from "../redux/products/productsAction";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisibile] = useState(false);
  const productsData = useSelector((state) => state.productsContainer);
  useEffect(() => {
    dispatch(fetchAPI());
    setTimeout(() => {
      setIsVisibile(true);
    }, 1200);
  }, []);
  const [search,setSearch] = useState("");
  const [sorted, setSorted] = useState(productsData.products);
  const sortProducts = (category) => {
    if (productsData.products) {
      const sort = productsData.products.filter(
        (product) => product.category === category
      );
      setSorted(sort);
    }
  };
  const resetStore = () => {
    setSorted(productsData.products);
  };
  const searchHandler = () => {
    const sort = productsData.products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setSorted(sort);
  }
  return (
    <div className={styles.bigContainer}>
      <div
        className={`${styles.leftcontainer} ${isVisible ? styles.fade : ""}`}
      >
        {productsData.loading ? (
          <div className={styles.loadingContainer}>
            <img className={styles.phrases} src={loading} />
            <h2>Loading Products</h2>
          </div>
        ) : productsData.error ? (
          <h1 className={styles.phrases}>{productsData.error}</h1>
        ) : (
          sorted.map((item) => <ProductsDiv key={item.id} products={item} />)
        )}
      </div>
      {!productsData.loading && !productsData.error ? (
        <div
          className={`${styles.rightcontainer} ${isVisible ? styles.fade : ""}`}
        >
          <p>What are you looking for ?</p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search the product"
              value={search}
              onChange={(event)=>setSearch(event.target.value)}
            />
            <button onClick={searchHandler}><IoSearchOutline className={styles.searchIcon} /></button>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => sortProducts("men's clothing")}>
              Mens Clothing
            </button>
            <button onClick={() => sortProducts("women's clothing")}>
              Women's Clothing
            </button>
            <button onClick={() => sortProducts("jewelery")}>Jewelery</button>
            <button onClick={() => sortProducts("electronics")}>
              Electronics
            </button>
            <button onClick={() => resetStore()}>Reset Store</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LandingPage;
