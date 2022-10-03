import { ADD_CATEGORY, GET_ALL_CATEGORY } from "./actionType"


// create aciton
export const getAllCategory = (payload) => {

    return {
        type : GET_ALL_CATEGORY,
        payload : payload
    }

}


// create aciton
export const addCategory = (payload) => {

    return {
        type : ADD_CATEGORY,
        payload : payload
    }

}