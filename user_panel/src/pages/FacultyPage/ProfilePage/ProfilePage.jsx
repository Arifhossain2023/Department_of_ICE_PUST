// src/pages/FacultyPage/ProfilePage/ProfilePage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { profiles } from '../../../data/profiles';  // update path as per your folder structure
import './ProfilePage.css';

const ProfilePage = () => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === parseInt(id));

  if (!profile) {
    return <p className="profile-not-found">Profile not found!</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* তোমার assets এ ছবি থাকলে এখানেও সেটা path দিয়ে দিবে */}
        <img
          src={profile.image} // তোমার profiles.js তে যদি image path থাকে
          alt={profile.name}
          className="profile-image"
        />
        <h2 className="profile-name">{profile.name}</h2>
        <p className="profile-designation">{profile.designation}</p>
      </div>

      {/* Contact Info */}
      <div className="profile-section">
        <h3>Contact Information</h3>
        <ul>
          <li><b>Personal Phone:</b> {profile.contactInfo.personalPhone}</li>
          <li><b>Office Phone:</b> {profile.contactInfo.officePhone}</li>
          <li><b>Office Email:</b> <a href={`mailto:${profile.contactInfo.officeEmail}`}>{profile.contactInfo.officeEmail}</a></li>
          <li><b>Personal Email:</b> <a href={`mailto:${profile.contactInfo.personalEmail}`}>{profile.contactInfo.personalEmail}</a></li>
        </ul>
      </div>

      {/* Education */}
      <div className="profile-section">
        <h3>Education</h3>
        <ul>
          {profile.education.map((edu, i) => (
            <li key={i}>
              <b>{edu.degree}</b> ({edu.year}) {edu.department ? `, ${edu.department}` : ''}, {edu.institution} {edu.result ? `(${edu.result})` : ''}
            </li>
          ))}
        </ul>
      </div>

      {/* Research Interests */}
      <div className="profile-section">
        <h3>Research Interests</h3>
        <ul>
          {profile.researchInterests.map((ri, i) => (
            <li key={i}>{ri}</li>
          ))}
        </ul>
      </div>

      {/* Publications */}
      <div className="profile-section">
        <h3>Publications ({profile.publications.totalPublications} Total)</h3>
        <p>Journal Articles: {profile.publications.journalArticles}, Book Chapters: {profile.publications.bookChapters}, Conference Proceedings: {profile.publications.conferenceProceedings}</p>

        <h4>Selected Journal Articles</h4>
        <ul>
          {profile.publications.selectedJournalArticles.map((pub, i) => (
            <li key={i}>
              "{pub.title}" - {pub.authors}, <em>{pub.journal}</em>, {pub.volume ? `Volume ${pub.volume}, ` : ''}{pub.year}.
            </li>
          ))}
        </ul>

        <h4>Selected Conference Proceedings</h4>
        <ul>
          {profile.publications.selectedConferenceProceedings.map((pub, i) => (
            <li key={i}>
              "{pub.title}" - {pub.authors}, <em>{pub.conference}</em>, {pub.location ? `${pub.location}, ` : ''}{pub.year}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
