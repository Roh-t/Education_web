import Hero from "../models/Hero.js";

export const getHero = async (req, res) => {
  const data = await Hero.findOne();
  res.json(data);
};

export const updateHero = async (req, res) => {
  const updated = await Hero.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
};
