import { ADD_PRODUCT, GET_ALL_PRODUCT } from "./actionType"

// action types 
export const getAllProduct = (payload) => {

    return {
        type : GET_ALL_PRODUCT,
        payload : payload
    }

}

// action types 
export const addProduct = (payload) => {

    return {
        type : ADD_PRODUCT,
        payload : payload
    }

}