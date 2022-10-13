import { ADD_PRODUCT, GET_ALL_PRODUCT, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL, PRODUCT_SUCCESS, SINGLE_PRODUCT } from "./actionType";
import { initialState } from "./intialState";



// product reducer 
const productReducer = (state = initialState, { type , payload }) => {

    switch (type) {
        case PRODUCT_SUCCESS:
            return {
                ...state, 
                products : payload,
                skeleton : false
            };

        case PRODUCT_REQUEST:
            return {
                ...state, 
                skeleton : true
            };

        case PRODUCT_REQUEST_FAIL:
            return {
                    ...state, 
                    skeleton : false,
                    error : payload
                };

        case ADD_PRODUCT:
            return {
                ...state, 
                products : [
                    ...state.products,
                    payload

                ]
            };

        case SINGLE_PRODUCT:
            return {
                ...state, 
                singleProduct : state.products.find(item => item._id === payload)
            };

        default:
            return state;
    }

}


// exprot 
export default productReducer;