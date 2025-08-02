import WorkChannel from '../models/WorkChannel.js';

export const getChannels = async (req, res) => {
  const channels = await WorkChannel.find();
  res.json(channels);
};

export const createChannel = async (req, res) => {
  const channel = await WorkChannel.create(req.body);
  res.status(201).json(channel);
};

export const updateChannel = async (req, res) => {
  const updated = await WorkChannel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteChannel = async (req, res) => {
  await WorkChannel.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
