import express from 'express';
const router = express.Router(); // Capital "R" for Router
// import { upload } from '../multer/multer.js';
import { addProduct, deleteProduct, allproducts  ,newCollection ,popularinwomen,realetedproducts} from '../controller/productController.js';
import { protect, admin } from '../middleware/UserAuth.js';



router.post('/addproduct', protect, admin, addProduct);
router.delete('/removeproduct/:id', protect, admin, deleteProduct);
router.get('/allproducts', allproducts);
router.get('/newcollection', newCollection);
router.get('/popularinwomen',popularinwomen);
router.get('/realetedproducts/:id', realetedproducts);

export default router;
