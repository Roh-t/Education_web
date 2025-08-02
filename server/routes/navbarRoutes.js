import express from 'express';
import { getNavbar, updateNavbar } from '../controllers/navbarController.js';

const router = express.Router();

router.get('/', getNavbar);
router.put('/', updateNavbar); // Protect this route with auth in prod

export default router;
