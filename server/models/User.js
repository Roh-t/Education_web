import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Invalid email format'
    }
  },

  password: {
    type: String,
    minlength: 6,
    required: function () {
      return this.loginType === 'local';
    }
  },

  phoneNumber: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[6-9]\d{9}$/.test(v);
      },
      message: 'Invalid phone number'
    }
  },

  avatar: {
    type: String,
    default: ''
  },

  loginType: {
    type: String,
    enum: ['local', 'google'],
    required: true,
    default: 'local',
    index: true
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    index: true
  }

}, { timestamps: true });

// 🔐 Password Hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 🔒 Remove sensitive fields from output
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.__v;
  return obj;
};

const User = mongoose.model('User', userSchema);
export default User;
