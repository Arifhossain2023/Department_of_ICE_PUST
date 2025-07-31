import React, { useEffect, useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ViewStudentDetails.css';

const ViewStudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/student/student/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!student) return <p className="loading-text">⏳ Loading student details...</p>;

  return (
    <div className="student-details">
      <div className="student-header">
        <img
          src={`http://localhost:4000/uploads/${student.image}`}
          alt="profile"
          className="student-image"
        />
        <div className="student-info">
          <h2>{student.fullName}</h2>
          <p>📧 Email: {student.email}</p>
          <p>📞 Phone: {student.phone || 'N/A'}</p>
          <p>🎓 Roll: {student.roll}</p>
          <p>📅 Batch: {student.batch}</p>

          <button
            className="update-btn"
            onClick={() => navigate('/student/upload', { state: { student } })}
          >
            Update your information
          </button>
        </div>
      </div>

      <div className="student-section">
        <h3>🎓 Educational Background</h3>
        {student.educationalBackground.length ? (
          <ul>
            {student.educationalBackground.map((edu, i) => (
              <li key={i}>
                <strong>{edu.degree}</strong> — {edu.institute}, {edu.session || edu.year || 'N/A'}
                {edu.note && ` | ${edu.note}`}
              </li>
            ))}
          </ul>
        ) : <p>No educational info available.</p>}
      </div>

      <div className="student-section">
        <h3>📄 Publications</h3>
        {student.publications.length ? (
          <ul>
            {student.publications.map((pub, i) => (
              <li key={i}>
                <strong>{pub.type}</strong>: {pub.title} ({pub.year || 'N/A'})
                {pub.publisher && ` | Publisher: ${pub.publisher}`}
                {pub.note && ` | ${pub.note}`}
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noreferrer"> 🔗 View</a>
                )}
              </li>
            ))}
          </ul>
        ) : <p>No publications available.</p>}
      </div>

      <div className="student-section">
        <h3>💼 Job Experience</h3>
        {student.jobExperience.length ? (
          <ul>
            {student.jobExperience.map((job, i) => (
              <li key={i}>
                <strong>{job.role || job.position || 'N/A'}</strong> at {job.company || job.organization || 'N/A'}
                <span> — {job.from || 'N/A'} to {job.to || 'N/A'} {job.isPresent ? "(Present)" : ""}</span>
                {job.location && ` | Location: ${job.location}`}
                {job.note && <p className="job-desc">📝 {job.note}</p>}
              </li>
            ))}
          </ul>
        ) : <p>No job experience listed.</p>}
      </div>

      <div className="student-section">
        <h3>🏅 Achievements</h3>
        {student.achievements && student.achievements.length ? (
          <ul>
            {student.achievements.map((achv, i) => (
              <li key={i}>{achv}</li>
            ))}
          </ul>
        ) : <p>No achievements listed.</p>}
      </div>
    </div>
  );
};

export default ViewStudentDetails;
