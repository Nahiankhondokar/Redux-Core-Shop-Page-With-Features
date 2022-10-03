import Product from './../models/Product.js';
import createError from './errorController.js';


/**
 *  @access Public
 *  @route api/products
 *  @method GET
 */
export const getAllProduct = async (req, res, next) => {
   
    try {
        const products = await Product.find();

        // error show if data can not find.
        if(!products){
            next(createError(404, "products not found"));
        }

        // if data find
        if(products){
            res.status(200).json({products});
        }
        
    } catch (error) {
        
        next(error.message);

    }

}



/**
 *  @access Public
 *  @route api/products
 *  @method POST
 */
 export const createProduct = async (req, res) => {
    
    try {
        
        // console.log(req.body);
        let new_product = await Product.create({
            ...req.body, 
            photo : req.file.filename
        });

        res.status(200).json({
            message : "Product Created",
            product : new_product
        });

    } catch (error) {
        console.log(error.message);
    }

}



/**
 *  @access Public
 *  @route api/products/:id
 *  @method GET
 */
 export const getSingleProduct = async (req, res, next) => {

    const { id } = req.params;
    
    try {
        const product = await Product.findById(id);

        // error show if data can not find.
        if(!product){
            next(createError(404, "Single product not found"));
        }

        // if data find
        if(product){
            res.status(200).json({product});
        }

    } catch (error) {

        next(error.message)

    }

}



/**
 *  @access Public
 *  @route api/products/:id
 *  @method PUT/PATCH
 */
 export const productUpdate = async (req, res) => {
    
    // get all data
    const { id } = req.params;

    try {
        const update = await Product.findByIdAndUpdate(id, {
           ...req.body 
        });

        res.status(200).json({
            message : "product Updated"
        });
    } catch (error) {
        console.log(error.message);
    }

}



/**
 *  @access Public
 *  @route api/products/:id
 *  @method DELETE
 */
 export const productDelete = async (req, res) => {

    // get id
    const { id } = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            message : "product deleted"
        });
    } catch (error) {
        console.log(error.message);
    }

}


