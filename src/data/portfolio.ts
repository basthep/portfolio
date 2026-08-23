export const personal = {
  name: 'Abdul Basith',
  role: 'Full Stack Developer',
  tagline: 'I build scalable web applications and delightful user experiences.',
  email: 'abdulbasitherayampattil@gmail.com',
  location: 'Kochi, Kerala',
  resumeUrl: '#',
  github: 'https://github.com/basthep',
  linkedin: 'https://linkedin.com/in/abdul-basith-abb1802a3',
  twitter: '#',
  bio: `I'm a full stack developer specializing in the MERN stack — MongoDB, Express, React, and Node.js. I build end-to-end web applications from database design to polished user interfaces, turning ideas into clean, maintainable products. I'm passionate about writing code that's both functional and a joy to work with.`,
  stats: [
    { label: 'Years Experience', value: '1' },
    { label: 'Projects Built', value: '10+' },
    { label: 'Technologies', value: '15+' }, 
  ],
};

export const skills = [
  { category: 'Frontend', icon: 'Layout', items: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'] },
  { category: 'Backend', icon: 'Server', items: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'Socket.IO', 'GraphQL'] },
  { category: 'Database', icon: 'Cloud', items: ['MongoDB', 'Mongoose', 'Firebase' , 'PostgreSQL', 'Indexes'] },
  { category: 'Tools & Practices', icon: 'Wrench', items: ['Git', 'GitHub', 'AWS', 'Postman', 'Vite', 'Vercel','Sequelize'] },
];

export const projects = [
  {
    title: 'E-Commerce Web Application',
    description:
      'A full-stack e-commerce web application built with the MERN stack, using PostgreSQL as the database and Redux for state management. Includes product browsing, cart management, authentication, and order functionality.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Redux'],
    github: 'https://github.com/basthep/ShopCo', 
    image: '/projects/ecommerce.png',
    featured: true,
  },

  {
    title: 'Employee Tracking System',
    description:
      'An employee management system built using the MERN stack with MongoDB. Provides employee management, authentication, salary management, leave management, attendance tracking, and administrative functionality.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/basthep/Employee-Management-Frontend.git', 
    image: '/projects/employee-management.png',
    featured: true,
  },

  {
    title: 'Food Ordering Web-App',
    description:
      'A full-stack food ordering web application built with the MERN stack, featuring restaurant and food management, cart functionality, order processing, and Razorpay payment gateway integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    github: 'https://github.com/basthep/food-del',
    live: 'https://food-del-frontend-h8mz.onrender.com/',
    image: '/projects/food-ordering.png',
    featured: true,
  },

  {
    title: 'Expense Tracker',
    description:
      'A simple full-stack expense tracking application built using the MERN stack for managing and tracking personal expenses.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/basthep/expense-tracker.git', 
    image: '/projects/expense-tracker.png',
    featured: false,
  },

  {
    title: 'Tic Tac Toe',
    description:
      'A simple interactive Tic Tac Toe game built with React, featuring game state management and a responsive user interface.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/basthep/Tic-Tac-Toe', 
    image: '/projects/tic-tac-toe.png',
    featured: false,
  },

  {
    title: 'POS System',
    description:
      'A point-of-sale system designed to manage products, sales, transactions, and day-to-day business operations.',
    tech: ['Html', 'Javascript', 'CSS' ],
    github: 'https://github.com/basthep/pos.git', 
    image: '/projects/pos.png',
    featured: false,
  },
];

export const experience = [
  {
    role: 'Full Stack Developer Trainee',
    company: 'Upcode Software Labs',
    period: '2026 — Present',
    description:
      'Working as a Full Stack Developer Trainee, gaining hands-on experience in developing web applications using modern frontend and backend technologies.',
    highlights: [
      'Developing full-stack web applications',
      'Working with React, Node.js, and backend APIs',
      'Building responsive and user-friendly interfaces',
    ],
  },

  {
    role: 'Apprentice',
    company: 'NPOL — DRDO, Kochi',
    period: '2025 — 2026',
    description:
      'Worked as an apprentice at the Naval Physical and Oceanographic Laboratory (NPOL), DRDO, contributing to software development activities using C++ and Qt Creator in a professional R&D environment.',
    highlights: [
      'Worked with C++ for software development',
      'Used Qt Creator for application development and debugging',
      'Contributed to ongoing software development activities',
      'Gained experience working in a professional R&D environment',
    ],
  },

  {
    role: 'Full Stack Developer Intern',
    company: 'Exposys Data Labs',
    period: 'Apr 2025 — Jun 2025',
    description:
      'Worked remotely as a Full Stack Developer Intern, gaining practical experience in developing web applications and working with frontend and backend technologies.',
    highlights: [
      'Developed full-stack web application features',
      'Worked with frontend and backend technologies',
      'Collaborated remotely on development tasks',
    ],
  },
];

export const education = [
  {
    type: 'education',
    degree: 'PG Diploma in Data Science',
    school: 'Central University of Tamil Nadu',
    period: '2024 — 2025',
    description:
      'Postgraduate diploma focused on data science, machine learning, data analysis, and related computational techniques.',
  },
  {
    type: 'education',
    degree: 'B.Sc. Computer Science',
    school: 'Majlis Arts and Science College',
    period: '2021 — 2024',
    description:
      'Undergraduate degree in Computer Science with a foundation in programming, software development, databases, and computer science fundamentals.',
  },
  {
    type: 'certification',
    degree: 'Responsive Web Design',
    school: 'freeCodeCamp',
    period: '2025',
    description:
      'Certification covering responsive web design, HTML, CSS, accessibility, and modern web development fundamentals.',
  },
  {
    type: 'certification',
    degree: 'JavaScript Algorithms and Data Structures',
    school: 'freeCodeCamp',
    period: '2025',
    description:
      'Certification covering JavaScript fundamentals, algorithms, data structures, object-oriented programming, and functional programming.',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
