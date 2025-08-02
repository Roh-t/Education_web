import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema({
  platform: String,
  url: String,
  ariaLabel: String,
}, { _id: false });

const instructorIntroSchema = new mongoose.Schema({
  headingBadgeText: String,
  instructorName: String,
  instructorTitle: String,
  bioParagraphs: [String],
  socialLinks: [socialLinkSchema],
  imageUrl: String,
  imageAlt: String,
}, { timestamps: true });

export default mongoose.model('InstructorIntro', instructorIntroSchema);
