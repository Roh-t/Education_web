import mongoose from 'mongoose';

const FocusItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String, // store name of the icon (e.g., "Award", "Monitor", etc.)
});

export default mongoose.model("FocusItem", FocusItemSchema);
