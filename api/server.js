import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import studentRoute from './routes/students.js';
import userRoute from './routes/user.js';
import productRoute from './routes/products.js';
import categoryRoute from './routes/category.js';
import tagRoute from './routes/tag.js';
import mongoDBConnection from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


// express initialize
const app = express();


// environment setup
dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;


// Post data Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(cors());


// folder static
app.use(express.static('api/public'))


// rotues
app.use('/api/students', studentRoute);
app.use('/api/users', userRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/tag', tagRoute);


// custom error handler middleware
app.use(errorHandler);

// server listen
app.listen(PORT, () => {
    // mongoDB connection
    mongoDBConnection();
    console.log(`Server is listening on port ${PORT}`.bgGreen.black);  
});