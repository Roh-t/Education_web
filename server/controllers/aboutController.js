import AboutSection from '../models/About.js';

export const getAbout = async (req, res) => {
  const data = await AboutSection.findOne();
  res.json(data);
};

export const updateAbout = async (req, res) => {
  const data = await AboutSection.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};
