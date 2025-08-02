import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: [String], // multiple <p>
  socialLinks: [
    {
      platform: String,
      url: String,
    }
  ],
  image: String, // cloudinary URL or filename
});

export default mongoose.model("AboutSection", AboutSchema);
