import express from 'express';
import { createTag, getAllTag, getSingleTag, tagDelete, tagUpdate } from '../controllers/tagController.js';



// initialize 
const router = express.Router();



// Tag routes
router.route('/').get(getAllTag).post(createTag);
router.route('/:id').get(getSingleTag).put(tagUpdate).delete(tagDelete);



// export moudle
export default router;