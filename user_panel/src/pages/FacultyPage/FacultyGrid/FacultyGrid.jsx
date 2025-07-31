import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../../../data/teachers';
import FacultyCard from '../../../components/FacultyCard/FacultyCard';
import './FacultyGrid.css';

const FacultyGrid = () => {
  const chairman = teamMembers.find(member => member.id === 1);
  const others = teamMembers.filter(member => member.id !== 1);

  return (
    <div className="faculty-page-container">
      {/* Chairman Section */}
      {chairman && (
        <div className="chairman-profile">
          {/* Left: Chairman info */}
          <Link to={`/profile/${chairman.id}`} className="chairman-left">
            <img src={chairman.image} alt={chairman.name} className="chairman-image" />
            <p><strong>{chairman.name}</strong></p>
            <p className="chairman-title">Chairman</p>
            <p>Department of ICE</p>
          </Link>

          {/* Right: Contact info */}
          <div className="chairman-right">
            <p><b>Contact:</b> +8802588844986</p>
            <p><b>Email:</b> chairman.ice@pust.ac.bd</p>
            <p><b>Total Teachers:</b> {teamMembers.length}</p>
          </div>
        </div>
      )}

      {/* Faculty Grid */}
      <div className="faculty-grid">
        {others.map(member => (
          <FacultyCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default FacultyGrid;
