import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
}, { _id: false });

const chapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lessons: [lessonSchema],
}, { _id: false });

const courseDetailsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  originalPrice: { type: String },
  description: { type: String, required: true },
  image: { type: String, required: true },
  curriculum: [chapterSchema],
}, { timestamps: true });

export default mongoose.model('CourseDetails', courseDetailsSchema);
