import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";
import productReducer from "./product/productReducer";
import tagReducer from "./tag/tagReducer";



// combined reducers
const rootReducer = combineReducers({
    all_product : productReducer,
    all_category : categoryReducer,
    all_tag : tagReducer
});



// export 
export default rootReducer;