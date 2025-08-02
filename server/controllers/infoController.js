import Info from "../models/Info.js";

export const getInfo = async (req, res) => {
  const { key } = req.params;
  const section = await Info.findOne({ key });
  res.json(section);
};

export const updateInfo = async (req, res) => {
  const { key } = req.params;
  const updated = await Info.findOneAndUpdate({ key }, req.body, {
    new: true,
    upsert: true,
  });
  res.json(updated);
};
