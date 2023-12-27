import React from 'react';
import styles from './AboutUs.module.css';
import { AiFillLike } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { SiWebauthn } from "react-icons/si";

const AboutUs = () => {
    return (
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>This is a prototype online shop using fake API developed by Me!</h2>
          </div>
          <div  className={styles.seprator}></div>
          <div className={styles.topDiv}>
            <h4>Explore Our Prototype Online Shop with Enhanced Features!</h4>
          </div>
          <div className={styles.cartsContainer}>
            <div  className={styles.carts}>
              <h4>Effortless Exploration: Filter by Category</h4>
              <IoFilter className={styles.icon}/>
              <p>Explore and refine your search by easily selecting and browsing products within specific categories</p>
            </div>
            <div  className={styles.carts}>
              <h4>Quick Search: Find Products Instantly</h4>
              <FaSearch className={styles.icon} />
              <p>Discover your desired products swiftly with our search functionality. Simply enter the product name, and our prototype website will instantly provide tailored results, making finding your favorite items a breeze.</p>
            </div>
            <div  className={styles.carts}>
              <h4>Favorite Picks: Your Saved Products</h4>
              <AiFillLike className={styles.icon} />
              <p>Save your favorite products to your profile effortlessly! This feature lets you keep track of the items you love, making it easy to find and buy them again whenever you want.</p>
            </div>
            <div  className={styles.carts}>
              <h4>Recent Carts: Your Quick Shopping History</h4>
              <FaShoppingCart className={styles.icon} />
              <p>Keep tabs on your recent shopping carts with ease! This feature allows you to view and revisit your recently shopped items, making it simple to track and manage your purchases.</p>
            </div>
            <div  className={styles.carts}>
              <h4>SecureSign: Your Trusted Authentication</h4>
              <SiWebauthn className={styles.icon} />
              <p>Our authentication feature, powered by Firebase, ensures a quick and secure login experience. Enjoy peace of mind knowing your account is protected with cutting-edge technology.</p>
            </div>
          </div>
        </div>
    );
};

export default AboutUs;