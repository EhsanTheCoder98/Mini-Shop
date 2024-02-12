import React from "react";
import styles from "./Navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { Link } from "react-router-dom";


// redux
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const overall = useSelector((state) => state.cartContainer.overallProducts);
  return (
    <div className={styles.container}>
      <div  className={styles.leftContainer}>
        <Link to="/landingpage" className={styles.logo}>
          Mini Shop<SiShopify className={styles.shopLogo} />
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <Link to="profile">
          <CgProfile className={styles.profileLogo} />
        </Link>
        <div className={styles.cartLogoContainer}>
          <Link to="cart">
            <FaShoppingCart className={styles.cartLogo} />
          </Link>
          <span>{overall}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
