import express from 'express';
import { getInstructorIntro, updateInstructorIntro } from '../controllers/instructorIntroController.js';

const router = express.Router();

router.get('/', getInstructorIntro);
router.put('/', updateInstructorIntro); // Protect this route in production

export default router;
