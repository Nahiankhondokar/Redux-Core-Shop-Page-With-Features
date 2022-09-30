import express from 'express';
import { createCategory, getAllCategory, getSingleCategory, categoryDelete, categoryUpdate } from '../controllers/categoryController.js';



// initialize 
const router = express.Router();



// category routes
router.route('/').get(getAllCategory).post(createCategory);
router.route('/:id').get(getSingleCategory).put(categoryUpdate).delete(categoryDelete);



// export moudle
export default router;