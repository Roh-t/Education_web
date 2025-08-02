import CourseDetails from '../models/CourseDetails.js';

// Get all courses summary
export const getCourseDetailsList = async (req, res) => {
  try {
    const courses = await CourseDetails.find({}, 'title price originalPrice description image');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get course details by ID (full with curriculum)
export const getCourseDetailsById = async (req, res) => {
  try {
    const course = await CourseDetails.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new course details
export const createCourseDetails = async (req, res) => {
  try {
    const course = new CourseDetails(req.body);
    const saved = await course.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update course details
export const updateCourseDetails = async (req, res) => {
  try {
    const updated = await CourseDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Course not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete course details
export const deleteCourseDetails = async (req, res) => {
  try {
    const deleted = await CourseDetails.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
