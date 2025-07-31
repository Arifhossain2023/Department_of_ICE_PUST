import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import UploadStudentInfo from '../../components/Student/UploadStudentInfo/UploadStudentInfo';
import ViewBatch from '../../components/Student/ViewBatch/ViewBatch';
import ViewStudentDetails from '../../components/Student/ViewStudentDetails/ViewStudentDetails';
import axios from 'axios';
import './StudentPage.css';

const StudentPage = () => {
  const navigate = useNavigate();
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // dynamically load batch list from backend
    axios.get('http://localhost:4000/api/student/batches')
      .then(res => setBatches(res.data))
      .catch(err => {
        console.error('Batch fetch error:', err);
        setBatches(Array.from({ length: 17 }, (_, i) => `${i + 1}th`)); // fallback
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="student-page">
      <Routes>
        {/* Subroutes */}
        <Route path="/upload" element={<UploadStudentInfo />} />
        <Route path="/batch/:batch" element={<ViewBatch />} />
        <Route path="/details/:id" element={<ViewStudentDetails />} />

        {/* Default page */}
        <Route
          path="/"
          element={
            <div className="batch-list">
              <h2>📚 Select a Batch</h2>

              <button
                className="upload-btn"
                onClick={() => navigate('/student/upload')}
              >
                📤 Upload Your Info
              </button>

              {loading ? (
                <p className="loading-text">Loding....</p>
              ) : (
                <div className="batch-buttons">
                  {batches.map((batch, i) => (
                    <button
                      key={i}
                      className="batch-btn"
                      onClick={() => navigate(`/student/batch/${batch}`)}
                    >
                      {batch} Batch
                    </button>
                  ))}
                </div>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default StudentPage;
