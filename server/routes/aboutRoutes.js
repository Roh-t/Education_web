import express from 'express';
import { getAbout, updateAbout } from '../controllers/aboutController.js';

const router = express.Router();

router.route('/')
  .get(getAbout)
  .put(updateAbout); // Admin use only

export default router;
