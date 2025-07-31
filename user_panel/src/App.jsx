import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';

// Pages
import Home from './pages/Home/Home';
import Library from './pages/Library/Library';
//import Teachers from './pages/Teachers/Teachers';
import StudentPage from './pages/StudentPage/StudentPage';
import Signup from './pages/Auth/Auth'; 
import ClassSchedulePage from './pages/ClassSchedulePage/ClassSchedulePage';
import Notice from './pages/NoticePage/NoticePage';
import FacultyGrid from './pages/FacultyPage/FacultyGrid/FacultyGrid';
import ProfilePage from './pages/FacultyPage/ProfilePage/ProfilePage';
import { StoreProvider } from './context/StoreContext';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library/*" element={<Library />} />
          <Route path="/teachers" element={<FacultyGrid />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/student/*" element={<StudentPage />} />
          <Route path="/class-schedule" element={<ClassSchedulePage />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
