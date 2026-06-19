export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  tags: string[];
  githubUrl: string;
  githubUrlSecond?: string;
  deployedLink: string;
  keyContributions: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ConnectLive",
    subtitle: "Real-Time Audio & Video Collaboration Platform",
    description:
      "A full-featured WebRTC communication platform enabling seamless audio, video, screen sharing, and real-time collaboration experiences.",
    overview:
      "A modern real-time communication application built with LiveKit and React, designed for remote collaboration. Users can join virtual rooms, configure media devices before joining, communicate through integrated chat, share their screens, and switch between multiple video layouts. The platform features responsive design, participant presence notifications, and customizable light/dark themes for an enhanced user experience.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "LiveKit",
      "WebRTC",
      "Tailwind CSS",
      "Material-UI",
    ],
    githubUrl: "https://github.com/Samyam-Stha/Audio-Video-Web",
    deployedLink: "https://audio-video-web.vercel.app/",
    keyContributions: [
      "Implemented responsive multi-view layouts with grid and focus modes using LiveKit React components.",
      "Built custom media controls for microphone, camera, and screen sharing with real-time state synchronization.",
      "Developed an integrated chat system with participant join/leave notifications using React Toastify.",
      "Designed application-wide light and dark theme switching using React Context API.",
      "Structured the application with modular components, React Router, TypeScript strict mode, and Vite for scalability and maintainability.",
    ],
  },
  {
    id: 2,
    title: "RecipeHub PWA",
    subtitle: "Offline-First Recipe Discovery & Management App",
    description:
      "A modern recipe discovery and management web application built with SvelteKit 5, featuring offline support, PWA capabilities, and full CRUD recipe management using IndexedDB and TheMealDB API.",

    overview:
      "RecipeHub is a Progressive Web App built using SvelteKit 5 that allows users to discover recipes from TheMealDB API, create and store custom recipes, and manage saved favorites offline. The application is installable across devices and leverages service workers with Workbox for intelligent caching strategies. It features a fully component-driven architecture, reactive state management using Svelte stores, and a seamless offline-first user experience powered by IndexedDB.",

    tags: [
      "SvelteKit",
      "TypeScript",
      "Tailwind CSS",
      "PWA",
      "IndexedDB",
      "Workbox",
      "Vite",
      "Axios",
      "shadcn-svelte",
    ],

    githubUrl: "https://github.com/Samyam-Stha/Recipe-Web-App",
    deployedLink: "https://recipe-web-app-beryl-seven.vercel.app/",

    keyContributions: [
      "Built a full-featured recipe discovery system integrating TheMealDB API with real-time search, category filtering, cuisine-based filtering, and responsive grid layouts with skeleton loading states.",

      "Developed a complete offline-first data persistence layer using IndexedDB, including custom Promise-based CRUD utilities for storing user-created recipes and saved bookmarks without external libraries.",

      "Implemented a Progressive Web App (PWA) architecture using @vite-pwa/sveltekit and Workbox, enabling installability, offline access, and advanced caching strategies such as StaleWhileRevalidate for API data and CacheFirst for images.",

      "Designed dynamic recipe creation workflows with form-based inputs, including image upload via FileReader API (Base64 conversion), dynamic ingredient management, and structured recipe storage.",

      "Engineered global state management using Svelte stores for meals, categories, filters, and user data, ensuring reactive UI updates across pages without prop drilling.",

      "Created a data transformation layer to normalize TheMealDB API structure into a clean, usable format by converting flat ingredient fields into structured arrays and consistent recipe objects.",

      "Built a modular, component-driven architecture with isolated feature folders, reusable UI components (shadcn-svelte, bits-ui), and consistent design patterns across pages.",
    ],
  },
  {
    id: 3,
    title: "Bikri Bagaicha",
    subtitle: "Vendor–Farmer Marketplace & Bidding Platform",
    description:
      "A full-stack mobile marketplace application that connects farmers and vendors for direct trading of agricultural products through a real-time bidding system.",

    overview:
      "Bikri Bagaicha is a MERN-based mobile application designed to bridge the gap between farmers and vendors by enabling direct agricultural product trading. The platform introduces a bidding mechanism where farmers list crops with desired prices and vendors place competitive bids. Built collaboratively under a tight 48-hour hackathon timeline, the system emphasizes fast decision-making, role-based access control, and efficient CRUD operations through a RESTful backend API.",

    tags: [
      "MongoDB",
      "Express.js",
      "React Native",
      "Node.js",
      "REST API",
      "JWT (optional if used)",
      "Mobile App",
    ],

    githubUrl: "https://github.com/Samyam-Stha/Bigri-Bagaicha",
    deployedLink: "",

    keyContributions: [
      "Designed and developed a full-stack mobile marketplace application using the MERN stack to connect farmers and vendors for direct agricultural trade.",

      "Implemented a real-time bidding system where farmers list crops with expected prices and vendors place competitive bids, enabling farmers to select the most profitable offers.",

      "Developed role-based authentication and authorization to differentiate user experiences for farmers and vendors, ensuring secure and controlled access to platform features.",

      "Built and integrated RESTful backend APIs using Node.js and Express.js to support full CRUD operations for products, bids, and user management.",

      "Collaborated with team members to deliver a fully functional prototype within 48 hours under hackathon constraints, ensuring rapid development and feature prioritization.",

      "Identified and addressed real-world agricultural market inefficiencies by reducing dependency on intermediaries and improving direct farmer–vendor communication.",

      "Focused on responsive mobile UI design using React Native, ensuring usability across different device sizes and smooth user interactions.",
    ],
  },
  {
    id: 4,
    title: "FinTrack",
    subtitle: "Personal Finance Management & Analytics Platform",
    description:
      "A full-stack personal finance management application that helps users track transactions, manage budgets, monitor savings goals, and gain actionable financial insights through interactive analytics dashboards.",

    overview:
      "FinTrack is a modern single-page application built with React and Vite that enables users to manage their personal finances through secure authentication, intelligent budgeting tools, savings tracking, and data-driven analytics. The platform features JWT-based authentication, interactive financial visualizations, dark mode support, responsive layouts, and performance optimizations including API caching, skeleton loading states, and parallel data fetching.",

    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Recharts",
      "Axios",
      "React Router",
      "JWT",
      "Vercel",
    ],

    githubUrl: "https://github.com/Samyam-Stha/FinTrackFE",
    githubUrlSecond: "https://github.com/Samyam-Stha/FinTrackBE",
    deployedLink: "https://fin-track-fe1.vercel.app/",

    keyContributions: [
      "Engineered a secure authentication system using JWT with client-side token expiration validation, protected routes, browser back-button prevention, email verification via 6-digit OTP, password recovery workflows, and persistent session management using localStorage.",

      "Designed and implemented a centralized API layer with Axios interceptors to automatically attach authentication tokens, standardize error handling, and organize analytics services, reducing code duplication and simplifying communication with the deployed backend.",

      "Developed an intelligent budgeting module featuring automatic budget allocation based on monthly income, category-wise budget forecasting, safe daily spending calculations, monthly budget archiving, inline budget editing, progress tracking with dynamic visual indicators, and automated month-change detection.",

      "Built interactive financial analytics dashboards using Recharts, including income versus expense trend analysis, expense distribution visualizations, budget comparison reports, savings contribution breakdowns, and categorized spending alerts with configurable daily, weekly, monthly, and yearly views.",

      "Implemented performance optimization strategies through localStorage-based dashboard caching, parallel data fetching with Promise.all, memoization using useMemo and useCallback, skeleton loading states, and selective component re-rendering to improve responsiveness and reduce unnecessary API requests.",

      "Created a responsive and accessible user experience using Tailwind CSS v4 and Radix UI components, incorporating persistent dark mode, mobile-friendly navigation with overlay menus, reusable modal and filter patterns, and consistent state-driven UI interactions across the application.",
    ],
  },

  {
    id: 5,
    title: "Personal Portfolio Website",
    subtitle: "Interactive Developer Portfolio & Project Showcase",
    description:
      "A fully responsive personal portfolio website showcasing projects, experience, certifications, and technical skills with interactive UI components and smooth animations.",

    overview:
      "A modern single-page portfolio application built using React 19, TypeScript, and Tailwind CSS to present professional projects, work experience, and certifications in a highly interactive and visually engaging format. The application features a modular component-based architecture, centralized data management, and reusable UI patterns including modals, carousels, and animated timelines for an enhanced user experience.",

    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX",
      "Component Architecture",
    ],

    githubUrl: "https://github.com/Samyam-Stha/Samyam-Shrestha-Portfolio",
    deployedLink: "https://samyam-shrestha-portfolio.vercel.app/",

    keyContributions: [
      "Designed and developed a fully responsive personal portfolio website using React 19, TypeScript, and Tailwind CSS with a modular component-based architecture for scalability and maintainability.",

      "Implemented a custom project carousel without external libraries, supporting adaptive slide counts (1/2/3 based on viewport) with smooth translateX animations and dot-based navigation.",

      "Built an animated work experience timeline featuring vertical connectors, hover-based scaling effects, and structured role-based data visualization for improved readability.",

      "Developed a reusable expand modal system that dynamically displays detailed project and experience information, decoupled from parent components using callback-based state management.",

      "Implemented persistent dark/light mode functionality using a floating toggle button with global state control via document root class manipulation, fully compatible with Tailwind dark mode.",

      "Created a fully typed centralized data layer using TypeScript interfaces for projects, experience, and certifications, ensuring consistent and type-safe content management across the application.",

      "Optimized responsiveness and performance using window resize listeners with requestAnimationFrame-based index clamping to maintain carousel stability across breakpoints.",
    ],
  },
];

export interface JobRole {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];

  subtitle: string;
  overview: string;
  keyContributions: string[];
  challenges?: string;
}

export const EXPERIENCE_DATA: JobRole[] = [
  {
    id: 1,
    title: "Frontend Development Trainee",
    company: "Smart Idea Pvt. Ltd. Affiliated with HamroPatro Inc.",
    duration: "Apr 2026 - Present",
    location: "Sifal, Kathmandu, Nepal",
    keyContributions: [
      "Served as the sole frontend developer for the Football CMS platform, leading frontend development from scratch.",
      "Designed and developed responsive interfaces for managing football-related content, matches, teams, players, standings, and statistics.",
      "Built reusable and scalable React components to improve maintainability and development efficiency.",
      "Integrated REST APIs and implemented state management solutions for complex data-driven workflows.",
      "Collaborated closely with backend developers to deliver production-ready features and ensure seamless frontend-backend integration.",
      "Contributed to Chautari, a real-time audio/video conferencing platform built with LiveKit WebRTC.",
      "Implemented new features, optimized existing functionality, and improved overall user experience within the conferencing application.",
      "Worked on real-time communication features, media controls, participant management, and screen-sharing related workflows.",
      "Enhanced application performance, responsiveness, and code quality through refactoring and optimization.",
      "Participated in debugging, testing, code reviews, and Agile development processes.",
    ],
    skills: [
      "React JS",
      "SvelteKit",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "LiveKit WebRTC",
      "Git",
      "BitBucket",
    ],
    subtitle: "Smart Idea Pvt. Ltd. / HamroPatro Inc.",
    overview:
      "Promoted from Frontend Development Intern to Trainee and entrusted with ownership of the frontend development of the Football CMS platform while contributing to Chautari, a real-time audio/video conferencing application. Responsible for building scalable user interfaces, integrating APIs, managing application state, and delivering production-ready features.",
    description: [
      "Led frontend development of the Football CMS platform as the sole frontend developer.",
      "Built the CMS frontend architecture from scratch using React and TypeScript.",
      "Developed reusable UI components and responsive layouts for content and match management workflows.",
      "Integrated backend APIs and implemented efficient state management for complex application modules.",
      "Contributed to feature development and performance improvements for the Chautari video conferencing platform.",
      "Collaborated with backend developers to deliver scalable and maintainable production applications.",
    ],
  },
  {
    id: 2,
    title: "Frontend Development Intern",
    company: "Smart Idea Pvt. Ltd. Affiliated with HamroPatro Inc.",
    duration: "Jan 2026 - Mar 2026",
    location: "Sifal, Kathmandu, Nepal",

    keyContributions: [
      "Learned and applied modern frontend technologies including React, SvelteKit, Tailwind CSS, Shadcn UI, Material UI, REST APIs, Progressive Web Apps (PWA), and LiveKit WebRTC.",
      "Developed multiple frontend applications to strengthen understanding of modern web development concepts and best practices.",
      "Built a ToDo application and browser-based card game using HTML, CSS, and JavaScript.",
      "Explored React, SvelteKit, and Next.js, gaining experience with component-based architecture and modern frontend workflows.",
      "Developed a Recipe Application using SvelteKit, Tailwind CSS, and Shadcn UI with responsive design and REST API integration.",
      "Integrated external APIs using Axios and implemented CRUD functionality for dynamic content management.",
      "Created wireframes and UI designs using Figma before implementation.",
      "Built a real-time audio/video conferencing application using React and LiveKit WebRTC.",
      "Implemented chat functionality, one-to-one messaging, message reactions, and responsive chat interfaces.",
      "Explored and implemented Progressive Web App (PWA) features including service workers, caching strategies, and offline support.",
      "Analyzed and studied the architecture, workflows, and codebase of a production-level company project.",
      "Implemented CSV export functionality, fixed existing UI issues, and improved cross-browser compatibility.",
      "Refactored dashboard interfaces and improved state management using stores and context-based solutions.",
      "Translated Figma designs into responsive and production-ready user interfaces.",
    ],

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "SvelteKit",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "Axios",
      "REST APIs",
      "LiveKit WebRTC",
      "PWA",
      "Figma",
      "Git",
    ],

    subtitle: "Engineering Department – Frontend Team",

    overview:
      "Completed a three-month frontend development internship focused on learning modern web technologies and applying them through real-world projects. Worked on multiple applications ranging from basic JavaScript projects to API-driven applications, real-time communication systems, Progressive Web Apps, and production-level company projects.",

    description: [
      "Developed a Recipe Application with API integration, responsive design, and CRUD functionality.",
      "Built a real-time audio/video conferencing application using LiveKit WebRTC with chat and messaging features.",
      "Implemented Progressive Web App (PWA) functionality including offline support and caching strategies.",
      "Contributed to a production codebase by implementing CSV export functionality and resolving UI issues.",
      "Refactored dashboard interfaces and improved state management using modern frontend patterns.",
      "Gained hands-on experience with React, SvelteKit, REST APIs, responsive design, and frontend architecture.",
    ],
  },
];
