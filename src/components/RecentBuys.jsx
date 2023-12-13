import React from "react";
import styles from "./RecentBuys.module.css";

// components
import RecentBuysDiv from "./RecentBuysDiv";
// redux
import { useSelector } from "react-redux";

const RecentBuys = () => {
  const buys = useSelector((state) => state.cartContainer.recentBuys);
  return (
    <div className={styles.bigContainer}>
        {buys.map((item, index) => (
            <div    className={styles.container}>
                <RecentBuysDiv key={index} cartPurchased={item} />
            </div>
        ))}
    </div>
  );
};

export default RecentBuys;
