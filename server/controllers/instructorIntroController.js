import InstructorIntro from '../models/InstructorIntro.js';

export const getInstructorIntro = async (req, res) => {
  const data = await InstructorIntro.findOne();
  res.json(data);
};

export const updateInstructorIntro = async (req, res) => {
  const data = await InstructorIntro.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(data);
};
