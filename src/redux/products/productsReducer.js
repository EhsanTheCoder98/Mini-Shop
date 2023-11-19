const initialState = {
    products : [],
    loading:false,
    error:""
}

const productsReducer = (state=initialState,action) => {
    switch(action.type) {
        case "FETCH-PRODUCTS":
            return{
                ...state,
                loading:true
            }
        case "FETCH-PRODUCTS-SUCCESS":
            return{
                ...state,
                loading:false,
                products:action.payload
            }    
        case "FETCH-PRODUCTS-FAILURE":
            return {
                ...state,
                loading:false,
                products:[],
                error:action.payload
            }    
    }
}

export default productsReducer;