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
                state.selectedProducts.push(action.payload);
            }
            return{
                ...state,
                quantity:1,
            }
        default: return state    
    }
}

export default cartReducer;