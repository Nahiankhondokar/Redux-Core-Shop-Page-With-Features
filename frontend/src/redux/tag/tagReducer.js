import { ADD_TAG, GET_ALL_TAG } from "./actionType";
import { initialState } from "./intialState";




// category reducer 
const tagReducer = (state = initialState, { type , payload }) => {

    switch (type) {
        case GET_ALL_TAG:
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