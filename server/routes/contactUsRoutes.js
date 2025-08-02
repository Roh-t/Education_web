import express from 'express';
import { getContactUs, updateContactUs } from '../controllers/contactUsController.js';

const router = express.Router();

router.get('/', getContactUs);
router.put('/', updateContactUs); // Protect this route with auth in production

export default router;
