import mongoose from 'mongoose';

const blueprintCardSchema = new mongoose.Schema({
  icon: String,
  title: String,
  description: String,
  image: String,
}, { _id: false });

const youtubeBlueprintSchema = new mongoose.Schema({
  sectionTitle: String,
  sectionDescription: String,
  cards: [blueprintCardSchema],
}, { timestamps: true });

export default mongoose.model('YouTubeBlueprint', youtubeBlueprintSchema);
