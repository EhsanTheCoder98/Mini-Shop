import React from "react";
import styles from "./RecentBuysDiv.module.css";

const RecentBuysDiv = ({ cartPurchased }) => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
      {cartPurchased.products.map((item,index) => (
        <div key={index} className={styles.miniContainer} >
            <img src={item.image}/>
            <span className={styles.quantity}>{item.quantity}</span>
        </div>
      ))}
      </div>
      <div>
        <span>{cartPurchased.price.toFixed(2)}$</span>
      </div>
    </div>
  );
};

export default RecentBuysDiv;
