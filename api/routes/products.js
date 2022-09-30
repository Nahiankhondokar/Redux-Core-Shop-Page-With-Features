import express from 'express';
import { createProduct, getAllProduct, getSingleProduct, productDelete, productUpdate } from '../controllers/productController.js';



// initialize 
const router = express.Router();



// Product routes
router.route('/').get(getAllProduct).post(createProduct);
router.route('/:id').get(getSingleProduct).put(productUpdate).delete(productDelete);



// export moudle
export default router;