import express from 'express';
import multer from 'multer';
import Student from '../models/studentModel.js';
import {
  uploadStudentInfo,
  getStudentsByBatch,
  getStudentById,
  getAllBatches
} from '../controllers/studentController.js';

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage });

// Routes
router.post('/upload', upload.single('image'), uploadStudentInfo);
router.get('/batch/:batch', getStudentsByBatch);
router.get('/student/:id', getStudentById);
router.get('/batches', getAllBatches);

// NEW: Update existing student info route
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const id = req.params.id;
    const { fullName, phone, roll, email, batch } = req.body;

    // Validate email-roll match
    if (!email.includes(roll)) {
      return res.status(400).json({ message: "Email এবং Roll মিলছে না" });
    }

    // Parse arrays
    const educationalBackground = JSON.parse(req.body.educationalBackground || '[]');
    const publications = JSON.parse(req.body.publications || '[]');
    const jobExperience = JSON.parse(req.body.jobExperience || '[]');
    const achievements = JSON.parse(req.body.achievements || '[]');

    const updateData = {
      fullName,
      phone,
      roll,
      email,
      batch,
      educationalBackground,
      publications,
      jobExperience,
      achievements,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedStudent = await Student.findByIdAndUpdate(id, updateData, { new: true });

    res.json({ message: "Updated successfully", student: updatedStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Update failed", error: error.message });
  }
});

export default router;
