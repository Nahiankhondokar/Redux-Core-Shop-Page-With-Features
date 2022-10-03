import { makeSlug } from '../functions/makeSlug.js';
import Category from './../models/Category.js';
import createError from './errorController.js';


/**
 *  @access Public
 *  @route api/Categorys
 *  @method GET
 */
export const getAllCategory = async (req, res, next) => {
   
    try {
        const Categorys = await Category.find();

        // error show if data can not find.
        if(!Categorys){
            next(createError(404, "Categorys not found"));
        }

        // if data find
        if(Categorys){
            res.status(200).json({Categorys});
        }
        
    } catch (error) {
        
        next(error);

    }

}



/**
 *  @access Public
 *  @route api/Categorys
 *  @method POST
 */
 export const createCategory = async (req, res) => {

    // get data
    const { name } = req.body;
    
    // category create
    try {
        
        let new_cat = await Category.create({
            ...req.body,
            slug : makeSlug(name)
        });

        res.status(200).json({
            message : "Category Created",
            cat : new_cat
        });

    } catch (error) {
        console.log(error);
    }

}



/**
 *  @access Public
 *  @route api/Categorys/:id
 *  @method GET
 */
 export const getSingleCategory = async (req, res, next) => {

    const { id } = req.params;
    
    try {
        const single = await Category.findById(id);

        // error show if data can not find.
        if(!single){
            next(createError(404, "Single Category not found"));
        }

        // if data find
        if(single){
            res.status(200).json({single});
        }

        
    } catch (error) {

        next(error.message)

    }

}



/**
 *  @access Public
 *  @route api/Categorys/:id
 *  @method PUT/PATCH
 */
 export const categoryUpdate = async (req, res) => {
    
    // get all data
    const { id } = req.params;

    try {
        const update = await Category.findByIdAndUpdate(id, {
           ...req.body,
           slug : makeSlug(req.body.name)
        });

        res.status(200).json({
            message : "Category Updated"
        });
    } catch (error) {
        console.log(error);
    }

}



/**
 *  @access Public
 *  @route api/Categorys/:id
 *  @method DELETE
 */
 export const categoryDelete = async (req, res) => {

    // get id
    const { id } = req.params;
    
    try {
        const Categorys = await Category.findByIdAndDelete(id);
        res.status(200).json({
            message : "Category deleted"
        });
    } catch (error) {
        console.log(error);
    }

}


