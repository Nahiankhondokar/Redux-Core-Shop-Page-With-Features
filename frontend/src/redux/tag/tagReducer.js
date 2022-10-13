import { ADD_TAG, GET_ALL_TAG, TAG_SUCCESS } from "./actionType";
import { initialState } from "./intialState";




// category reducer 
const tagReducer = (state = initialState, { type , payload }) => {

    switch (type) {
        case TAG_SUCCESS:
            return {
                ...state, 
                tags : payload
            };
    
        case ADD_TAG:
            return {
                ...state, 
                tags : [
                    ...state.tags,
                    payload
                ]
            };
            
        default:
            return state;
    }

}


// exprot 
export default tagReducer;