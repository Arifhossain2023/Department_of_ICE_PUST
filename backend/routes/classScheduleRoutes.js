import express from "express";
import {
  uploadSchedule,
  getScheduleBySessionAndDay,
  getAllSessions,
  getAllTeachers
} from "../controllers/classScheduleController.js";

const router = express.Router();

router.post("/upload", uploadSchedule);
router.get("/sessions/list", getAllSessions);
router.get("/teachers/list", getAllTeachers); // ✅ added this line
router.get("/:session/:day", getScheduleBySessionAndDay);

export default router;
