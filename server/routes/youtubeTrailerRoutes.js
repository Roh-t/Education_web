import express from 'express';
import {
  getYoutubeTrailer,
  updateYoutubeTrailer,
} from '../controllers/youtubeTrailerController.js';

const router = express.Router();

// GET the current trailer
router.get('/', getYoutubeTrailer);

// UPDATE or CREATE trailer
router.put('/', updateYoutubeTrailer);

export default router;
