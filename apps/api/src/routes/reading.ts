import express from "express";
import * as ReadingController from "../controller/reading";
import { requiresAuth, requiresNotGuest } from "../middleware/auth";
import { uploadImage } from "../middleware/upload";

const router = express.Router();

router.get("/", requiresAuth, ReadingController.getMyReadings);

router.post(
  "/addMyReading/:book_id/:status_id",
  requiresNotGuest,
  ReadingController.addMyReading
);

router.delete(
  "/:reading_id",
  requiresNotGuest,
  ReadingController.removeMyReading
);

router.patch(
  "/",
  requiresNotGuest,
  uploadImage.single("book_image"),
  ReadingController.updateMyReading
);

router.get("/:reading_id", requiresNotGuest, ReadingController.getMyReading);

export default router;
