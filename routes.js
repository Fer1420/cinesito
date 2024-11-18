import express from 'express';
import { registerUser } from './registerController.js';

const router = express.Router();


router.post('/registro', registerUser);

export default router;
