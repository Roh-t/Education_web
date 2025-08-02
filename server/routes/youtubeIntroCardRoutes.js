import express from 'express';
import {
  getYoutubeIntroCard,
  updateYoutubeIntroCard
} from '../controllers/youtubeIntroCardController.js';

const router = express.Router();

router.get('/', getYoutubeIntroCard);
router.put('/', updateYoutubeIntroCard); // Protect this in production

export default router;
