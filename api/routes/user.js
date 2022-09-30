import express from 'express';
import { createUser, getAllUser, getSingleUser, UserDelete, userLogin, userRegister, UserUpdate } from '../controllers/userController.js';




// initialize 
const router = express.Router();



// student routes
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(getSingleUser).delete(UserDelete).put(UserUpdate).patch(UserUpdate);

// login register routes
router.post('/login', userLogin);
router.post('/register', userRegister);


// export moudle
export default router;