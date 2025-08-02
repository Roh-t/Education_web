import mongoose from 'mongoose';

const certificateSectionSchema = new mongoose.Schema({
  heading: String,
  subheading: String,
  awardedTo: String,
  courseName: String,
  demoText: String,
  sealImageUrl: String,
  completionDateText: String,
}, { timestamps: true });

export default mongoose.model('CertificateSection', certificateSectionSchema);
