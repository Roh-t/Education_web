import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  badgeText: String,
  title: String,
  description: String,
  points: [String],
  buttonText: String,
  imageUrl: String,
});

export default mongoose.model("Content", contentSchema);
