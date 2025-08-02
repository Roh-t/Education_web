import YouTubeFooter from "../models/YoutubeFooter.js";

export const getYouTubeFooter = async (req, res) => {
  const data = await YouTubeFooter.findOne();
  res.json(data);
};

export const updateYouTubeFooter = async (req, res) => {
  const data = await YouTubeFooter.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};
