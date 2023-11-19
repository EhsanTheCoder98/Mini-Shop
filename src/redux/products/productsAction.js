import axios from "axios";

const fetchProducts = () => {
    return {
        type:"FETCH-PRODUCTS"
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type:"FETCH-PRODUCTS-SUCCESS",
        payload:products
    }
}

const fetchProductsFailure = (error) => {
    return {
        type:"FETCH-PRODUCTS-FAILURE",
        payload:error
    }
}

export const fetchAPI = () => {
    return (dispach) => {
        dispach(fetchProducts());
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            const data = response.data;
            dispach(fetchProductsSuccess(data))
        })
        .catch(errors => {
            const error = errors.errorMessage;
            dispach(fetchProductsFailure(error));
        })
    }
}