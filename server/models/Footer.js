import mongoose from 'mongoose';

const FooterSchema = new mongoose.Schema({
  description: String,
  quickLinks: [String], // ["Login", "Top", "Courses"]
  supportLinks: [String], // ["Testimonials", "Tech Support", "Contact Us"]
  copyright: String,
});

export default mongoose.model("FooterContent", FooterSchema);
