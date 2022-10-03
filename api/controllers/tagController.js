import { makeSlug } from '../functions/makeSlug.js';
import Tag from './../models/Tag.js';
import createError from './errorController.js';


/**
 *  @access Public
 *  @route api/Tags
 *  @method GET
 */
export const getAllTag = async (req, res, next) => {
   
    try {
        const Tags = await Tag.find();

        // error show if data can not find.
        if(!Tags){
            next(createError(404, "Tags not found"));
        }

        // if data find
        if(Tags){
            res.status(200).json({Tags});
        }
        
    } catch (error) {
        
        next(error);

    }

}



/**
 *  @access Public
 *  @route api/Tags
 *  @method POST
 */
 export const createTag = async (req, res) => {

    // get data
    const { name } = req.body;
    
    // Tag create
    try {
        
        let new_tag = await Tag.create({
            ...req.body,
            slug : makeSlug(name)
        });

        res.status(200).json({
            message : "Tag Created",
            tag : new_tag
        });

    } catch (error) {
        console.log(error);
    }

}



/**
 *  @access Public
 *  @route api/Tags/:id
 *  @method GET
 */
 export const getSingleTag = async (req, res, next) => {

    const { id } = req.params;
    
    try {
        const single = await Tag.findById(id);

        // error show if data can not find.
        if(!single){
            next(createError(404, "Single Tag not found"));
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
 *  @route api/Tags/:id
 *  @method PUT/PATCH
 */
 export const tagUpdate = async (req, res) => {
    
    // get all data
    const { id } = req.params;

    try {
        const update = await Tag.findByIdAndUpdate(id, {
           ...req.body,
           slug : makeSlug(req.body.name)
        });

        res.status(200).json({
            message : "Tag Updated"
        });
    } catch (error) {
        console.log(error);
    }

}



/**
 *  @access Public
 *  @route api/Tags/:id
 *  @method DELETE
 */
 export const tagDelete = async (req, res) => {

    // get id
    const { id } = req.params;
    
    try {
        const Tags = await Tag.findByIdAndDelete(id);
        res.status(200).json({
            message : "Tag deleted"
        });
    } catch (error) {
        console.log(error);
    }

}


