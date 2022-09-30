import User from './../models/User.js';
import bcrypt from 'bcryptjs';
import createError from './errorController.js';
import jwt from 'jsonwebtoken';


/**
 *  @access Public
 *  @route api/User
 *  @method GET
 */
export const getAllUser = async (req, res, next) => {
   
    try {
        const user = await User.find();

        // error show if data can not find.
        if(!user){
            next(createError(404, "user not found"));
        }

        // if data find
        if(user){
            res.status(200).json({user});
        }
        
    } catch (error) {
        
        next(error);

    }

}



/**
 *  @access Public
 *  @route api/User
 *  @method POST
 */
 export const createUser = async (req, res, next) => {

    // get all data
    const { name, email, cell, age, gender, password, username, photo } = req.body;

    // hash password
    const salt = await bcrypt.genSalt(10); 
    const hash = await bcrypt.hash(req.body.password, salt);
    
    try {
        
        await User.create({
            ...req.body, 
            password : hash
        }, { new : true });


        res.status(200).json({
            message : "User Created"
        });

    } catch (error) {
        next(error)
    }

}



/**
 *  @access Public
 *  @route api/User/:id
 *  @method GET
 */
 export const getSingleUser = async (req, res, next) => {

    const { id } = req.params;
    
    try {
        const single = await User.findById(id);

        // error show if data can not find.
        if(!single){
            next(createError(404, "Single Student not found"));
        }

        // if data find
        if(single){
            res.status(200).json({single});
        }

    } catch (error) {

        next(error);

    }

}



/**
 *  @access Public
 *  @route api/User/:id
 *  @method PUT/PATCH
 */
 export const UserUpdate = async (req, res) => {
    
    // get all data
    const { id } = req.params;
    const { name, email, cell, age, gender, password, username, photo } = req.body;

    try {
        const update = await User.findByIdAndUpdate(id, {
           ...req.body 
        }, { new : true});

        res.status(200).json({
            message : "User Updated"
        });
    } catch (error) {
        console.log(error);
    }

}



/**
 *  @access Public
 *  @route api/User/:id
 *  @method DELETE
 */
 export const UserDelete = async (req, res) => {

    // get id
    const { id } = req.params;
    
    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({
            message : "User deleted"
        });
    } catch (error) {
        console.log(error);
    }

}



/**
 *  @access Public
 *  @route api/User/register
 *  @method POST
 */
 export const userRegister = async (req, res, next) => {

    // get all data
    const { email, password } = req.body;

    // hash password
    const salt = await bcrypt.genSalt(10); 
    const hash = await bcrypt.hash(password, salt);
    
    try {
        
        // data store
        const user = await User.create({
            ...req.body, 
            password : hash
        }, { new : true });

        res.status(200).json(user);

    } catch (error) {
        next(error)
    }

}


/**
 *  @access Public
 *  @route api/User/login
 *  @method POST
 */
 export const userLogin = async (req, res, next) => {

   // email checking
   const login_user = await User.findOne({ email : req.body.email});
   if(!login_user){
    return next(createError(404, "Email is wrong"));
   }

   // check password
   const checkPass = await bcrypt.compare(req.body.password, login_user.password);
   if(!checkPass){
    return next(createError(404, "password is wrong"));
   }

   // crete token
   const token = jwt.sign({ id : login_user._id, isAdmin : login_user.isAdmin }, process.env.JWT_SECRET);


   // skip password or isAdmin's data by distructuring.
   const { password, isAdmin, ...login_info } = login_user._doc;

   res.cookie("access_token", token).status(200).json({
    token : token,
    user : login_info
    
   });

}

