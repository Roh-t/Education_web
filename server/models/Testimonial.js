import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: String,
  quote: String,
  stars: Number,
});

export default mongoose.model("Testimonial", testimonialSchema);
