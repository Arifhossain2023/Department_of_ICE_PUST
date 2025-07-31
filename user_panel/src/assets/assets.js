export const url = "http://localhost:4000";

export const semesters = [
  {
    id: 1,
    name: "1st Year 1st Semester",
    subjects: [
      { name: "Fundamentals of ICT", type: "theory" },
      { name: "Basic Electronics", type: "theory" },
      { name: "Applied Electricity and Magnetism", type: "theory" },
      { name: "Differential Calculus and Geometry", type: "theory" },
      { name: "Bangladesh Studies", type: "theory" },
      { name: "Fundamentals of ICT Sessional", type: "lab" },
      { name: "Basic Electronics Sessional", type: "lab" },
      { name: "Applied Electricity and Magnetism Sessional", type: "lab" },
    ],
  },
  {
    id: 2,
    name: "1st Year 2nd Semester",
    subjects: [
      { name: "Analog Electronics", type: "theory" },
      { name: "Programming with C", type: "theory" },
      { name: "Circuit Theory and Analysis", type: "theory" },
      { name: "Integral Calculus and Differential Equations", type: "theory" },
      { name: "Industrial Management and Accountancy", type: "theory" },
      { name: "Fundamental English", type: "theory" },
      { name: "Analog Electronics Sessional", type: "lab" },
      { name: "Programming with C Sessional", type: "lab" },
      { name: "Circuit Theory and Analysis Sessional", type: "lab" },
      { name: "Fundamental English", type: "lab" },
    ],
  },
  {
    id: 3,
    name: "2nd Year 1st Semester",
    subjects: [
      { name: "Digital Electronics", type: "theory" },
      { name: "Object Oriented Programming", type: "theory" },
      { name: "Discrete Mathematics and Numerical Methods", type: "theory" },
      { name: "Vector,Matrix and Linear Algebra", type: "theory" },
      { name: "Elementary Statistics and Probability", type: "theory" },
      { name: "Digital Electronics Sessional", type: "lab" },
      { name: "Object Oriented Programming Sessional", type: "lab" },
      { name: "Discrete Mathematics and Numerical Methods Sessional", type: "lab" },
      { name: "Elementary Statistics and Probability Sessional", type: "lab" },
    ],
  },
  {
    id: 4,
    name: "2nd Year 2nd Semester",
    subjects: [
      { name: "Data Structure and Algorithm", type: "theory" },
      { name: "Analog Communication", type: "theory" },
      { name: "Signal and Systems", type: "theory" },
      { name: "Electromagnetic Fields and Waves", type: "theory" },
      { name: "Complex Variable Analysis, Laplace and Fourier TransForms", type: "theory" },
      { name: "Sampling Distribution and Hypothesis Testing", type: "theory" },
      { name: "Data Structure and Algorithm Sessional", type: "lab" },
      { name: "Analog Communication Sessional", type: "lab" },
      { name: "Signal and Systems Sessional", type: "lab" },
      { name: "Sampling Distribution and Hypothesis Testing Sessional", type: "lab" },
    ],
  },
  {
    id: 5,
    name: "3rd Year 1st Semester",
    subjects: [
      { name: "Artificial Intelligence and Robotics", type: "theory" },
      { name: "Web Programming", type: "theory" },
      { name: "Database Management Systems", type: "theory" },
      { name: "Computer Architecture and Microcontroller Design", type: "theory" },
      { name: "Digital Signal Processing", type: "theory" },
      { name: "Artificial Intelligence and Robotics Sessional", type: "lab" },
      { name: "Web Programming Sessional", type: "lab" },
      { name: "Database Management Systems Sessional", type: "lab" },
      { name: "Digital Signal Processing", type: "lab" },
    ],
  },
  {
    id: 6,
    name: "3rd Year 2nd Semester",
    subjects: [
      { name: "Network Programming with Java", type: "theory" },
      { name: "Telecommunication Engineering", type: "theory" },
      { name: "Digital Communication", type: "theory" },
      { name: "Digital Image and Speech Processing", type: "theory" },
      { name: "Antenna Engineering", type: "theory" },
      { name: "Network Programming with Java Sessional", type: "lab" },
      { name: "Telecommunication Engineering Sessional", type: "lab" },
      { name: "Digital Communication Sessional", type: "lab" },
      { name: "Digital Image and Speech Processing Sessional", type: "lab" },
    ],
  },
  {
    id: 7,
    name: "4th Year 1st Semester",
    subjects: [
      { name: "Data Communication and Networking", type: "theory" },
      { name: "Cellular and Mobile Communication", type: "theory" },
      { name: "Information Theory and Coding", type: "theory" },
      { name: "Cryptography and Computer", type: "theory" },
      { name: "Optional-I", type: "theory" },
      { name: "Data Communication and Networking Sessional", type: "lab" },
      { name: "Cellular and Mobile Communication Sessional", type: "lab" },
      { name: "Information Theory and Coding Sessional", type: "lab" },
      { name: "Cryptography and Computer Sessional", type: "lab" },
    ],
  },
  {
    id: 8,
    name: "4th Year 2nd Semester",
    subjects: [
      { name: "Wireless Communication", type: "theory" },
      { name: "System Analysis and Software Testing", type: "theory" },
      { name: "Neural Networks", type: "theory" },
      { name: "Optinal-I", type: "theory" },
      { name: "Optional-III", type: "theory" },
      { name: "Wireless Communication Sessional", type: "lab" },
      { name: "System Analysis and Software Testing Sessional", type: "lab" },
      { name: "Neural Networks Sessional", type: "lab" },
      { name: "Optional-II", type: "lab" },
    ],
  },
];


import logo from './logo.jpg';

import cover1 from './Cover_1.jpg';
import cover2 from './Cover_2.jpg';
import cover3 from './Cover_3.jpg';
import cover4 from './Cover_4.jpg';

import Anwar_1 from './Anwar_1.jpg';
import MOF_2 from './MOF_2.jpg';
import Imran_3 from './Imran_3.jpg';
import Sarwar_4 from './Sarwar_4.jpg';
import Pallab_5 from './Pallab_5.jpg';
import Iffat_ara_6 from './Iffat_ara_6.jpg';
import Sohag_7 from './Sohag_7.jpg';
import Zainul_8 from './Zainul_8.jpg';
import Turna_9 from './Turna_9.jpg';
import Tofail_10 from './Tofail_10.jpg';
import Tarun_11 from './Tarun_11.jpg';
import Akif_12 from './Akif_12.jpg';

export const assets = {
  logo,
  coverImages: [cover1, cover2, cover3, cover4],
  teacherImages: [
    null,
    Anwar_1,
    MOF_2,
    Imran_3,
    Sarwar_4,
    Pallab_5,
    Iffat_ara_6,
    Sohag_7,
    Zainul_8,
    Turna_9,
    Tofail_10,
    Tarun_11,
    Akif_12
  ]
};
