import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import sendEmail from '../utils/sendEmail.js';

// Optional: Centralized token creation
const createToken = (id, expiresIn = '1d') =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn });

// ✅ Signup
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email }).lean();
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      loginType: 'local',
      role: 'user'
    });

    res.status(201).json({ msg: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

// ✅ Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).lean();
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    if (user.loginType === 'google') {
      return res.status(400).json({ msg: 'Please login using Google' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = createToken(user._id);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

// ✅ Google Login (upsert + atomic)
export const googleLogin = async (req, res) => {
  const { name, email, phoneNumber, avatar } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      {
        $setOnInsert: {
          name,
          phoneNumber,
          avatar,
          loginType: 'google',
          role: 'user'
        }
      },
      {
        new: true,
        upsert: true,
        lean: true
      }
    );

    const token = createToken(user._id);

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role
      },
      token
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: 'Google login failed',
      error: err.message
    });
  }
};

// ✅ Forgot Password (JWT-based, no token storage)
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email }).lean();
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const resetToken = createToken(user._id, '15m');
    const frontendBaseURL = process.env.CLIENT_URL || 'http://localhost:5173';
    const resetURL = `${frontendBaseURL}/reset-password/${resetToken}`;

    const message = `
      <h3>Password Reset Request</h3>
      <p>Hello ${user.name},</p>
      <p>Click the button below to reset your password. This link expires in 15 minutes.</p>
      <a href="${resetURL}" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none">Reset Password</a>
      <p>If you didn’t request a password reset, just ignore this email.</p>
    `;

    await sendEmail(user.email, '🔐 Password Reset', message);

    res.json({ msg: 'Password reset email sent!' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
