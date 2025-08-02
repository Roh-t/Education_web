import YouTubeFAQ from "../models/YoutubeFAQ.js";

export const getYouTubeFAQ = async (req, res) => {
  const data = await YouTubeFAQ.findOne();
  res.json(data);
};

export const updateYouTubeFAQ = async (req, res) => {
  const data = await YouTubeFAQ.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};
