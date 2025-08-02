import mongoose from 'mongoose';

const navItemSchema = new mongoose.Schema({
  label: String,
  to: String,
}, { _id: false });

const navbarSchema = new mongoose.Schema({
  brandName: {
    main: String,
    highlight: String,
  },
  navItems: [navItemSchema],
  authLinks: {
    login: String,
    signup: String,
    logout: String,
  },
}, { timestamps: true });

export default mongoose.model('Navbar', navbarSchema);
