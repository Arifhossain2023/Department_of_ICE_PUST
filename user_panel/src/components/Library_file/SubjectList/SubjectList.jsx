import { useParams, Link } from 'react-router-dom';
import { semesters } from '../../../assets/assets';
import './SubjectList.css'; // ✅ Import CSS

export default function SubjectList() {
  const { semesterId } = useParams();
  const semester = semesters.find((s) => s.id === parseInt(semesterId));

  return (
    <div className="subject-wrapper">
      <h2 className="subject-title">{semester.name} - Subjects</h2>
      <ul className="subject-list">
        {semester.subjects.map((subj, index) => (
          <li key={index} className="subject-item">
            <Link
              to={`/library/semester/${semesterId}/subject/${subj.name}`}
              className="subject-link"
            >
              {subj.name} ({subj.type})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
