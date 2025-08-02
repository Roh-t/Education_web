import mongoose from "mongoose";

const youtubeIntroSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    subheading: { type: String },
    description: { type: String },
    features: [{ type: String }], // ["7.5 Hours", "7 Chapters", ...]
    image: { type: String }, // Image URL
    buttonText: { type: String, default: "Join Now" },
    buttonLink: { type: String },
    trailerButtonText: { type: String, default: "Watch Trailer" },
    trailerButtonLink: { type: String },
    rating: { type: String }, // e.g. "4.9+ (600+ Ratings)"
    learnersCount: { type: String }, // e.g. "10,000+ Learners"
    learnersAvatars: [{ type: String }] // optional
  },
  { timestamps: true }
);

const YouTubeIntro = mongoose.model("YouTubeIntro", youtubeIntroSchema);
export default YouTubeIntro;
