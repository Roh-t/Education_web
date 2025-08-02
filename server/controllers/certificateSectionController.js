import CertificateSection from '../models/CertificateSection.js';

export const getCertificateSection = async (req, res) => {
  const section = await CertificateSection.findOne();
  res.json(section);
};

export const updateCertificateSection = async (req, res) => {
  const updatedSection = await CertificateSection.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updatedSection);
};
