import { ADD_CATEGORY, GET_ALL_CATEGORY } from "./actionType";
import { initialState } from "./intialState";




// category reducer 
const categoryReducer = (state = initialState, { type , payload }) => {

    switch (type) {
        case GET_ALL_CATEGORY:
            return {
                ...state, 
                categories : payload
            };
    
        case ADD_CATEGORY:
            return {
                ...state, 
                categories : [
                    ...state.categories,
                    payload
                ]
            };

        default:
            return state;
    }

}


// exprot 
export default categoryReducer;