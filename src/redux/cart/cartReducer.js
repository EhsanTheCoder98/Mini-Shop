const initialState = {
    selectedProducts:[],
    checkout:false,
    overallProducts:0,
    overallPrice:0
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
                selectedProducts:[...state.selectedProducts]
            }
            case "Delete" :
                const newSelectedProducts = state.selectedProducts.filter(item => item.id !== action.payload.id);
                state.selectedProducts = newSelectedProducts;
                return {
                    ...state,
                    selectedProducts:[...state.selectedProducts]
                }   
                default: return state    
            }
        }
        
        export default cartReducer;