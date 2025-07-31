import express from "express";
import multer from "multer";
import { addNotice, getNoticesByCategory } from "../controllers/noticeController.js";
import path from "path";
import fs from "fs";

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "uploads/notices";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/", upload.single("file"), addNotice);
router.get("/:category", getNoticesByCategory);

export default router;
