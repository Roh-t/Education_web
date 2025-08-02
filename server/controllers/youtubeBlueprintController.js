import YoutubeBlueprint from "../models/YoutubeBlueprint.js";

export const getYouTubeBlueprint = async (req, res) => {
  const data = await YoutubeBlueprint.findOne();
  res.json(data);
};

export const updateYouTubeBlueprint = async (req, res) => {
  const data = await YoutubeBlueprint.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};
