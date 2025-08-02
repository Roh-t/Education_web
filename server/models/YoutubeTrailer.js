import mongoose from 'mongoose';

const youtubeTrailerSchema = new mongoose.Schema({
  trailerUrl: String,
  mediaExperience: {
    heading: String,
    description: String,
    logos: [String],
  },
  milestones: {
    heading: String,
    description: String,
    stats: [{
      label: String,
      value: String,
      color: String
    }],
  }
}, { timestamps: true });

export default mongoose.model('YoutubeTrailer', youtubeTrailerSchema);
