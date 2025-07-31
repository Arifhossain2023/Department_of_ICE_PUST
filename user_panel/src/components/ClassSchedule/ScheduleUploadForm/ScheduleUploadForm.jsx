import React, { useState } from "react";
import axios from "axios";
import { url } from "../../../assets/assets";
import "./ScheduleUploadForm.css";

const ScheduleUploadForm = ({ onUploadSuccess }) => {
  const emptyClass = { subject: "", teacher: "", start: "", end: "", room: "" };
  const [session, setSession] = useState("");
  const [day, setDay] = useState("");
  const [shifts, setShifts] = useState([
    { name: "Shift 1", classes: [{ ...emptyClass }] },
    { name: "Shift 2", classes: [{ ...emptyClass }] },
    { name: "Shift 3", classes: [{ ...emptyClass }] },
  ]);

  const handleShiftNameChange = (index, value) => {
    const newShifts = [...shifts];
    newShifts[index].name = value;
    setShifts(newShifts);
  };

  const handleClassChange = (shiftIndex, classIndex, field, value) => {
    const newShifts = [...shifts];
    newShifts[shiftIndex].classes[classIndex][field] = value;
    setShifts(newShifts);
  };

  const addClass = (shiftIndex) => {
    const newShifts = [...shifts];
    newShifts[shiftIndex].classes.push({ ...emptyClass });
    setShifts(newShifts);
  };

  const removeClass = (shiftIndex, classIndex) => {
    const newShifts = [...shifts];
    if (newShifts[shiftIndex].classes.length > 1) {
      newShifts[shiftIndex].classes.splice(classIndex, 1);
      setShifts(newShifts);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session || !day) {
      alert("Please select session and day");
      return;
    }

    const nonEmptyShifts = shifts
      .map((shift) => {
        const filteredClasses = shift.classes.filter(
          (cls) =>
            cls.subject.trim() ||
            cls.teacher.trim() ||
            cls.start.trim() ||
            cls.end.trim() ||
            cls.room.trim()
        );
        return filteredClasses.length > 0
          ? { shiftName: shift.name, classes: filteredClasses }
          : null;
      })
      .filter(Boolean);

    if (nonEmptyShifts.length === 0) {
      alert("Please fill at least one class in any shift");
      return;
    }

    try {
      await axios.post(`${url}/api/class-schedule/upload`, {
        session,
        day,
        shifts: nonEmptyShifts,
      });

      if (onUploadSuccess) onUploadSuccess();

      setSession("");
      setDay("");
      setShifts([
        { name: "Shift 1", classes: [{ ...emptyClass }] },
        { name: "Shift 2", classes: [{ ...emptyClass }] },
        { name: "Shift 3", classes: [{ ...emptyClass }] },
      ]);
    } catch (error) {
      alert("Failed to upload schedule");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Upload Class Schedule</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Session:</label>
        <input
          type="text"
          value={session}
          onChange={(e) => setSession(e.target.value)}
          placeholder="e.g. 2023-24"
          required
        />

        <label>Day:</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="e.g. Sunday"
          required
        />

        {shifts.map((shift, shiftIndex) => (
          <div key={shiftIndex} className="shift-block">
            <input
              type="text"
              value={shift.name}
              onChange={(e) => handleShiftNameChange(shiftIndex, e.target.value)}
              placeholder={`Shift ${shiftIndex + 1} Name`}
            />

            {shift.classes.map((cls, classIndex) => (
              <div key={classIndex} className="class-row">
                <input
                  type="text"
                  value={cls.subject}
                  onChange={(e) =>
                    handleClassChange(shiftIndex, classIndex, "subject", e.target.value)
                  }
                  placeholder="Subject"
                />
                <input
                  type="text"
                  value={cls.teacher}
                  onChange={(e) =>
                    handleClassChange(shiftIndex, classIndex, "teacher", e.target.value)
                  }
                  placeholder="Teacher"
                />
                <input
                  type="text"
                  value={cls.room}
                  onChange={(e) =>
                    handleClassChange(shiftIndex, classIndex, "room", e.target.value)
                  }
                  placeholder="Room No."
                />
                <input
                  type="time"
                  value={cls.start}
                  onChange={(e) =>
                    handleClassChange(shiftIndex, classIndex, "start", e.target.value)
                  }
                />
                <input
                  type="time"
                  value={cls.end}
                  onChange={(e) =>
                    handleClassChange(shiftIndex, classIndex, "end", e.target.value)
                  }
                />
                {shift.classes.length > 1 && (
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeClass(shiftIndex, classIndex)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => addClass(shiftIndex)}
            >
              + Add Class
            </button>
          </div>
        ))}

        <button type="submit" className="submit-btn">
          Upload Schedule
        </button>
      </form>
    </div>
  );
};

export default ScheduleUploadForm;
