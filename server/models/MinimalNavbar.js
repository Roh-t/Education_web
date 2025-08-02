import mongoose from 'mongoose';

const navItemSchema = new mongoose.Schema({
  label: String,
  to: String,
}, { _id: false });

const minimalNavbarSchema = new mongoose.Schema({
  logoUrl: String,
  brandName: {
    main: String,
    highlight: String,
  },
  navItems: [navItemSchema],
  contactEmail: String,
}, { timestamps: true });

export default mongoose.model('MinimalNavbar', minimalNavbarSchema);
