import express from 'express';
import { getMinimalNavbar, updateMinimalNavbar } from '../controllers/minimalNavbarController.js';

const router = express.Router();

router.get('/', getMinimalNavbar);
router.put('/', updateMinimalNavbar); // Protect this route with auth middleware in prod

export default router;
