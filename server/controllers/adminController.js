// In adminController.js
import User from '../models/User.js';

// GET /admin/users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').lean(); // Lean for speed

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: 'Failed to fetch users',
      error: err.message,
    });
  }
};

// POST /admin/promote
export const promoteToAdmin = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { role: 'admin' },
      { new: true, lean: true }
    );

    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json({ msg: 'User promoted to admin', user });
  } catch (err) {
    res.status(500).json({
      msg: 'Failed to promote user',
      error: err.message,
    });
  }
};
