import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
// -------------------------------------------------------------------------
import connectToDatabase from './DbConnection/connection.js';
import multerRouter from './multer/multer.js';
import productRouter from './routes/productRoute.js'; 
import userrouter from './routes/userRouter.js';
// -----------------------------------------------------------------------
const port = 5000;
app.use(express.json());
app.use(cors());
dotenv.config();

// ------------------------------------------------------------------------
// Use the multerRouter on a specific route
app.use(multerRouter);
app.use(productRouter);
app.use(userrouter);
// ------------------------------------------------------------------------
app.listen(port, (err) => {
    connectToDatabase();
    if (!err) {
        console.log('listening on port', port)
    } else {
        console.log(err)
    }
});