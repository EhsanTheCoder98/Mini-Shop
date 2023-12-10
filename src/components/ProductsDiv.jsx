import React , {useState} from 'react';
import styles from './ProductsDiv.module.css';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

// methods
import { titleHandler } from '../methods/functions';

const ProductsDiv = ({products}) => {
    const[like,setLike] = useState(false);
    const likeHandler = () => {
        setLike(!like)
    }
    return (
        <div className={styles.container}>
            <img src={products.image}/>
            <p className={styles.title}>{titleHandler(products.title)}</p>
            <span className={styles.title}>{products.price}$</span>
            <Link to={`productdetail/${products.id}`} className={styles.detail}>Details&Buy</Link>
            <button onClick={likeHandler}><FaHeart className={like?styles.likedIcon:styles.likeIcon} /></button>
        </div>
    );
};


export default ProductsDiv;