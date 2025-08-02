import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema({
  platform: String,
  url: String,
  ariaLabel: String,
}, { _id: false });

const contactUsSchema = new mongoose.Schema({
  name: String,
  title: String,
  bio: String,
  email: String,
  phone: String,
  profileImageUrl: String,
  socialLinks: [socialLinkSchema],
}, { timestamps: true });

export default mongoose.model('ContactUs', contactUsSchema);
