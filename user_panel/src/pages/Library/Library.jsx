import React from 'react';
import { Routes, Route } from 'react-router-dom';

// src/pages/Library/Library.jsx

import SemesterList from '../../components/Library_file/SemesterList/SemesterList';
import SubjectList from '../../components/Library_file/SubjectList/SubjectList';
import NoteList from '../../components/Library_file/NoteList/NoteList';

const Library = () => {
  return (
    <Routes>
      <Route index element={<SemesterList />} />
      <Route path="semester/:semesterId" element={<SubjectList />} />
      <Route path="semester/:semesterId/subject/:subjectName" element={<NoteList />} />
    </Routes>
  );
};

export default Library;

