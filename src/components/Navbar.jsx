import React from 'react';
import styles from "./Navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { PiSignOutLight } from "react-icons/pi";
import { useNavigate , Link } from 'react-router-dom';

// firebase
import { getAuth , signOut } from 'firebase/auth';

// redux
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const overall = useSelector(state=>state.cartContainer.overallProducts)
    return (
        <div className={styles.container}>
            <Link to="profile"><CgProfile className={styles.profileLogo} /></Link>
            <div className={styles.cartLogoContainer}>
            <Link to="cart"><FaShoppingCart className={styles.cartLogo} /></Link>
            <span>{overall}</span>
            </div>
            <Link to="/landingpage" className={styles.logo}>Mini Shop</Link>
            <button className={styles.signoutButton} onClick={()=>signOut(auth).then(()=>{
                alert("SignedOut Successfully");
                navigate("/login")
            })}><PiSignOutLight className={styles.signoutLogo} /></button>
        </div>
    );
};

export default Navbar;