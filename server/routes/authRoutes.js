import express from 'express';
import {
  signup,
  login,
  googleLogin,
  forgotPassword // ✅ Import it here
} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/google-login', googleLogin);
router.post('/forgot-password', forgotPassword); 

export default router;
