import express from 'express';
import { getChannels, createChannel, updateChannel, deleteChannel } from '../controllers/workController.js';

const router = express.Router();

router.route('/')
  .get(getChannels)
  .post(createChannel);

router.route('/:id')
  .put(updateChannel)
  .delete(deleteChannel);

export default router;
