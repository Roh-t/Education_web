import mongoose from 'mongoose';

const lectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  videoUrl: { type: String, required: true },
}, { _id: false });

const chapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  module: { type: String, required: true },
  lectures: [lectureSchema],
}, { _id: false });

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  introVideo: { type: String, required: true },
  chapters: [chapterSchema],
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
