import FooterContent from '../models/Footer.js';

export const getFooter = async (req, res) => {
  const content = await FooterContent.findOne();
  res.json(content);
};

export const updateFooter = async (req, res) => {
  const content = await FooterContent.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(content);
};
