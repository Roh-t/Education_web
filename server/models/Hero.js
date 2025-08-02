import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  title: String,
  description: String,
  buttonText: String,
  imageUrl: String,
  learnersCount: String,
  rating: String,
});

export default mongoose.model("Hero", heroSchema);
