import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: String,
  video: String, // video URL
  rating: Number,
});

const testimonialSchema = new mongoose.Schema({
  name: String,
  content: String,
  rating: Number,
});

const youtubeReviewSchema = new mongoose.Schema(
  {
    overview: {
      heading: String,
      description: String,
      studentsCount: String, // "10,000+ people..."
      averageRating: String, // "4.9 ★"
    },
    reviews: [reviewSchema],
    testimonials: [testimonialSchema],
  },
  { timestamps: true }
);

const YouTubeReview = mongoose.model("YouTubeReview", youtubeReviewSchema);
export default YouTubeReview;
