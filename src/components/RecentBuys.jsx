import React from 'react';
import styles from "./RecentBuys.module.css";

const RecentBuys = () => {
    console.log("rendered");
    return (
        <div className={styles.container}>
           <h1>recent buys</h1>
        </div>
    );
};

export default RecentBuys;