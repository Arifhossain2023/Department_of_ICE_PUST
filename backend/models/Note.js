// models/Note.js
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  semester: String,
  subject: String,
  title: String,
  type: { type: String, enum: ["note", "book"], default: "note" },
  file: String, // contains: "note/filename.pdf" or "book/filename.pdf"
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

export const Note = mongoose.model("Note", noteSchema);