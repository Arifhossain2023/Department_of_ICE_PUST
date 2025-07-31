import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UploadForm from '../UploadForm/UploadForm';
import './NoteList.css'; // External CSS import

export default function NoteList() {
  const { semesterId, subjectName } = useParams();
  const [notes, setNotes] = useState([]);

  const semesterNameMap = {
    1: "1st Year 1st Semester",
    2: "1st Year 2nd Semester",
    3: "2nd Year 1st Semester",
    4: "2nd Year 2nd Semester",
    5: "3rd Year 1st Semester",
    6: "3rd Year 2nd Semester",
    7: "4th Year 1st Semester",
    8: "4th Year 2nd Semester",
  };

  const semesterName = semesterNameMap[semesterId];

  const fetchNotes = async () => {
    const res = await axios.get(`http://localhost:4000/api/notes/${semesterName}/${subjectName}`);
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, [semesterId, subjectName]);

  const books = notes.filter((n) => n.type === "book");
  const normalNotes = notes.filter((n) => n.type === "note");

  return (
    <div className="note-list-container">
      <h2 className="note-list-heading">📂 {subjectName} Files</h2>

      <UploadForm semester={semesterName} subject={subjectName} onUpload={fetchNotes} />

      <div className="section">
        <h3 className="section-heading blue">📘 Books</h3>
        {books.length > 0 ? (
          <ul className="note-list">
            {books.map((note) => (
              <li key={note._id} className="note-item">
                <span>{note.title}</span>
                <div className="note-actions">
                  <a
                    href={`http://localhost:4000/uploads/${note.file}`}
                    target="_blank"
                    rel="noreferrer"
                    className="view-link"
                  >
                    View
                  </a>
                  <a
                    href={`http://localhost:4000/uploads/${note.file}`}
                    download
                    className="download-link"
                  >
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-data">No books uploaded yet.</p>
        )}
      </div>

      <div className="section">
        <h3 className="section-heading green">📝 Notes</h3>
        {normalNotes.length > 0 ? (
          <ul className="note-list">
            {normalNotes.map((note) => (
              <li key={note._id} className="note-item">
                <span>{note.title}</span>
                <div className="note-actions">
                  <a
                    href={`http://localhost:4000/uploads/${note.file}`}
                    target="_blank"
                    rel="noreferrer"
                    className="view-link"
                  >
                    View
                  </a>
                  <a
                    href={`http://localhost:4000/uploads/${note.file}`}
                    download
                    className="download-link"
                  >
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-data">No notes uploaded yet.</p>
        )}
      </div>
    </div>
  );
}
