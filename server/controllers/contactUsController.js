import ContactUs from '../models/ContactUs.js';

export const getContactUs = async (req, res) => {
  const contact = await ContactUs.findOne();
  res.json(contact);
};

export const updateContactUs = async (req, res) => {
  const updatedContact = await ContactUs.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updatedContact);
};
