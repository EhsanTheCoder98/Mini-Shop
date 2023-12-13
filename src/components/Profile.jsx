import React , {useState} from 'react';
import styles from './Profile.module.css';
import { Route ,Routes , Link , Outlet} from 'react-router-dom';

// components
import RecentBuys from './RecentBuys';
import LikedProducts from './LikedProducts';


const Profile = () => {
    const [selected,setSelected] = useState(null);
    const componentHandler = (type) => {
        setSelected(type);
    } 
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                    {selected === 'recent' && <RecentBuys />}
                    {selected === 'liked' &&  <LikedProducts />}
            </div>
            <div className={styles.rightContainer}>
                <button  onClick={()=>componentHandler('recent')}>Recent Buys</button>
                <button  onClick={()=>componentHandler('liked')}>Liked Products</button>
            </div>
        </div>
    );
};

export default Profile;