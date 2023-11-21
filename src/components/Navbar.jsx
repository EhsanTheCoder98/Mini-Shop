import React from 'react';
import styles from "./Navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { PiSignOutLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

// firebase
import { getAuth , signOut } from 'firebase/auth';


const Navbar = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <button><CgProfile className={styles.profileLogo} /></button>
            <button><FaShoppingCart className={styles.cartLogo} /></button>
            <h3>Mini Shop</h3>
            <button className={styles.signoutButton} onClick={()=>signOut(auth).then(()=>{
                alert("SignedOut Successfully");
                navigate("/login")
            })}><PiSignOutLight className={styles.signoutLogo} /></button>
        </div>
    );
};

export default Navbar;