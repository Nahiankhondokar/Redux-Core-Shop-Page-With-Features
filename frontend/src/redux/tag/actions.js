import { ADD_TAG, GET_ALL_TAG } from "./actionType"



// create aciton
export const getAllTag= (payload) => {

    return {
        type : GET_ALL_TAG,
        payload : payload
    }

}

// tag add
export const addTag= (payload) => {

    return {
        type : ADD_TAG,
        payload : payload
    }

}