import BlueprintCard from '../models/BlueprintCard.js';

export const getBlueprintCards = async (req, res) => {
  const cards = await BlueprintCard.find();
  res.json(cards);
};

export const createBlueprintCard = async (req, res) => {
  const newCard = new BlueprintCard(req.body);
  const savedCard = await newCard.save();
  res.json(savedCard);
};

export const updateBlueprintCard = async (req, res) => {
  const updatedCard = await BlueprintCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCard);
};

export const deleteBlueprintCard = async (req, res) => {
  await BlueprintCard.findByIdAndDelete(req.params.id);
  res.json({ message: 'Blueprint card deleted' });
};
