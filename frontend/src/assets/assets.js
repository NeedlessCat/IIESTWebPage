import fac1 from "./fac1.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";

export const images = [
  {
    id: 1,
    src: img1,
    alt: "Gallery Image 1",
    gridArea: "i1",
  },
  {
    id: 2,
    src: img2,
    alt: "Gallery Image 2",
    gridArea: "i2",
  },
  {
    id: 3,
    src: img3,
    alt: "Gallery Image 3",
    gridArea: "i3",
  },
  {
    id: 4,
    src: img4,
    alt: "Gallery Image 4",
    gridArea: "i4",
  },
  {
    id: 5,
    src: img5,
    alt: "Gallery Image 5",
    gridArea: "i5",
  },
  {
    id: 6,
    src: img6,
    alt: "Gallery Image 6",
    gridArea: "i6",
  },
  {
    id: 7,
    src: img7,
    alt: "Gallery Image 7",
    gridArea: "i7",
  },
  {
    id: 8,
    src: img6,
    alt: "Gallery Image 7",
    gridArea: "i6",
  },
  {
    id: 9,
    src: img5,
    alt: "Gallery Image 7",
    gridArea: "i6",
  },
  {
    id: 10,
    src: img4,
    alt: "Gallery Image 7",
    gridArea: "i6",
  },
  {
    id: 11,
    src: img3,
    alt: "Gallery Image 7",
    gridArea: "i6",
  },
];

export const facultyNews = [
  {
    title:
      "IIEST, Shibpur welcomes registrations from interested youths for 'Yuva Sangam Phase V'",
    date: "21/10/2024",
  },
  {
    title: "SWACHHATA HI SEVA AT IIEST,SHIBPUR",
    date: "26/09/2024",
  },
  {
    title:
      "BCC&I's 7th Education Conclave Explores How to Bridge Learning Gaps In Education System",
    date: "24/09/2024",
  },
  {
    title:
      "12 Faculty of IIEST, Shibpur have found a place in Elsevier Top 2% Researchers from India in 2024",
    date: "20/09/2024",
  },
];

export const alumniNews = [
  {
    title: `IIEST, Shibpur congratulates Ms. Gayatri Banerjee of Geo-informatics section in Mining Engineering Dept. on having been shortlisted for India's first "National Geospatial Research Fellowship (NGRF)" (Edition 1)!`,
    date: "15/10/2024",
  },
  {
    title:
      "12 Faculty Members of IIEST, Shibpur have found a place in Elsevier Top 2% Researchers from India in 2024",
    date: "10/10/2024",
  },
  {
    title:
      "Congratulations Sri Saikat Barman of VLSI Design Branch for the coveted achievement to participate in the 'Phase 3 of Indo-Taiwan Joint Research Program'",
    date: "05/10/2024",
  },
];

export const faculty = [
  {
    _id: "fac1",
    name: "Arindam Biswas",
    image: fac1,
    designation: "Professor",
    department: "Information Technology",
    experience: "4 Years",
    about: {
      intro:
        "Arindam Biswas graduated from Jadavpur University, Kolkata, India, and received his master's and doctorate degree both from the Indian Statistical Institute, Kolkata, India. He is currently Professor in the Department of Information Technology, Indian Institute of Engineering Science and Technology,  Shibpur,  India.  His research interests include digital geometry, image processing, approximate shape matching and analysis, medical image analysis, natural language processing, and biometrics.",
      academic: {
        line1: "Ph.D. (Indian Statistical Institute, Kolkata)",
        line2:
          "M. Tech. in Computer Science (Indian Statistical Institute, Kolkata)",
        line3: "B. E. (Jadavpur University)",
      },
      teaching: {
        line1: "Machine Learning",
        line2: "Data Structure and Algorithms",
      },
      research: {
        line1: "Digital Geometry",
        line2: "Image Analysis",
        line3: "Medical Image Analysis",
        line4: "Graph Neural Network",
      },
    },
    publication: {
      line1: {
        type: "Journal",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2024",
      },
      line2: {
        type: "Conference",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2023",
      },
      line3: {
        type: "Book",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2022",
      },
      line4: {
        type: "Conference",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2024",
      },
    },
    project: {
      line1: {
        topic:
          "A Foldscope Based Malaria Detection and Realtime Monitoring of Malaria outbreak",
        status: "Completed",
        year: "2022",
      },
      line2: {
        topic:
          "A Foldscope Based Malaria Detection and Realtime Monitoring of Malaria outbreak",
        status: "Completed",
        year: "2023",
      },
    },
    award: {
      line1: {
        title: "National Scholarship",
        year: "2024",
      },
      line2: {
        title: "National Scholarship",
        year: "2022",
      },
    },
    phone: "+91 33 26680525",
    email: "abiswas@it.iiests.ac.in",
  },
  {
    _id: "fac2",
    name: "Santi Prasad Maity",
    image: fac1,
    designation: "Professor",
    department: "Information Technology",
    experience: "4 Years",
    about: {
      intro:
        "Arindam Biswas graduated from Jadavpur University, Kolkata, India, and received his master's and doctorate degree both from the Indian Statistical Institute, Kolkata, India. He is currently Professor in the Department of Information Technology, Indian Institute of Engineering Science and Technology,  Shibpur,  India.  His research interests include digital geometry, image processing, approximate shape matching and analysis, medical image analysis, natural language processing, and biometrics.",
      academic: {
        line1: "Ph.D. (Indian Statistical Institute, Kolkata)",
        line2:
          "M. Tech. in Computer Science (Indian Statistical Institute, Kolkata)",
        line3: "B. E. (Jadavpur University)",
      },
      teaching: {
        line1: "Machine Learning",
        line2: "Data Structure and Algorithms",
      },
      research: {
        line1: "Digital Geometry",
        line2: "Image Analysis",
        line3: "Medical Image Analysis",
        line4: "Graph Neural Network",
      },
    },
    publication: {
      line1: {
        type: "Journal",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2024",
      },
      line2: {
        type: "Conference",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2023",
      },
      line3: {
        type: "Book",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2022",
      },
      line4: {
        type: "Conference",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2024",
      },
    },
    project: {
      line1: {
        topic:
          "A Foldscope Based Malaria Detection and Realtime Monitoring of Malaria outbreak",
        status: "Completed",
        year: "2022",
      },
      line2: {
        topic:
          "A Foldscope Based Malaria Detection and Realtime Monitoring of Malaria outbreak",
        status: "Completed",
        year: "2023",
      },
    },
    award: {
      line1: {
        title: "National Scholarship",
        year: "2024",
      },
      line2: {
        title: "National Scholarship",
        year: "2022",
      },
    },
    phone: "+91 33 26680525",
    email: "abiswas@it.iiests.ac.in",
  },
  {
    _id: "fac3",
    name: "Prashun Ghosal",
    image: fac1,
    designation: "Professor",
    department: "Information Technology",
    experience: "4 Years",
    about: {
      intro:
        "Arindam Biswas graduated from Jadavpur University, Kolkata, India, and received his master's and doctorate degree both from the Indian Statistical Institute, Kolkata, India. He is currently Professor in the Department of Information Technology, Indian Institute of Engineering Science and Technology,  Shibpur,  India.  His research interests include digital geometry, image processing, approximate shape matching and analysis, medical image analysis, natural language processing, and biometrics.",
      academic: {
        line1: "Ph.D. (Indian Statistical Institute, Kolkata)",
        line2:
          "M. Tech. in Computer Science (Indian Statistical Institute, Kolkata)",
        line3: "B. E. (Jadavpur University)",
      },
      teaching: {
        line1: "Machine Learning",
        line2: "Data Structure and Algorithms",
      },
      research: {
        line1: "Digital Geometry",
        line2: "Image Analysis",
        line3: "Medical Image Analysis",
        line4: "Graph Neural Network",
      },
    },
    publication: {
      line1: {
        type: "Journal",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2024",
      },
      line2: {
        type: "Conference",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2023",
      },
      line3: {
        type: "Book",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2022",
      },
      line4: {
        type: "Conference",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2024",
      },
    },
    project: {
      line1: {
        topic:
          "A Foldscope Based Malaria Detection and Realtime Monitoring of Malaria outbreak",
        status: "Completed",
        year: "2022",
      },
      line2: {
        topic:
          "A Foldscope Based Malaria Detection and Realtime Monitoring of Malaria outbreak",
        status: "Completed",
        year: "2023",
      },
    },
    award: {
      line1: {
        title: "National Scholarship",
        year: "2024",
      },
      line2: {
        title: "National Scholarship",
        year: "2022",
      },
    },
    phone: "+91 33 26680525",
    email: "abiswas@it.iiests.ac.in",
  },
  {
    _id: "fac4",
    name: "Inderjeet Baneerjee",
    image: fac1,
    designation: "Professor",
    department: "Information Technology",
    experience: "4 Years",
    about: {
      intro:
        "Arindam Biswas graduated from Jadavpur University, Kolkata, India, and received his master's and doctorate degree both from the Indian Statistical Institute, Kolkata, India. He is currently Professor in the Department of Information Technology, Indian Institute of Engineering Science and Technology,  Shibpur,  India.  His research interests include digital geometry, image processing, approximate shape matching and analysis, medical image analysis, natural language processing, and biometrics.",
      academic: {
        line1: "Ph.D. (Indian Statistical Institute, Kolkata)",
        line2:
          "M. Tech. in Computer Science (Indian Statistical Institute, Kolkata)",
        line3: "B. E. (Jadavpur University)",
      },
      teaching: {
        line1: "Machine Learning",
        line2: "Data Structure and Algorithms",
      },
      research: {
        line1: "Digital Geometry",
        line2: "Image Analysis",
        line3: "Medical Image Analysis",
        line4: "Graph Neural Network",
      },
    },
    publication: {
      line1: {
        type: "Journal",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2024",
      },
      line2: {
        type: "Conference",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2023",
      },
      line3: {
        type: "Book",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2022",
      },
      line4: {
        type: "Conference",
        team: "Pritam Bikram; Shubhajyoti Das; Arindam Biswas",
        topic:
          "Dynamic attention aggregated missing spatial-temporal data imputation for traffic speed prediction, Neurocomputing, 2024-08 | Journal article DOI: 10.1016/j.neucom.2024.128441",
        year: "2024",
      },
    },
    project: {
      line1: {
        topic:
          "A Foldscope Based Malaria Detection and Realtime Monitoring of Malaria outbreak",
        status: "Completed",
        year: "2022",
      },
      line2: {
        topic:
          "A Foldscope Based Malaria Detection and Realtime Monitoring of Malaria outbreak",
        status: "Completed",
        year: "2023",
      },
    },
    award: {
      line1: {
        title: "National Scholarship",
        year: "2024",
      },
      line2: {
        title: "National Scholarship",
        year: "2022",
      },
    },
    phone: "+91 33 26680525",
    email: "abiswas@it.iiests.ac.in",
  },
];
