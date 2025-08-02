import YoutubeIntroCard from '../models/YoutubeIntroCard.js';

export const getYoutubeIntroCard = async (req, res) => {
  const data = await YoutubeIntroCard.findOne();
  res.json(data);
};

export const updateYoutubeIntroCard = async (req, res) => {
  const data = await YoutubeIntroCard.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};
