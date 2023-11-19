import { combineReducers } from "redux";

// reducers
import productsReducer from "./products/productsReducer";


const rootReducer = combineReducers({
    productsContainer:productsReducer,

})
export default rootReducer;