import express from 'express';
import {
  getBlueprintCards,
  createBlueprintCard,
  updateBlueprintCard,
  deleteBlueprintCard,
} from '../controllers/blueprintCardController.js';

const router = express.Router();

router.get('/', getBlueprintCards);
router.post('/', createBlueprintCard); // Protect this route with auth in production
router.put('/:id', updateBlueprintCard); // Protect this route with auth
router.delete('/:id', deleteBlueprintCard); // Protect this route with auth

export default router;
