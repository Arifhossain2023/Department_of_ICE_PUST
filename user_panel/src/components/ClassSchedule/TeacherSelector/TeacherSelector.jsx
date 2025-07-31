import React from "react";
import "./TeacherSelector.css";

const TeacherSelector = ({ teacherList, selectedTeacher, onSelect }) => {
  return (
    <div className="teacher-selector">
      <label className="selector-label">Select Teacher:</label>
      <select
        value={selectedTeacher}
        onChange={(e) => onSelect(e.target.value)}
        className="selector-dropdown"
      >
        <option value="">-- Choose Teacher --</option>
        {teacherList.map((name, i) => (
          <option key={i} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
};

export default TeacherSelector;
