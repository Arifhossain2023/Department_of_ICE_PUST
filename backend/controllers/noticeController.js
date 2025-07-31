import Notice from "../models/noticeModel.js";
import path from "path";
import fs from "fs";

// POST - Add a new notice
export const addNotice = async (req, res) => {
  try {
    const { title, category, content } = req.body;
    const file = req.file?.filename;

    const newNotice = new Notice({
      title,
      content,
      category,
      file: file ? `/uploads/notices/${file}` : null,
    });

    await newNotice.save();
    res.status(201).json({ message: "Notice created", notice: newNotice });
  } catch (err) {
    res.status(500).json({ message: "Failed to create notice", error: err.message });
  }
};

// GET - Get all by category
export const getNoticesByCategory = async (req, res) => {
  const { category } = req.params;
  const data = await Notice.find({ category });
  res.json(data);
};
