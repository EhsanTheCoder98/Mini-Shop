import React from "react";
import styles from "./RecentBuysDiv.module.css";

const RecentBuysDiv = ({ cartPurchased }) => {
  return (
    <>
      {cartPurchased.map((item,index) => (
        <div key={index} className={styles.container}>
            <img src={item.image}/>
        </div>
      ))}
    </>
  );
};

export default RecentBuysDiv;
