import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  subject: String,
  teacher: String,
  start: String,
  end: String,
  room: String,
});

const shiftSchema = new mongoose.Schema({
  name: String,
  classes: [classSchema],
});

const classScheduleSchema = new mongoose.Schema({
  session: { type: String, required: true },
  day: { type: String, required: true },
  shifts: [shiftSchema],
});

const ClassSchedule = mongoose.model("ClassSchedule", classScheduleSchema);
export default ClassSchedule;
