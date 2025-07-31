import React, { useEffect, useState } from "react";
import axios from "axios";
import getTodayName from "../../../utils/getTodayName/getTodayName";
import { url } from "../../../assets/assets";
import "./TodayScheduleView.css";

const formatTime = (timeStr) => {
  if (!timeStr) return "N/A";
  const [hour, minute] = timeStr.split(":");
  const h = parseInt(hour);
  const suffix = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${minute} ${suffix}`;
};

const timeToMinutes = (time) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

const TodayScheduleView = ({ selectedSession, selectedTeacher }) => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const today = getTodayName();

  useEffect(() => {
    if (!selectedSession && !selectedTeacher) return;

    setLoading(true);
    const teacherQuery = selectedTeacher
      ? `?teacher=${encodeURIComponent(selectedTeacher)}`
      : "";

    const sessionParam = selectedSession || "any";

    axios
      .get(`${url}/api/class-schedule/${sessionParam}/${today}${teacherQuery}`)
      .then((res) => {
        const result = Array.isArray(res.data) ? res.data : [res.data];

        const sorted = result.map(scheduleItem => ({
          ...scheduleItem,
          shifts: scheduleItem.shifts.map((shift) => ({
            ...shift,
            classes: [...shift.classes].sort(
              (a, b) => timeToMinutes(a.start) - timeToMinutes(b.start)
            ),
          }))
        }));

        setSchedule(sorted);
        setLoading(false);
      })
      .catch(() => {
        setSchedule([]);
        setLoading(false);
      });
  }, [selectedSession, selectedTeacher, today]);

  if (!selectedSession && !selectedTeacher)
    return <p>Please select a session or teacher.</p>;

  if (loading) return <p>Loading schedule...</p>;

  if (schedule.length === 0)
    return <p>No schedule found for today ({today}).</p>;

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">📅 Today’s Schedule ({today})</h2>

      {schedule.map((item, i) => (
        <div key={i} className="mb-4 border rounded p-2">
          {schedule.length > 1 && (
            <h3 className="text-lg font-bold mb-2 text-blue-600">
              Session: {item.session}
            </h3>
          )}

          {item.shifts.map((shift, j) => (
            <div key={j} className="shift-block">
              <h4 className="shift-title">{shift.shiftName}</h4>

              {shift.classes.map((cls, idx) => (
                <div key={idx} className="class-card">
                  <div className="class-info">
                    <p><span>📚 Subject:</span> {cls.subject}</p>
                    <p><span>👨‍🏫 Teacher:</span> {cls.teacher}</p>
                    <p><span>🏫 Room:</span> {cls.room || "N/A"}</p>
                    <p><span>🕒 Time:</span> {formatTime(cls.start)} - {formatTime(cls.end)}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TodayScheduleView;
