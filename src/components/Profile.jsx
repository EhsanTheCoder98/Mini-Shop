import React from 'react';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className={styles.container}>
            <Link to="recentbuys">Recent Buys</Link>
            <Link to="likedproducts">Liked Products</Link>
        </div>
    );
};

export default Profile;