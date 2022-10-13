import axios from "axios";
import { ADD_TAG, GET_ALL_TAG, TAG_SUCCESS } from "./actionType"



// create aciton
export const tagSuccess = (payload) => {

    return {
        type : TAG_SUCCESS,
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


// action types 
export const getAllTag = () => async (dispatch) => {

    // get all tag
    await axios.get('http://localhost:5050/api/v1/tag')
    .then(res => {
      
      // console.log(res.data.Tags);
      dispatch(tagSuccess(res.data.Tags));

    })
    .catch(err => {
      console.log(err.message);
    });

};