import { Link } from 'react-router-dom';
import { semesters } from '../../../assets/assets';
import './SemesterList.css'; // ✅ Import CSS

export default function SemesterList() {
  return (
    <div className="semester-wrapper">
      <h1 className="semester-title">📘 Select a Semester</h1>
      <ul className="semester-list">
        {semesters.map((sem) => (
          <li key={sem.id} className="semester-item">
            <Link
              to={`/library/semester/${sem.id}`}
              className="semester-link"
            >
              {sem.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
