import Product from '../models/productModel.js';
import { upload } from '../multer/multer.js';
import path from 'path';
import fs from 'fs/promises';



// for add a new product in the database 
const addProduct = async (req, res) => {
    try {
        // Use the upload middleware to handle file upload separately
        upload.single('product')(req, res, async (err) => {
            if (err) {
                console.error('File upload error', err);
                return res.status(500).json({ message: 'File Upload Error' });
            }

            // Now, req.file contains the uploaded file details
            const image = req.file;
            const { name, category, new_price, old_price, description } = req.body;

            // Checking if required fields are missing
            if (!name || !category || !old_price || !new_price || !description || !image) {
                return res.status(400).json({ message: 'All fields are required' });
            }

            // Creating a new product using an ORM (assuming Product is a model)
            const product = await Product.create({
                name,
                category,
                image: image.filename,
                new_price,
                old_price,
                description
            });

            // Sending a success response with the created product details
            return res.status(201).json({ message: 'Product created successfully' });
        });
    } catch (error) {
        // Handling errors
        console.error('Add product error', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};



const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        // const deletedProduct = await Product.findOneAndDelete({ _id: id });
        const product = await Product.findOneAndDelete({ _id: id });

        if (product) {
            // Delete the associated image file
            const filename = product.image;
            const filePath = path.join('./multer/images', filename);

            const fileExists = await fs.access(filePath).then(() => true).catch(() => false);

            if (fileExists) {
                // Delete the file
                await fs.unlink(filePath);
                // console.log(`Deleted file: ${filePath}`);
            }

            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'No product found' });
        }
    } catch (error) {
        console.error('Error deleting product or file:', error);
        res.status(500).json({ message: error.message });
    }
};




const allproducts = async (req, res) => {
    try {
        const allproducts = await Product.find();
        if (allproducts.length > 0) {
            res.status(200).json({
                status: 'success',
                message: 'Products retrieved successfully',
                data: allproducts
            });
        } else {
            res.status(404).json({
                status: 'not found',
                message: 'No products found',
                data: []
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            error: error.message
        });
    }
}



export { addProduct, deleteProduct, allproducts };
