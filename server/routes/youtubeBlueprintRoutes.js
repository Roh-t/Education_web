import express from 'express';
import { getYouTubeBlueprint, updateYouTubeBlueprint } from '../controllers/youtubeBlueprintController.js';

const router = express.Router();

router.get('/', getYouTubeBlueprint);
router.put('/', updateYouTubeBlueprint); // Protect with auth in production

export default router;
