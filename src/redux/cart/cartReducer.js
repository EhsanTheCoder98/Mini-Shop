const initialState = {
    selectedProducts:[],
    checkout:false,
    overallProducts:0,
    overallPrice:0
}

const collector = (item) => {
    const overallProducts = item.reduce((total,product)=>total+product.quantity,0);
    return{overallProducts:overallProducts}
}

const cartReducer = (state=initialState,action) => {
    console.log(state.selectedProducts);
    switch(action.type) {
        case "Add-Item":
            if(!state.selectedProducts.find(item => item.id === action.payload.id)){
                state.selectedProducts.push({
                    ...action.payload,
                    quantity:1,
                });
            }
            return{
                ...state,
                selectedProducts:[...state.selectedProducts],
                ...collector(state.selectedProducts)
            }
            case "Delete" :
                const newSelectedProducts = state.selectedProducts.filter(item => item.id !== action.payload.id);
                state.selectedProducts = newSelectedProducts;
                return {
                    ...state,
                    selectedProducts:[...state.selectedProducts],
                ...collector(state.selectedProducts)
                } 
            case "Increase":
                const Iindex = state.selectedProducts.findIndex(item=>item.id === action.payload.id);
                state.selectedProducts[Iindex].quantity++
                return{
                    ...state,
                    selectedProducts:[...state.selectedProducts],
                ...collector(state.selectedProducts)
                }
            case "Decrease":
                const Dindex = state.selectedProducts.findIndex(item=>item.id === action.payload.id);
                state.selectedProducts[Dindex].quantity--
                return{
                    ...state,
                    selectedProducts:[...state.selectedProducts],
                ...collector(state.selectedProducts)
                }    
                default: return state    
            }
        }
        
        export default cartReducer;