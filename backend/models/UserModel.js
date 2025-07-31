import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  role: { type: String, enum: ["student", "teacher", "visitor"] },
  roll: String,
  teacherId: String,
  image: String,
});

export default mongoose.model("User", userSchema);
