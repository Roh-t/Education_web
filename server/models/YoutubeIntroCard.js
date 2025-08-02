import mongoose from 'mongoose';

const youtubeIntroCardSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  imageUrl: String,
  buttonText: String,
  buttonLink: String,
}, { timestamps: true });

export default mongoose.model('YoutubeIntroCard', youtubeIntroCardSchema);
