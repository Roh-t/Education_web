import YouTubeIntro from "../models/youtubeIntro.js";

// GET all
export const getYouTubeIntro = async (req, res) => {
  try {
    const data = await YouTubeIntro.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new
export const createYouTubeIntro = async (req, res) => {
  try {
    const newSection = new YouTubeIntro(req.body);
    await newSection.save();
    res.status(201).json(newSection);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update
export const updateYouTubeIntro = async (req, res) => {
  try {
    const updated = await YouTubeIntro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteYouTubeIntro = async (req, res) => {
  try {
    await YouTubeIntro.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
