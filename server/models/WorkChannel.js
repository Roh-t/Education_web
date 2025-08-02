import mongoose from 'mongoose';

const WorkChannelSchema = new mongoose.Schema({
  title: String,
  handle: String,
  subscribers: String,
  videos: String,
  image: String, // URL to thumbnail
  icon: String,  // YouTube/Shorts
  link: String,
});

export default mongoose.model("WorkChannel", WorkChannelSchema);
