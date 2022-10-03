import { ADD_PRODUCT, GET_ALL_PRODUCT } from "./actionType";
import { initialState } from "./intialState";



// product reducer 
const productReducer = (state = initialState, { type , payload }) => {

    switch (type) {
        case GET_ALL_PRODUCT:
            return {
                ...state, 
                products : payload
            };

        case ADD_PRODUCT:
            return {
                ...state, 
                products : [
                    ...state.products,
                    payload

                ]
            };

        default:
            return state;
    }

}


// exprot 
export default productReducer;