import express from 'express';
const router = express.Router(); // Capital "R" for Router
// import { upload } from '../multer/multer.js';
import { addProduct ,deleteProduct ,allproducts} from '../controller/productController.js';



router.post('/addproduct',addProduct);
router.delete('/removeproduct/:id',deleteProduct);
router.get('/allproducts',allproducts)

export default router;
