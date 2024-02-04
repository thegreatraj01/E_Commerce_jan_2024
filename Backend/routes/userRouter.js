import express from 'express';
import { signup, login } from '../controller/userControlar.js';
const router = express.Router(); // Capital "R" for Router

router.post('/signup', signup);
router.post('/login', login);


export default router;