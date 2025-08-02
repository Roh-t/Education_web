import Navbar from '../models/Navbar.js';

export const getNavbar = async (req, res) => {
  const data = await Navbar.findOne();
  res.json(data);
};

export const updateNavbar = async (req, res) => {
  const data = await Navbar.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};
