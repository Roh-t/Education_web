import express from 'express';
import { getYouTubeFooter, updateYouTubeFooter } from '../controllers/youtubeFooterController.js';

const router = express.Router();

router.get('/', getYouTubeFooter);
router.put('/', updateYouTubeFooter); // Protect with auth in production

export default router;
