import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, // e.g., "blueprint", "crmSection"
  badgeText: String,
  heading: String,
  description: String,
  points: [String],
  buttonText: String,
  imageUrl: String,
});

export default mongoose.model("Info", infoSchema);
