import { useState } from 'react';
import axios from 'axios';
import './UploadForm.css'; // External CSS file

export default function UploadForm({ semester, subject, onUpload }) {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [type, setType] = useState('note');
  const [showForm, setShowForm] = useState(false); // Toggle state

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return alert("Title and file are required");

    const formData = new FormData();
    formData.append("semester", semester);
    formData.append("subject", subject);
    formData.append("title", title);
    formData.append("type", type);
    formData.append("file", file);

    await axios.post("http://localhost:4000/api/notes/upload", formData);
    setTitle('');
    setFile(null);
    setType('note');
    onUpload();
    setShowForm(false); // Hide form after upload
  };

  return (
    <div className="upload-form-container">
      <button
        type="button"
        onClick={() => setShowForm(!showForm)}
        className="toggle-button"
      >
        📤 Upload New {showForm ? '▲' : '▼'}
      </button>

      {showForm && (
        <form onSubmit={handleUpload} className="upload-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="upload-input"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="upload-select"
          >
            <option value="note">Note</option>
            <option value="book">Book</option>
          </select>

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="upload-input"
          />

          <button type="submit" className="submit-button">
            Upload
          </button>
        </form>
      )}
    </div>
  );
}
