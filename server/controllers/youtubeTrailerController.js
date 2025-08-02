import YoutubeTrailer from '../models/YoutubeTrailer.js';

export const getYoutubeTrailer = async (req, res) => {
  const data = await YoutubeTrailer.findOne();
  res.json(data);
};

export const updateYoutubeTrailer = async (req, res) => {
  const data = await YoutubeTrailer.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};
