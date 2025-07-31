import ClassSchedule from "../models/classScheduleModel.js";

// Upload schedule
export const uploadSchedule = async (req, res) => {
  try {
    const { session, day, shifts } = req.body;
    await ClassSchedule.deleteMany({ session, day });
    const newSchedule = new ClassSchedule({ session, day, shifts });
    await newSchedule.save();
    res.status(201).json({ message: "Schedule uploaded successfully", schedule: newSchedule });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

// Get today's schedule by session or teacher
export const getScheduleBySessionAndDay = async (req, res) => {
  try {
    const { session, day } = req.params;
    const { teacher } = req.query;

    let data;
    if (session === "any") {
      // fetch all sessions for today
      data = await ClassSchedule.find({ day });
    } else {
      data = await ClassSchedule.find({ session, day });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "Not found" });
    }

    let result = [];

    data.forEach((item) => {
      let shifts = item.shifts;

      if (teacher) {
        shifts = shifts
          .map(shift => {
            const filteredClasses = shift.classes.filter(cls =>
              cls.teacher.toLowerCase().includes(teacher.toLowerCase())
            );
            return filteredClasses.length > 0 ? { ...shift.toObject(), classes: filteredClasses } : null;
          })
          .filter(Boolean);
      }

      if (shifts.length > 0) {
        result.push({ session: item.session, day: item.day, shifts });
      }
    });

    if (result.length === 0) {
      return res.status(404).json({ message: "No schedule found for this teacher." });
    }

    res.json(result.length === 1 ? result[0] : result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schedule", error: error.message });
  }
};

// Get all sessions
export const getAllSessions = async (req, res) => {
  try {
    const sessions = await ClassSchedule.distinct("session");
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sessions", error: error.message });
  }
};

// Get all unique teachers
export const getAllTeachers = async (req, res) => {
  try {
    const schedules = await ClassSchedule.find();
    const teacherSet = new Set();
    schedules.forEach(schedule => {
      schedule.shifts.forEach(shift => {
        shift.classes.forEach(cls => {
          if (cls.teacher?.trim()) {
            teacherSet.add(cls.teacher.trim());
          }
        });
      });
    });

    res.json(Array.from(teacherSet));
  } catch (error) {
    res.status(500).json({ message: "Error fetching teachers", error: error.message });
  }
};
