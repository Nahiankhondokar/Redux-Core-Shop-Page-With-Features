import axios from "axios"
import { ADD_CATEGORY, CATEGORY_SUCCESS, GET_ALL_CATEGORY } from "./actionType"


// create aciton
export const categorySuccess = (payload) => {

    return {
        type : CATEGORY_SUCCESS,
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



// action types 
export const getAllCategory = () => async (dispatch) => {

    // get all category
    await axios.get('http://localhost:5050/api/v1/category')
    .then(res => {
      
      // console.log(res.data.Categorys);
      dispatch(categorySuccess(res.data.Categorys));

    })
    .catch(err => {
      console.log(err.message);
    });

};