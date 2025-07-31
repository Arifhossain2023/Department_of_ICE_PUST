import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyCard.css';

const FacultyCard = ({ member }) => {
  const navigate = useNavigate();

  return (
    <div
      className="faculty-card"
      onClick={() => navigate(member.route)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="faculty-card-image"
      />
      <h3 className="faculty-card-name">{member.name}</h3>
      <p className="faculty-card-designation">{member.designation}</p>
    </div>
  );
};

export default FacultyCard;
