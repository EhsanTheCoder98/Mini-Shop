import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import loading from "../gif/Infinity-1.1s-210px (1).gif";
import { IoSearchOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { MdOutlineFilterListOff } from "react-icons/md";
import Aos from "aos";
import 'aos/dist/aos.css';

// components
import ProductsDiv from "./ProductsDiv";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchAPI } from "../redux/products/productsAction";

const LandingPage = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productsContainer);
  const [sorted, setSorted] = useState([]);
  const [filter,setFilter] = useState(false);
  useEffect(() => {
    if(!productsData.products.length) dispatch(fetchAPI());
    Aos.init({duration:800});
  }, []);
  useEffect(() => {
    setSorted(productsData.products);
  }, [productsData.products]);
  const [search,setSearch] = useState("");
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
  const clickHandler = ()=> {
    setFilter(!filter);
  }
  const keyHandler = (event) => {
    if(event.key === "Enter"){
      searchHandler();
    }
  }
  return (
    <div className={styles.bigContainer}>
      {!productsData.loading && !productsData.error ? (
        <div
          className={styles.rightcontainer}
          data-aos="fade-up"
          >
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search the product"
              value={search}
              onChange={(event)=>setSearch(event.target.value)}
              onKeyPress={keyHandler}
              />
            <button onClick={searchHandler}><IoSearchOutline className={styles.searchIcon} /></button>
          </div>
          <div className={styles.filterContainer} onClick={clickHandler}  >
            <span>Filters</span>{filter ? <MdOutlineFilterListOff className={styles.filterIcon} data-aos="fade" /> : <IoFilter className={styles.filterIcon} data-aos="fade" /> }
          </div>
          {filter && <div className={styles.buttonContainer} data-aos="fade-right">
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
          </div>}
        </div>
      ) : null}
      <div
        className={styles.leftcontainer}
        >
        {productsData.loading ? (
          <div className={styles.loadingContainer}>
            <img className={styles.phrases} src={loading} />
          </div>
        ) : productsData.error ? (
          <h1 className={styles.phrases}>{productsData.error}</h1>
          ) : (
            sorted.map((item) => <ProductsDiv key={item.id} products={item} />)
            )}
      </div>
    </div>
  );
};

export default LandingPage;
