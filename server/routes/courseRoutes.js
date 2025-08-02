import express from 'express';
import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController.js';

const router = express.Router();

router.get('/', getCourses);          // List all courses
router.get('/:id', getCourseById);    // Get single course
router.post('/', createCourse);       // Create new course (auth recommended)
router.put('/:id', updateCourse);     // Update course (auth recommended)
router.delete('/:id', deleteCourse);  // Delete course (auth recommended)

export default router;
