import express from 'express';
import {
  getCourseDetailsList,
  getCourseDetailsById,
  createCourseDetails,
  updateCourseDetails,
  deleteCourseDetails,
} from '../controllers/courseDetailsController.js';

const router = express.Router();

router.get('/', getCourseDetailsList);
router.get('/:id', getCourseDetailsById);
router.post('/', createCourseDetails);
router.put('/:id', updateCourseDetails);
router.delete('/:id', deleteCourseDetails);

export default router;
