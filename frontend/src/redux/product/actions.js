import axios from "axios";
import { ADD_PRODUCT, GET_ALL_PRODUCT, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL, PRODUCT_SUCCESS } from "./actionType"

// action types 
export const productSuccess = (payload) => {

    return {
        type : PRODUCT_SUCCESS,
        payload : payload
    }

}

// product request
export const productRequest = () => ({
    type : PRODUCT_REQUEST
});

// product request fail
export const productRequestFail = (payload) => ({
    type : PRODUCT_REQUEST_FAIL, 
    payload  : payload
});



// action types 
export const addProduct = (payload) => {

    return {
        type : ADD_PRODUCT,
        payload : payload
    }

}

// action types 
export const getAllProduct = () => async (dispatch) => {


    // get all product
    dispatch(productRequest());
    await axios.get('http://localhost:5050/api/v1/product')
    .then(res => {
      
      dispatch(productSuccess(res.data.products));

    })
    .catch(err => {
      dispatch(productRequestFail(err.message));
    });


    // get all category
    // axios.get('http://localhost:5050/api/v1/category')
    // .then(res => {
      
    //   // console.log(res.data.Categorys);
    //   dispatch(getAllCategory(res.data.Categorys));

    // })
    // .catch(err => {
    //   console.log(err.message);
    // });


    // get all tag
    // axios.get('http://localhost:5050/api/v1/tag')
    // .then(res => {
      
    //   // console.log(res.data.Tags);
    //   dispatch(getAllTag(res.data.Tags));

    // })
    // .catch(err => {
    //   console.log(err.message);
    // });

};