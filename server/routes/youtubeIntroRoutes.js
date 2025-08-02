import express from "express";
import {
  getYouTubeIntro,
  createYouTubeIntro,
  updateYouTubeIntro,
  deleteYouTubeIntro,
} from "../controllers/youtubeIntroController.js";

const router = express.Router();

router.get("/", getYouTubeIntro);
router.post("/", createYouTubeIntro);
router.put("/:id", updateYouTubeIntro);
router.delete("/:id", deleteYouTubeIntro);

export default router;
