import express from "express";
import {
  getYouTubeReviews,
  createYouTubeReviews,
  updateYouTubeReviews,
  deleteYouTubeReviews,
} from "../controllers/youtubeReviewController.js";

const router = express.Router();

router.get("/", getYouTubeReviews);
router.post("/", createYouTubeReviews);
router.put("/:id", updateYouTubeReviews);
router.delete("/:id", deleteYouTubeReviews);

export default router;
