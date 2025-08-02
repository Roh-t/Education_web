import express from 'express';
import {
  createFocusItem,
  getAllFocusItems,
  getFocusItemById,
  updateFocusItem,
  deleteFocusItem,
} from '../controllers/focusController.js';

const router = express.Router();

// Create a new FocusItem
router.post('/', createFocusItem);

// Get all FocusItems
router.get('/', getAllFocusItems);

// Get a single FocusItem by ID
router.get('/:id', getFocusItemById);

// Update a FocusItem by ID
router.put('/:id', updateFocusItem);

// Delete a FocusItem by ID
router.delete('/:id', deleteFocusItem);

export default router;
