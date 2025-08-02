import Testimonial from "../models/Testimonial.js";

export const getAllTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
};

export const createTestimonial = async (req, res) => {
  const newTestimonial = await Testimonial.create(req.body);
  res.status(201).json(newTestimonial);
};

export const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  await Testimonial.findByIdAndDelete(id);
  res.json({ message: "Deleted" });
};
