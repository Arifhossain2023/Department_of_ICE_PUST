import React from "react";
import "./SessionSelector.css"; // ✅ Import the CSS

const SessionSelector = ({ sessionList, selectedSession, onSelect }) => {
  return (
    <div className="session-selector-container">
      <label className="session-selector-label">Select Session:</label>
      <select
        value={selectedSession}
        onChange={(e) => onSelect(e.target.value)}
        className="session-selector-select"
      >
        <option value="">-- Choose Session --</option>
        {sessionList.map((session, i) => (
          <option key={i} value={session}>
            {session}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SessionSelector;
