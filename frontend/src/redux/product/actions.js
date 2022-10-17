import axios from "axios";
import { errorToaster, successToaster } from "../../Component/Toaster/Toaster";
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, PRODUCT_REQUEST, PRODUCT_REQUEST_FAIL, PRODUCT_SUCCESS, SINGLE_PRODUCT, UPDATE_PRODUCT } from "./actionType"

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

};


// action types 
export const addProduct = (data) => async (dispatch) => {

    // add product
    await axios.post('http://localhost:5050/api/v1/product', data)
    .then(data => {

    // alert msg
    successToaster('Product Added Succssful');

    // all data get
    dispatch(getAllProduct());

    }).catch(() => {
        errorToaster('Product Added Failed');
    });
    

}


// single product
export const singleProduct = (id) => ({
    type : SINGLE_PRODUCT,
    payload : id
});


// product delete
export const deleteProduct = (id) => async (dispatch) => {

    // add product
    await axios.delete(`http://localhost:5050/api/v1/product/${id}`)
    .then(data => {

        // state update
        dispatch({
            type : DELETE_PRODUCT,
            payload : id
        });

        // alert msg
        successToaster('Product Deleted Succssful');

    }).catch(() => {
        errorToaster('Product Added Failed');
    });
    

}


// product eddit
export const editProduct = (id) => {
    return {
        type : EDIT_PRODUCT,
        payload : id
    }
}

// product update
export const updateProduct = (id, data) => async (dispatch) => {

    // add product
    await axios.put(`http://localhost:5050/api/v1/product/${id}`, data)
    .then(data => {
        
        // state update
        dispatch(getAllProduct());

        // alert msg
        successToaster('Product Updated Succssful');

    }).catch(() => {
        errorToaster('Product Added Failed');
    });
    

}


