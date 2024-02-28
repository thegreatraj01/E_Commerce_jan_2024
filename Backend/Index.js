import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

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

// Use the multerRouter, productRouter, and userrouter as before...

async function makeApiCall() {
    try {
        const response = await fetch("https://e-commerce-2024.onrender.com/allproducts");
        if (response.ok) {
            console.log("API call successful");
        } else {
            throw new Error(`API call failed with status ${response.status}`);
        }
    } catch (error) {
        console.error("Error making API call:", error.message);
    }
}

// Initial API call

// Schedule the API call every 10 minutes (600,000 milliseconds)
const interval = 10 * 60 * 1000; // 10 minutes in milliseconds
setInterval(makeApiCall, interval);
// ------------------------------------------------------------------------
app.listen(port, async(err) => {
   await connectToDatabase();
   await makeApiCall();

    if (!err) {
        console.log('listening on port', port)
    } else {
        console.log(err)
    }
});