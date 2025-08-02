import YouTubeReview from '../models/YouTubeReview.js'

// Get all data
export const getYouTubeReviews = async (req, res) => {
  try {
    const data = await YouTubeReview.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create
export const createYouTubeReviews = async (req, res) => {
  try {
    const newEntry = new YouTubeReview(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update
export const updateYouTubeReviews = async (req, res) => {
  try {
    const updated = await YouTubeReview.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
export const deleteYouTubeReviews = async (req, res) => {
  try {
    await YouTubeReview.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
