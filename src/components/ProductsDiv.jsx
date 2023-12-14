import React , {useState ,useEffect} from 'react';
import styles from './ProductsDiv.module.css';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

// methods
import { titleHandler } from '../methods/functions';

// redux
import { useDispatch } from 'react-redux';
import { likeProduct } from '../redux/cart/cartAction';

const ProductsDiv = ({products}) => {
    const dispatch = useDispatch();
    const[like,setLike] = useState(false);
    useEffect(()=>{
        if(like){
            dispatch(likeProduct(products))
        }
    },[like])
    const likeHandler = () => {
        setLike((prevLike)=>!prevLike)
    }
    return (
        <div className={styles.container} data-aos="fade-in"   >
            <img src={products.image}/>
            <p className={styles.title}>{titleHandler(products.title)}</p>
            <span className={styles.title}>{products.price}$</span>
            <Link to={`productdetail/${products.id}`} className={styles.detail}>Details&Buy</Link>
            <button onClick={likeHandler}><FaHeart className={like?styles.likedIcon:styles.likeIcon} /></button>
        </div>
    );
};


export default ProductsDiv;