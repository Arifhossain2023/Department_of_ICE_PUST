import Student from '../models/studentModel.js';

export const uploadStudentInfo = async (req, res) => {
  const {
    fullName, phone, roll, email, batch,
    educationalBackground, publications, jobExperience, achievements
  } = req.body;

  // ✅ Email-Roll match validation
  if (!email.includes(roll)) {
    return res.status(400).json({ message: "You are not eligible to upload. Email and Roll mismatch." });
  }

  try {
    const newStudent = new Student({
      fullName,
      phone,
      roll,
      email,
      batch,
      image: req.file?.filename || null,
      educationalBackground: JSON.parse(educationalBackground || '[]'),
      publications: JSON.parse(publications || '[]'),
      jobExperience: JSON.parse(jobExperience || '[]'),
      achievements: JSON.parse(achievements || '[]'),
    });

    await newStudent.save();
    res.status(201).json({ message: "✅ Information uploaded successfully." });
  } catch (err) {
    console.error("❌ Upload failed:", err.message);
    res.status(500).json({ message: "Upload failed.", error: err.message });
  }
};

export const getStudentsByBatch = async (req, res) => {
  const { batch } = req.params;
  const students = await Student.find({ batch }).select('fullName _id');
  res.json(students);
};

export const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  res.json(student);
};

// ✅ BONUS: get all distinct batches (for dropdown)
export const getAllBatches = async (req, res) => {
  try {
    const batches = await Student.distinct("batch");
    res.json(batches);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch batch list." });
  }
};
