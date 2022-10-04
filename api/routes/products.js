import express from 'express';
import multer from 'multer';
import path, { resolve } from 'path';
import { createProduct, getAllProduct, getSingleProduct, productDelete, productUpdate } from '../controllers/productController.js';



// initialize 
const router = express.Router();

// __dirname resolve
const __dirname = resolve();


// multer set-up
const storage = multer.diskStorage({
    filename : (req, file, cb) => {
        cb(null, Date.now()+'_'+file.originalname);
        // console.log(file);
    },
    destination : (req, file, cb) => { 
        cb(null, path.join(__dirname, '/api/public/image/product/'));
    }
});

const productMulter = multer({
    storage
}).fields([
    {
        name : 'photo',
        maxCount : 1
    },
    {
        name : 'gallery',
        maxCount : 10
    }
]);


// Product routes
router.get('/', getAllProduct);
router.post('/', productMulter, createProduct);
router.get('/:id', getSingleProduct);
router.put('/:id',productUpdate);
router.delete('/:id',productDelete);



// export moudle
export default router;