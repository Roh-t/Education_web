import express from "express";
import { getInfo, updateInfo } from "../controllers/infoController.js";

const router = express.Router();

router.get("/:key", getInfo);
router.put("/:key", updateInfo);

export default router;
