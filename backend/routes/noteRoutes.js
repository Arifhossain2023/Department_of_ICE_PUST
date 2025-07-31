// routes/noteRoutes.js
import express from "express";
import multer from "multer";
import { Note } from "../models/Note.js";
import fs from "fs";
import path from "path";

const router = express.Router();

// Multer config with dynamic destination
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const type = req.body.type || "note"; // default to note
    const uploadPath = `uploads/${type}`;

    // Create folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// @POST: Upload a new note/book
router.post("/upload", upload.single("file"), async (req, res) => {
  const { semester, subject, title, type } = req.body;
  const file = req.file;
  if (!file) return res.status(400).json({ error: "File missing" });

  try {
    const note = new Note({
      semester,
      subject,
      title,
      type,
      file: `${type}/${file.filename}`, // store relative path
    });
    await note.save();
    res.status(201).json({ message: "Uploaded", note });
  } catch (err) {
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
});

// @GET: Get all notes/books by semester + subject
router.get("/:semester/:subject", async (req, res) => {
  const { semester, subject } = req.params;
  const notes = await Note.find({ semester, subject });
  res.json(notes);
});

export default router;
