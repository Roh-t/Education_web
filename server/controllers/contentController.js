import Content from "../models/Content.js";

export const getContent = async (req, res) => {
  const content = await Content.findOne();
  res.json(content);
};

export const updateContent = async (req, res) => {
  const updated = await Content.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
};
