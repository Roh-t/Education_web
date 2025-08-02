import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
}, { _id: false });

const youtubeFAQSchema = new mongoose.Schema({
  sectionTitle: String,
  sectionDescription: String,
  faqs: [faqSchema],
}, { timestamps: true });

export default mongoose.model('YouTubeFAQ', youtubeFAQSchema);
