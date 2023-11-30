import { combineReducers } from "redux";

// reducers
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";


const rootReducer = combineReducers({
    productsContainer:productsReducer,
    cartContainer:cartReducer
})
export default rootReducer;