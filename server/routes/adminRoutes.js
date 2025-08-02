// routes/adminRoutes.js

import express from 'express';
import { protect, verifyAdmin } from '../middleware/authMiddleware.js';
import { getAllUsers, promoteToAdmin } from '../controllers/adminController.js';

const router = express.Router();

// ✅ Get all users (admin only)
router.get('/admin/users', protect, verifyAdmin, getAllUsers);

// ✅ Promote a user to admin (admin only)
router.put('/admin/promote', protect, verifyAdmin, promoteToAdmin);

export default router;
