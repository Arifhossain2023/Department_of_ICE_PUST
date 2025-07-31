import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Signup from "../../pages/Auth/Auth";
import ProfileBox from '../ProfileBox/ProfileBox';
import { url, assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });
  const [showProfile, setShowProfile] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/teachers', label: 'Teachers' },
    { path: '/student', label: 'Students' },
    { path: '/library', label: 'Library' },
    { path: '/notice', label: 'Notice' },
    { path: '/class-schedule', label: 'Class Schedule' },
  ];

  const semesters = [
    { id: 1, name: '1st' }, { id: 2, name: '2nd' }, { id: 3, name: '3rd' },
    { id: 4, name: '4th' }, { id: 5, name: '5th' }, { id: 6, name: '6th' },
    { id: 7, name: '7th' }, { id: 8, name: '8th' }
  ];

  const navLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowProfile(false);
  };

  return (
    <header className="navbar-container">
      {/* Blue left section */}
      <div className="navbar-brand-section">
        <img src={assets.logo} alt="Dept Logo" className="logo-img" />
        <h1 className="logo-text">Department of Information and Communication Engineering</h1>
      </div>

      {/* White right section */}
      <div className="navbar-links-section">
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          
          {user ? (
            <img
              src={`${url}/uploads/${user.image}`}
              alt="profile"
              className="profile-icon"
              onClick={() => setShowProfile(!showProfile)}
            />
          ) : (
            <button className="signup-btn" onClick={() => setShowSignup(true)}>
              Sign Up
            </button>
          )}
        </nav>

        {/* Mobile toggle button */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mobile-subsection">
              <p className="subsection-title">Library</p>
              {semesters.map((sem) => (
                <NavLink
                  key={sem.id}
                  to={`/library/semester/${sem.id}`}
                  className="mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {sem.name} Semester
                </NavLink>
              ))}
            </div>

            {user ? (
              <img
                src={`${url}/uploads/${user.image}`}
                alt="profile"
                className="profile-icon mobile-profile"
                onClick={() => {
                  setShowProfile(true);
                  setIsOpen(false);
                }}
              />
            ) : (
              <button
                className="signup-btn mobile-signup"
                onClick={() => {
                  setShowSignup(true);
                  setIsOpen(false);
                }}
              >
                Sign Up
              </button>
            )}
          </div>
        )}
      </div>

      {/* Profile and Signup Popups */}
      {showProfile && user && (
        <ProfileBox
          user={user}
          onClose={() => setShowProfile(false)}
          onLogout={handleLogout}
        />
      )}

      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSuccess={(loggedInUser) => {
            setUser(loggedInUser);
            localStorage.setItem("user", JSON.stringify(loggedInUser));
            setShowSignup(false);
          }}
        />
      )}
    </header>
  );
};

export default Navbar;