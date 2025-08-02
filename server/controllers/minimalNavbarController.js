import MinimalNavbar from '../models/MinimalNavbar.js';

export const getMinimalNavbar = async (req, res) => {
  const data = await MinimalNavbar.findOne();
  res.json(data);
};

export const updateMinimalNavbar = async (req, res) => {
  const data = await MinimalNavbar.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};
