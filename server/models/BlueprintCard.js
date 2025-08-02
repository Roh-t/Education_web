import mongoose from 'mongoose';

const blueprintCardSchema = new mongoose.Schema({
  icon: String,
  title: String,
  description: String,
  image: String,
}, { timestamps: true });

export default mongoose.model('BlueprintCard', blueprintCardSchema);
