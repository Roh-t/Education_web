import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import connectDB from '../config/db.js';

dotenv.config({ path: '../.env' });

const seedAdmin = async () => {
  try {
    await connectDB();

    const {
      ADMIN_EMAIL,
      ADMIN_NAME,
      ADMIN_PASSWORD,
      ADMIN_LOGIN_TYPE
    } = process.env;

    if (!ADMIN_EMAIL || !ADMIN_LOGIN_TYPE) {
      console.error('❌ Missing required ENV variables');
      return process.exit(1);
    }

    let user = await User.findOne({ email: ADMIN_EMAIL });

    // If user doesn't exist, create new admin
    if (!user) {
      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

      await User.create({
        name: ADMIN_NAME || 'Admin',
        email: ADMIN_EMAIL,
        password: hashedPassword,
        loginType: 'local',         // ✅ Always 'local' if password exists
        role: 'admin'
      });

      console.log('✅ Admin user created');
    } else {
      // Promote if needed
      let updated = false;

      if (user.role !== 'admin') {
        user.role = 'admin';
        updated = true;
      }

      if (user.loginType !== 'local') {
        user.loginType = 'local';
        updated = true;
      }

      if (!user.password && ADMIN_PASSWORD) {
        user.password = await bcrypt.hash(ADMIN_PASSWORD, 10);
        updated = true;
      }

      if (updated) {
        await user.save();
        console.log('✅ Existing user updated to local admin');
      } else {
        console.log('ℹ️ Admin user already exists');
      }
    }

    process.exit();
  } catch (err) {
    console.error('❌ Failed:', err.message);
    process.exit(1);
  }
};

seedAdmin();
