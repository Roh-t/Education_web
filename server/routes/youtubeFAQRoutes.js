import express from 'express';
import { getYouTubeFAQ, updateYouTubeFAQ } from '../controllers/youtubeFAQController.js';

const router = express.Router();

router.get('/', getYouTubeFAQ);
router.put('/', updateYouTubeFAQ); // Protect with auth in production

export default router;
