import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ViewBatch.css';

const ViewBatch = () => {
  const { batch } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:4000/api/student/batch/${batch}`)
      .then(res => {
        setStudents(res.data);
        if (res.data.length === 0) {
          setMsg('এই ব্যাচে এখনো কোনো Student তথ্য যুক্ত করেনি।');
        }
      })
      .catch(() => setMsg('ডেটা লোড করতে সমস্যা হচ্ছে।'))
      .finally(() => setLoading(false));
  }, [batch]);

  return (
    <div className="view-batch-container">
      <h3 className="batch-title">🎓 Batch: {batch}</h3>

      {loading ? (
        <p className="loading-text">লোড হচ্ছে...</p>
      ) : msg ? (
        <p className="info-text">{msg}</p>
      ) : (
        <ul className="student-list">
          {students.map(student => (
            <li key={student._id} className="student-item">
              <Link to={`/student/details/${student._id}`} className="student-link">
                {student.fullName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewBatch;
