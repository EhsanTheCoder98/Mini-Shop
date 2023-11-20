import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { PiSignOutLight } from "react-icons/pi";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <button><CgProfile className={styles.profileLogo} /></button>
            <button><FaShoppingCart className={styles.cartLogo} /></button>
            <h3>Mini Shop</h3>
            <button className={styles.signoutButton}><PiSignOutLight className={styles.signoutLogo} /></button>
        </div>
    );
};

export default Navbar;