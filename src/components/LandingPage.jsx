import React , {useEffect} from 'react';

// redux
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchAPI } from '../redux/products/productsAction';

const LandingPage = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.productsContainer);

    useEffect(()=>{
        dispatch(fetchAPI());
    },[])
    return (
        <div>
            {productsData.products.map(item=><p>{item.title}</p>)}
        </div>
    );
};

export default LandingPage;