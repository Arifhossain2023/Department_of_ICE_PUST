import React, { useEffect, useState } from "react";
import axios from "axios";
import SessionSelector from "../../components/ClassSchedule/SessionSelector/SessionSelector";
import TeacherSelector from "../../components/ClassSchedule/TeacherSelector/TeacherSelector";
import TodayScheduleView from "../../components/ClassSchedule/TodayScheduleView/TodayScheduleView";
import ScheduleUploadForm from "../../components/ClassSchedule/ScheduleUploadForm/ScheduleUploadForm";
import "./ClassSchedulePage.css";

const ClassSchedulePage = () => {
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [sessionList, setSessionList] = useState([]);
  const [teacherList, setTeacherList] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/api/class-schedule/sessions/list")
      .then(res => setSessionList(res.data));

    axios.get("http://localhost:4000/api/class-schedule/teachers/list")
      .then(res => setTeacherList(res.data));
  }, [refreshKey]);

  const handleUploadSuccess = () => {
    alert("Schedule uploaded successfully");
    setRefreshKey(prev => prev + 1);
    setShowForm(false);
  };

  return (
    <div className="class-schedule-container">
      <h1 className="page-title">Class Schedule Viewer & Upload</h1>

      <div className="form-toggle-header" onClick={() => setShowForm(!showForm)}>
        📤 Upload Class Schedule {showForm ? "❌" : "➕"}
      </div>

      {showForm && <ScheduleUploadForm onUploadSuccess={handleUploadSuccess} />}

      <SessionSelector
        sessionList={sessionList}
        selectedSession={selectedSession}
        onSelect={setSelectedSession}
      />

      <TeacherSelector
        teacherList={teacherList}
        selectedTeacher={selectedTeacher}
        onSelect={setSelectedTeacher}
      />

      <TodayScheduleView
        key={refreshKey}
        selectedSession={selectedSession}
        selectedTeacher={selectedTeacher}
      />
    </div>
  );
};

export default ClassSchedulePage;
