import React , {useState} from 'react';
import styles from './Profile.module.css';

// components
import RecentBuys from './RecentBuys';
import LikedProducts from './LikedProducts';

// react-router-dom
import { useNavigate } from 'react-router-dom';

// firebase
import { getAuth , signOut } from 'firebase/auth';


const Profile = () => {
    const [selected,setSelected] = useState(null);
    const componentHandler = (type) => {
        setSelected(type);
    }
    const auth = getAuth();
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                    {selected === 'recent' && <RecentBuys />}
                    {selected === 'liked' &&  <LikedProducts />}
            </div>
            <div className={styles.rightContainer}>
                <button  onClick={()=>componentHandler('recent')}>Recent Buys</button>
                <button  onClick={()=>componentHandler('liked')}>Liked Products</button>
                <button>Profile Details</button>
                <button onClick={()=>signOut(auth).then(()=>{
                alert("SignedOut Successfully");
                navigate("/login")
            })}>Exit Profile</button>
            </div>
        </div>
    );
};

export default Profile;