import mongoose from 'mongoose';

const youtubeFooterSchema = new mongoose.Schema({
  brandTitle: String,
  brandHighlight: String,
  contactEmail: String,
  copyrightText: String,
}, { timestamps: true });

export default mongoose.model('YouTubeFooter', youtubeFooterSchema);
