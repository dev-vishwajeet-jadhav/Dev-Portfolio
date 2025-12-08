export type Project = {
  slug: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "employee-management-system",
    title: "Employee Management System",
    role: "Frontend Engineer",
    period: "2023",
    summary:
      "Web-based platform to create, update, and track employee records with a clean, responsive UI.",
    description:
      "Built an employee management system that lets HR teams manage employee records, roles, and status from a single dashboard. Focused on clarity, validation, and a responsive layout for day-to-day operations.",
    tech: ["Angular", "TypeScript", "HTML5", "CSS3"],
    highlights: [
      "Implemented CRUD flows with form validation and clear feedback states.",
      "Designed mobile-first layouts for consistent behavior across devices.",
      "Deployed as a static Angular app for quick access and easy hosting.",
    ],
    live: "https://dev-vishwajeet-jadhav.github.io/employee-management-system-in-Angular-/",
  },
  {
    slug: "resume-optimizer",
    title: "Resume Optimizer (AI-Assisted)",
    role: "Full-Stack Developer",
    period: "2024",
    summary:
      "Tool that uses an OpenAI-powered backend to analyze and optimize resumes against job descriptions.",
    description:
      "Developed an AI-assisted resume optimizer that takes a candidate CV and job description, then surfaces tailored suggestions, keyword gaps, and improved summaries. Designed for job seekers who want fast, targeted improvements without losing their own voice.",
    tech: ["React", "Node.js", "OpenAI API", "JavaScript", "HTML5", "CSS3"],
    highlights: [
      "Integrated OpenAI APIs to generate structured, context-aware recommendations.",
      "Implemented a focused UX that keeps user data on screen and easy to compare.",
      "Added basic analytics to understand how users iterate on their resumes.",
    ],
  },
  {
    slug: "admission-iq",
    title: "Admission IQ – AI-ML College Recommendation",
    role: "Full-Stack Developer",
    period: "2023",
    summary:
      "AI-ML powered platform that recommends colleges based on student preferences and academic profile.",
    description:
      "Built an AI-ML powered web application that helps students discover suitable colleges using their academic scores, preferences, and constraints. Combined classic ML models with a simple, guided UI to make research less overwhelming.",
    tech: ["Django", "Python", "JavaScript", "HTML5", "CSS3", "ML (KNN, Decision Trees, Regression)"],
    highlights: [
      "Integrated hybrid ML models (KNN, decision trees, linear regression) to improve recommendation accuracy.",
      "Used by 200+ students and recognised in academic tech fests for practical impact.",
      "Designed forms and result views that surface key trade-offs clearly.",
    ],
  },
  {
    slug: "skillsync-mentorship-platform",
    title: "SkillSync – Learning & Mentorship Platform",
    role: "MERN Stack Developer",
    period: "2023",
    summary:
      "Peer-to-peer mentorship platform that connects learners and mentors for 1:1 sessions.",
    description:
      "Created a peer-to-peer learning platform where users can register as learners or mentors, book 1:1 sessions, and exchange resources. Emphasis on clear flows for scheduling, messaging, and feedback.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Firebase Auth"],
    highlights: [
      "Implemented Firebase authentication with learner/mentor roles.",
      "Built real-time messaging and session tracking to keep context in one place.",
      "Encouraged 500+ learners to connect with mentors across multiple skill areas.",
    ],
  },
  {
    slug: "ecommerce-application",
    title: "E-Commerce Application",
    role: "Full-Stack Developer",
    period: "2022",
    summary:
      "E-commerce web application with product catalogue, cart, search, and order simulation.",
    description:
      "Developed an e-commerce application that supports product browsing, search filters, cart management, and simulated checkout flows. Focused on predictable state management and testable, modular components.",
    tech: ["React", "Node.js", "MySQL", "ng-bootstrap", "Jasmine", "Karma"],
    highlights: [
      "Implemented dynamic product listing and real-time cart updates.",
      "Designed mobile-first layouts to keep the buying journey consistent.",
      "Added unit and E2E tests with Jasmine and Karma reaching ~70% coverage.",
    ],
  },
  {
    slug: "applicant-tracking-system",
    title: "Applicant Tracking System (ATS)",
    role: "Frontend Engineer",
    period: "2022",
    summary:
      "Candidate management interface that streamlines profile review and workflow for recruiters.",
    description:
      "Contributed to a recruitment-focused ATS front end, building interfaces for candidate profiles, status tracking, and filters. Optimized layouts so recruiters can move through candidates with less friction.",
    tech: ["React", "ng-bootstrap", "Jasmine", "Karma"],
    highlights: [
      "Improved candidate profile management flows, reducing friction for recruiters.",
      "Worked closely with QA to maintain zero-regression standards.",
      "Helped improve workflow efficiency by roughly 30% for pilot users.",
    ],
  },
];
