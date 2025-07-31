// src/data/profiles.js

import { assets } from "../assets/assets";

export const profiles = [
  {
    id: 1,
    name: "Professor Md. Anwar Hossain",
    image: assets.teacherImages[1], // Ensure you have assets.teacherImages[1] defined
    designation: "Professor, Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: "+8801717330923",
      officePhone: "+8802588845644",
      officeEmail: "manwar.ice@pust.ac.bd",
      personalEmail: "manwar.ice@gmail.com"
    },
    education: [
      {
        degree: "Master of Philosophy (M.Phil.)",
        year: "2020",
        department: "Information and Communication Engineering (ICE)",
        institution: "Pabna University of Science and Technology, Pabna, Bangladesh"
      },
      {
        degree: "Master of Science (M.Sc.)",
        year: "2006",
        department: "Information and Communication Engineering (ICE)",
        institution: "University of Rajshahi, Rajshahi, Bangladesh"
      },
      {
        degree: "Bachelor of Science (B.Sc. Hons.)",
        year: "2005",
        department: "Information and Communication Engineering (ICE)",
        institution: "University of Rajshahi, Rajshahi, Bangladesh"
      },
      {
        degree: "Higher Secondary School (HSC) Examination",
        year: "2000",
        result: "First Division",
        institution: "Govt. Shahid Bulbul College, Pabna, Bangladesh"
      },
      {
        degree: "Secondary School Certificate (SSC) Examination",
        year: "1998",
        result: "First Division (star mark)",
        institution: "Raninagor Bil Gazna High School, Aminpur, Pabna, Bangladesh"
      }
    ],
    researchInterests: [
      "Image Processing",
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence"
    ],
    publications: {
      totalPublications: 43,
      journalArticles: 35,
      bookChapters: 1,
      conferenceProceedings: 7,
      selectedJournalArticles: [
        {
          title: "Enhanced plant health monitoring with dual head CNN for leaf classification and disease identification",
          authors: "Sajeeb Kumar Ray, Md. Anwar Hossain, Naima Islam, Mirza A.F.M. Rashidul Hasan",
          journal: "Journal of Agriculture and Food Research",
          volume: "21",
          year: "2025"
        },
        {
          title: "Distributed denial-of-service attack detection short review: issues, challenges, and recommendations",
          authors: "Ahasan Habib, A., Imtiaz, A., Tripura, D., Omar Faruk, M., Anwar Hossain, M., Ara, I., Sarker, S., & Zainul Abadin, A.",
          journal: "Bulletin of Electrical Engineering and Informatics",
          volume: "14(1)",
          year: "2025"
        },
        {
          title: "A Cross-Platform Vehicle Tracking System for Pabna University of Science and Technology with Android and Web Interfaces",
          authors: "Md. Kawsar Ahmed, Md. Ariful Islam, Md. Asif Iqbal, and Md. Anwar Hossain",
          journal: "International Journal of Imminent Science & Technology",
          volume: "2(1)",
          year: "2024"
        },
        {
          title: "Bangla handwritten word recognition using YOLO V5",
          authors: "Md. Anwar Hossain, AFM Zainul Abadin, Md. Omar Faruk, Iffat Ara, Mirza AFM Rashidul Hasan, Nafiul Fatta, Md. Asraful, & Ebrahim Hossen",
          journal: "Bulletin of Electrical Engineering and Informatics (BEEI)",
          volume: "13 No. 3",
          year: "2024"
        },
        {
          title: "Enhanced human activity recognition through deep multi-layer perceptron on the UCI-HAR dataset",
          authors: "Md. Anwar Hossain, Sajeeb Kumar Ray, Naima Islam, Alamin Alamin, Mirza AFM Rashidul Hasan",
          journal: "International Journal of Advances in Applied Sciences",
          volume: "13, No. 2",
          year: "2024"
        },
        {
          title: "Automatic Bangla Image Captioning Based on Transformer Model in Deep Learning",
          authors: "Md. Anwar Hossain, Mirza AFM Rashidul Hasan, Ebrahim Hossen, Md Asraful, Md. Omar Faruk, AFM Zainul Abadin and Md. Suhag Ali",
          journal: "International Journal of Advanced Computer Science and Applications(IJACSA)",
          volume: "14(11)",
          year: "2023"
        },
        {
          title: "Handwritten Bengali Alphabets, Compound Characters and Numerals Recognition Using a CNN-based Approach",
          authors: "Md Asraful, Md. Anwar Hossain and Ebrahim Hossen",
          journal: "Annals of Emerging Technologies in Computing (AETiC)",
          volume: "7, No. 3",
          year: "2023"
        },
        {
          title: "Study and prediction of covid-19 cases and vaccinations using machine learning in Bangladesh",
          authors: "Md. Anwar Hossain, Ebrahim Hossen, and Md. Asraful",
          journal: "Aust. J. Eng. Innov. Technol.",
          volume: "4 No. 6",
          year: "2022"
        },
        {
          title: "Performance Analysis of Deep Learning based Human Activity Recognition Methods",
          authors: "Aktter, M. F., Hossain, M. A., Sarker, S., Abadin, A. Z., & Hasan, M. A. R.",
          journal: "Journal of Applied Science & Process Engineering",
          volume: "9(2)",
          year: "2022"
        },
        {
          title: "Students performance measurement and prediction based on academic features through the machine learning",
          authors: "Pal AK, Sumona S, Rashid MA, Hasan MAFMR, Kumar M and Hossain MA.",
          journal: "Aust. J. Eng. Innov. Technol.",
          volume: "4(4)",
          year: "2022"
        },
        {
          title: "Bangla handwritten characters recognition using convolutional neural network",
          authors: "Hossain MA, Hasan MAFMR, Abadin AFMZ, and Fatta N.",
          journal: "Aust. J. Eng. Innov. Technol.",
          volume: "4(2)",
          year: "2022"
        },
        {
          title: "Handwritten Bangla Numerical Digit Recognition Using Fine Regulated Deep Neural Network",
          authors: "Hossain, M. S., Hossain, M. A., Abadin, A. Z., & Ahmed, M. M.",
          journal: "Engineering International",
          volume: "9(2)",
          year: "2021"
        },
        {
          title: "Activity Identification from Natural Images Using Deep CNN",
          authors: "Hossain M.A., Hasan M.A.F.M.R.",
          journal: "Intelligent Computing and Optimization. ICO 2020. Advances in Intelligent Systems and Computing, vol 1324. Springer, Cham.",
          year: "2021"
        },
        {
          title: "Big data analysis using bigquery on cloud computing platform",
          authors: "Ali MH, Hosain MS, and Hossain MA.",
          journal: "Aust. J. Eng. Innov. Technol.",
          volume: "3(1)",
          year: "2021"
        },
        {
          title: "Brain Tumor Location Identification and Patient Observation from MRI Images",
          authors: "Hossain MA, Abadin AFMZ, Ahmed MM.",
          journal: "Journal of Image Processing and Artificial Intelligence",
          volume: "7(1)",
          year: "2021"
        },
        {
          title: "Performance Comparison of EIGRP, OSPF and RIP Routing Protocols using Cisco Packet Tracer and OPNET Simulator",
          authors: "Md. Anwar Hossain, Md. Mohon Ali, Mst. Sharmin Akter, Md. Shahriar Alam Sajib",
          journal: "Global Journal of Computer Science and Technology, Interdisciplinary",
          volume: "20(2)",
          year: "2020"
        },
        {
          title: "Implementation of Back Propagation Neural Network with PCA for Face Recognition",
          authors: "Md. Manik Ahmed, Md. Anwar Hossain, AFM Zainul Abadin",
          journal: "Global Journal of Computer Science and Technology, Interdisciplinary",
          volume: "19(3)",
          year: "2019"
        },
        {
          title: "Simulation and Design of University Area Network Scenario (UANS) using Cisco Packet Tracer",
          authors: "Md. Anwar Hossain, Mahabuba Zannat",
          journal: "Global Journal of Computer Science and Technology, Interdisciplinary",
          volume: "19(3)",
          year: "2019"
        },
        {
          title: "Study and Optimized Simulation of OSPFv3 Routing Protocol in IPv6 Network",
          authors: "Md. Anwar Hossain, Mst. Sharmin Akter",
          journal: "Global Journal of Computer Science and Technology Network, Web & Security",
          volume: "19(2)",
          year: "2019"
        },
        {
          title: "PWM based Android Controlled Smart Wheelchair",
          authors: "Tarun Debnath, AFM Zainul Abadin, Md. Anwar Hossain",
          journal: "International Journal of Computer Science & Information Technology (IJCSIT)",
          volume: "10, No 2",
          year: "2018"
        },
        {
          title: "Android Controlled Smart Wheelchair for Disabilities",
          authors: "Tarun Debnath, AFM Zainul Abadin, Md. Anwar Hossain",
          journal: "Global Journal of Computer Science and Technology Network, Interdisciplinary",
          volume: "18 Issue 1 Version 1.0",
          year: "2018"
        },
        {
          title: "Downlink Scheduling in Long Term Evolution",
          authors: "Md. Anwar Hossain, AFM Zainul Abadin",
          journal: "International Journal of Engineering Research",
          volume: "4, Issue 6",
          year: "2015"
        },
        {
          title: "Methodology to Achieve Enhanced Data Transmission Rate using Li-Fi in VLC Technology",
          authors: "Md. Shahadat Hossain, Md. Samiul Islam, AFM Zainul Abadin, Md. Anwar Hossain",
          journal: "International Journal of Engineering Research",
          volume: "3, Issue 12",
          year: "2014"
        },
        {
          title: "Performance Analysis of TCP Tahoe, Reno, New Reno, Sack and Vegas using NS-2",
          authors: "AFM Zainul Abadin, Md. Anwar Hossain, Muntasir Ahmed, Purno Mohon Ghosh",
          journal: "Global Journal of Computer Science and Technology Network, Web & Security",
          volume: "13 Issue 16 Version 1.0",
          year: "2013"
        },
        {
          title: "Performance Evaluation of a Space Time Trellis Coded MIMO-OFDM Wireless Communication System",
          authors: "AFM Zainul Abadin, Md. Anwar Hossain, Muntasir Ahmed, Purno Mohon Ghosh",
          journal: "International Journal of Scientific Engineering and Technology",
          volume: "2, Issue 12",
          year: "2013"
        },
        {
          title: "Enhancing Transmission Capacity of a Cognitive Radio Network by Joint Spatial-Temporal Sensing with Cooperative Communication Strategy",
          authors: "Muntasir Ahmed, Md. Anwar Hossain, A F M Zainul Abadin, Purno Mohon Ghosh",
          journal: "Global Journal of Computer Science and Technology Network, Web & Security",
          volume: "13 Issue 2 Version 1.0",
          year: "2013"
        },
        {
          title: "BER Performance Evaluation of a Cooperative Wireless Communication System with CDMA Implementation of Fixed Relaying Protocols",
          authors: "Muntasir Ahmed, Md. Anwar Hossain, A F M Zainul Abadin, Purno Mohon Ghosh",
          journal: "Global Journal of Computer Science and Technology Network, Web & Security",
          volume: "13 Issue 1 Version 1.0",
          year: "2013"
        },
        {
          title: "Comparison Among Different Large Scale Path Loss Models for High Sites in Urban, Suburban and Rural Areas",
          authors: "Purno Mohon Ghosh, Md. Anwar Hossain, A.F.M. Zainul Abadin, Kallol Krishna Karmakar",
          journal: "International Journal of Soft Computing and Engineering (IJSCE)",
          volume: "2, Issue 2",
          year: "2012"
        },
        {
          title: "Challenging Issues of Spatio-Temporal Data Mining",
          authors: "A.N.M. Bazlur Rashid, Md. Anwar Hossain",
          journal: "Journal of Computer Engineering and Intelligent Systems",
          volume: "3, No.4",
          year: "2012"
        },
        {
          title: "Performance Evaluation of MPEG-4 Video Transmission over IP-Networks: Best-Effort and Quality-of-Service",
          authors: "Md. Anwar Hossain, A.N.M. Bazlur Rashid",
          journal: "Journal of Computer Engineering and Intelligent Systems",
          volume: "3, No.3",
          year: "2012"
        }
      ],
      selectedConferenceProceedings: [
        {
          title: "Deep Learning Based Lung Image Segmentation Using XR-U-Net",
          authors: "S. K. Ray et al.",
          conference: "2024 27th International Conference on Computer and Information Technology (ICCIT)",
          location: "Cox's Bazar, Bangladesh",
          year: "2024"
        },
        {
          title: "Enhanced Prediction of Type-2 Diabetes Mellitus Using an Integrated Ensemble Framework (IEF)",
          authors: "M. Rashed, M. I. Hossain and M. A. Hossain",
          conference: "2024 27th International Conference on Computer and Information Technology (ICCIT)",
          location: "Cox's Bazar, Bangladesh",
          year: "2024"
        },
        {
          title: "Enhanced Prediction of Type-2 Diabetes Mellitus Using an Integrated Ensemble Framework (IEF)",
          authors: "M. Rashed, M. I. Hossain and M. A. Hossain",
          conference: "2024 27th International Conference on Computer and Information Technology (ICCIT)",
          location: "Cox's Bazar, Bangladesh",
          year: "2024"
        },
        {
          title: "Vehicle Classification and Detection Using YOLOv8: A Study on Highway Traffic Analysis",
          authors: "N. Islam, S. K. Ray, M. A. Hossain, M. A. Rashidul Hasan, Alamin and M. B. Al Zabir Shammo",
          conference: "2024 International Conference on Recent Progresses in Science, Engineering and Technology (ICRPSET)",
          location: "Rajshahi, Bangladesh",
          year: "2024"
        },
        {
          title: "Embedded Systems-Based AC Device Controller",
          authors: "Alamin, S. K. Ray, M. A. Hossain, M. A. R. Hasan, N. Islam and M. M. A. Hossain",
          conference: "2024 International Conference on Recent Progresses in Science, Engineering and Technology (ICRPSET)",
          location: "Rajshahi, Bangladesh",
          year: "2024"
        },
        {
          title: "Generating Bangla Image Captions with Deep Learning Techniques",
          authors: "M. A. Hossain, M. A. R. Hasan, S. K. Ray and N. Islam",
          conference: "2024 6th International Conference on Sustainable Technologies for Industry 5.0 (STI)",
          location: "Narayanganj, Bangladesh",
          year: "2024"
        },
        {
          title: "Activity Identification from Natural Images Using Deep CNN",
          authors: "Hossain, M.A., Hasan, M.A.F.M.R.",
          conference: "Intelligent Computing and Optimization. ICO 2020. Advances in Intelligent Systems and Computing, vol 1324. Springer, Cham.",
          year: "2021"
        },
        {
          title: "Performance Analysis of TCP Tahoe, Reno, New Reno, Sack and Vegas using NS-2",
          authors: "Md. Azizur Rahman, Md. Anwar Hossain",
          conference: "National Conference on Electronics, Information and Telecommunication",
          date: "29-30 June 2007",
          organizer: "Bangladesh"
        }
      ],
    }
  },

  {
    id: 2,
    name: "Dr. Md. Omar Faruk",
    image: assets.teacherImages[2], // assets.teacherImages[2], // Placeholder, add actual image asset
    designation: "Associate Professor, Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: "+8801712415335",
      officePhone: null,
      officeEmail: "fom_06@pust.ac.bd",
      personalEmail: "fom_06@yahoo.com"
    },
    education: [
      {
        degree: "Ph.D.",
        year: "2012",
        institution: "University of Rajshahi, Rajshahi, Bangladesh"
      },
      {
        degree: "Master of Science (M.Sc.)",
        year: "1996",
        institution: "University of Rajshahi, Rajshahi, Bangladesh"
      }
    ],
    researchInterests: [
      "Signal Processing",
      "IoT (Internet of Things)",
      "Seismology"
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        {
          title: "Drought index for the region experiencing low seasonal rainfall: an application to northwestern Bangladesh",
          authors: "Faruq, M.O., Ahsan, M.R., Hassan, M.B.",
          journal: "Journal of Bangladesh Academy of Sciences",
          volume: "46(1)",
          year: "2022"
        },
        {
          title: "IOT BASED SMART IRRIGATION SYSTEM BY EXPLOITING DISTRIBUTED SENSO-RIAL NETWORK",
          authors: "Sarkar, S., Faruk, M.O., Ara, I., Hossain, S., Abadin, A.Z.",
          journal: "Engineering International",
          volume: "9(2)",
          year: "2021"
        },
        {
          title: "An IoT Based Water Quality Testing Device: An Approach to Modelling a Geographical Map Based on Water Quality Data and Decision Support System",
          authors: "Sarker, S., Faruk, M.O., Ara, I., Abadin, A.Z., Hossain, M.A.",
          journal: "Journal of Image Processing and Artificial Intelligence",
          volume: "7(1)",
          year: "2021"
        },
        {
          title: "Analysis of fiber loss mechanisms in communication system to simulate different attenuation",
          authors: "Faruk, M. O., & Abadin, A. F. M. Z.",
          journal: "International Journal of Engineering and Technology (UAE)",
          volume: "7(4)",
          year: "2019"
        },
        {
          title: "Seismic status in Bangladesh",
          authors: "Faruk, M. O., & Ahsan, M. R.",
          journal: "Journal of Bangladesh Academy of Sciences",
          volume: "42(1)",
          year: "2018"
        },
        {
          title: "Group velocity dispersion analysis in northern Peninsular Malaysia",
          authors: "Faruk, M. O., & Ahsan, M. R.",
          journal: "Journal of Bangladesh Academy of Sciences",
          volume: "40(1)",
          year: "2016"
        },
        {
          title: "Analysis of India-Nepal Border Region Earthquake Wave for Studying the Layering Information of the Crust",
          authors: "Faruk, M.O., Ahsan, M.R., Hasan, M.B.",
          journal: "Journal of Bangladesh Academy of Sciences",
          volume: "40(1)",
          year: "2016"
        },
        {
          title: "Estimation of Coda Wave Attenuation Quality Factor from Seismogram of Local Earthquake",
          authors: "Faruk, M.O., Ahsan, M.R.",
          journal: "Journal of Bangladesh Academy of Sciences",
          volume: "40(1)",
          year: "2016"
        },
        {
          title: "Group Velocity Dispersion Analysis of Daluchari Chittagong Earthquake for Studying the Crustal Thickness",
          authors: "Faruk, M.O., Ahsan, M.R., Hasan, M.B.",
          journal: "Journal of Bangladesh Academy of Sciences",
          volume: "35(2)",
          year: "2011"
        }
      ],
      selectedConferenceProceedings: []
    }
  },

  {
    id: 3,
    name: "Dr. Md. Imran Hossain",
    image: assets.teacherImages[3], // assets.teacherImages[3], // Placeholder, add actual image asset
    designation: "Associate Professor, Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: "+8801759320341",
      officePhone: null,
      officeEmail: "imran05ice@pust.ac.bd",
      personalEmail: "imran05ice@gmail.com"
    },
    education: [
      {
        degree: "Ph.D. in Information and Communication Engineering",
        year: "2022",
        institution: "University of Science and Technology of China (USTC), Hefei, Anhui, China",
        researchField: "Signal and Information Processing"
      },
      {
        degree: "M.Sc. in Information and Communication Engineering",
        year: "2010",
        institution: "Islamic University (IU), Kushtia, Bangladesh"
      },
      {
        degree: "B.Sc. in Information and Communication Engineering",
        year: "2009",
        institution: "Islamic University (IU), Kushtia, Bangladesh"
      },
      {
        degree: "Higher Secondary School Certificate (HSC)",
        year: "2005",
        institution: "Govt. Satkhira College, Satkhira, Bangladesh"
      },
      {
        degree: "Secondary School Certificate (SSC)",
        year: "2003",
        institution: "Kadakati Arar Secondary School, Satkhira, Bangladesh"
      }
    ],
    researchInterests: [
      "AI and Deep Learning",
      "Digital Speech Processing / Speech Processing",
      "Biomedical Signal and Image Processing",
      "Computer Vision and Image Processing"
    ],
    publications: {
      totalPublications: ">15 (International Journal)",
      journalArticles: null, // Needs to be counted from list
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        {
          title: "ARAFNet: An Attribute Refinement Attention Fusion Network for Advanced Visual Captioning",
          authors: "Md. Imran Hossain et al.", // More specific authors if available
          journal: "Digital Signal Processing",
          year: "2025"
        },
        {
          title: "Lung cancer detection and classification using LeNet-LSTM model on computed tomography images",
          authors: "Md. Imran Hossain et al.", // More specific authors if available
          journal: "Multidisciplinary Science Journal",
          year: "2025"
        },
        {
          title: "GVA: guided visual attention approach for automatic image caption generation",
          authors: "Md. Imran Hossain et al.", // More specific authors if available
          journal: "Multimedia Systems",
          year: "2024"
        },
        {
          title: "Supervised single channel dual domains speech enhancement using sparse non-negative matrix factorization",
          authors: "Md. Imran Hossain et al.", // More specific authors if available
          journal: "Digital Signal Processing",
          year: "2020"
        },
        {
          title: "Dual-transform source separation using sparse nonnegative matrix factorization",
          authors: "Md. Imran Hossain et al.", // More specific authors if available
          journal: "Circuits, Systems, and Signal Processing",
          year: "2021"
        },
        {
          title: "Dual transform based joint learning single channel speech separation using generative joint dictionary learning",
          authors: "Md. Imran Hossain et al.", // More specific authors if available
          journal: "Multimedia Tools and Applications",
          year: "2022"
        },
        {
          title: "Improving energy efficient clustering method for wireless sensor network",
          authors: "Md. Imran Hossain et al.", // More specific authors if available
          journal: "International Journal of Information Technology and Computer Science",
          year: "2013"
        }
      ],
      selectedConferenceProceedings: [
        {
          title: "A deep neural framework for image caption generation using gru-based attention mechanism",
          authors: "Md. Imran Hossain et al.", // More specific authors if available
          conference: "arXiv preprint", // Not a traditional conference, but a pre-print server
          year: "2022"
        }
      ]
    }
  },

  {
    id: 5,
    name: "Dr. Pallab Kanti Podder",
    image: assets.teacherImages[5], // assets.teacherImages[4], // Placeholder, add actual image asset
    designation: "Associate Professor (On study leave), Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: null,
      officePhone: null,
      officeEmail: null,
      personalEmail: null // Try to find
    },
    education: [
      // Add detailed education info when available
      {
        degree: "Ph.D.", // Add institution and year if known
        year: null,
        institution: null
      },
      {
        degree: "M.Sc.", // Add institution and year if known
        year: null,
        institution: null
      },
      {
        degree: "B.Sc.", // Add institution and year if known
        year: null,
        institution: null
      }
    ],
    researchInterests: [
      // Add research interests when available
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        // Add selected publications when available
      ],
      selectedConferenceProceedings: []
    }
  },

  {
    id: 6,
    name: "Iffat Ara",
    image: assets.teacherImages[6], // assets.teacherImages[5], // Placeholder, add actual image asset
    designation: "Associate Professor (On study leave), Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: null,
      officePhone: null,
      officeEmail: null,
      personalEmail: null // Try to find
    },
    education: [
      // Add detailed education info when available
    ],
    researchInterests: [
      // Add research interests when available
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        // Add selected publications when available
      ],
      selectedConferenceProceedings: []
    }
  },

  {
    id: 7,
    name: "Sohag Sarker",
    image: assets.teacherImages[7], // assets.teacherImages[6], // Placeholder, add actual image asset
    designation: "Associate Professor, Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: null,
      officePhone: null,
      officeEmail: null,
      personalEmail: null // Try to find
    },
    education: [
      // Add detailed education info when available
    ],
    researchInterests: [
      // Add research interests when available
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        // Add selected publications when available
      ],
      selectedConferenceProceedings: []
    }
  },

  {
    id: 4,
    name: "Dr. Md. Sarwar Hosain",
    image: assets.teacherImages[4], // assets.teacherImages[7], // Placeholder, add actual image asset
    designation: "Associate Professor, Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: null,
      officePhone: null,
      officeEmail: null,
      personalEmail: null // Try to find
    },
    education: [
      // Add detailed education info when available
    ],
    researchInterests: [
      // Add research interests when available
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        // Add selected publications when available
      ],
      selectedConferenceProceedings: []
    }
  },

  {
    id: 8,
    name: "Abul Fazal Mohammad Zainul Abadin",
    image: assets.teacherImages[8], // assets.teacherImages[8], // Placeholder, add actual image asset
    designation: "Associate Professor (On study leave), Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: null,
      officePhone: null,
      officeEmail: null,
      personalEmail: null // Try to find
    },
    education: [
      // Add detailed education info when available
    ],
    researchInterests: [
      // Add research interests when available
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        // Add selected publications when available
      ],
      selectedConferenceProceedings: []
    }
  },

  {
    id: 9,
    name: "Taskin Noor Turna",
    image: assets.teacherImages[9], // assets.teacherImages[9], // Placeholder, add actual image asset
    designation: "Assistant Professor, Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: null,
      officePhone: null,
      officeEmail: null,
      personalEmail: null // Try to find
    },
    education: [
      // Add detailed education info when available
    ],
    researchInterests: [
      // Add research interests when available
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        // Add selected publications when available
      ],
      selectedConferenceProceedings: []
    }
  },

  {
    id: 10,
    name: "Md. Tofail Ahmed",
    image: assets.teacherImages[10], // assets.teacherImages[10], // Placeholder, add actual image asset
    designation: "Assistant Professor (On study leave), Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: null,
      officePhone: null,
      officeEmail: null,
      personalEmail: null // Try to find
    },
    education: [
      // Add detailed education info when available
    ],
    researchInterests: [
      // Add research interests when available
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        // Add selected publications when available
      ],
      selectedConferenceProceedings: []
    }
  },

  {
    id: 11,
    name: "Tarun Debnath",
    image: assets.teacherImages[11], // assets.teacherImages[11], // Placeholder, add actual image asset
    designation: "Assistant Professor, Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: null,
      officePhone: null,
      officeEmail: null,
      personalEmail: null // Try to find
    },
    education: [
      // Add detailed education info when available
    ],
    researchInterests: [
      // Add research interests when available
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        // Add selected publications when available
      ],
      selectedConferenceProceedings: []
    }
  },

  {
    id: 12,
    name: "Akif Mahdi",
    image: assets.teacherImages[12], // assets.teacherImages[12], // Placeholder, add actual image asset
    designation: "Lecturer, Department of Information and Communication Engineering",
    contactInfo: {
      personalPhone: null,
      officePhone: null,
      officeEmail: null,
      personalEmail: null // Try to find
    },
    education: [
      // Add detailed education info when available
    ],
    researchInterests: [
      // Add research interests when available
    ],
    publications: {
      totalPublications: null,
      journalArticles: null,
      bookChapters: null,
      conferenceProceedings: null,
      selectedJournalArticles: [
        // Add selected publications when available
      ],
      selectedConferenceProceedings: []
    }
  }

  // Add more profiles here as you gather information
];