import FocusItem from '../models/FocusItem.js';

// Create a new FocusItem
export const createFocusItem = async (req, res) => {
  try {
    const { title, description, icon } = req.body;
    const newItem = new FocusItem({ title, description, icon });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create focus item', details: error.message });
  }
};

// Get all FocusItems
export const getAllFocusItems = async (req, res) => {
  try {
    const items = await FocusItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch focus items', details: error.message });
  }
};

// Get a single FocusItem by ID
export const getFocusItemById = async (req, res) => {
  try {
    const item = await FocusItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Focus item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch focus item', details: error.message });
  }
};

// Update a FocusItem by ID
export const updateFocusItem = async (req, res) => {
  try {
    const { title, description, icon } = req.body;
    const updatedItem = await FocusItem.findByIdAndUpdate(
      req.params.id,
      { title, description, icon },
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ error: 'Focus item not found' });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update focus item', details: error.message });
  }
};

// Delete a FocusItem by ID
export const deleteFocusItem = async (req, res) => {
  try {
    const deletedItem = await FocusItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: 'Focus item not found' });
    res.status(200).json({ message: 'Focus item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete focus item', details: error.message });
  }
};
