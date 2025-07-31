import mongoose from 'mongoose';

const educationalSchema = new mongoose.Schema({
  degree: String,
  institute: String,
  session: String,
  note: String,
});

const publicationSchema = new mongoose.Schema({
  type: String,
  title: String,
  publisher: String,
  year: String,
  note: String,
});

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  from: String,
  to: String,
  location: String,
  note: String,
});

const studentSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  roll: String,
  email: String,
  batch: String,
  image: String,
  educationalBackground: [educationalSchema],
  publications: [publicationSchema],
  jobExperience: [jobSchema],
  achievements: [String],
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
