import type {
  DashboardData,
  Roadmap,
  StudentProfile,
} from '../types';
import type { CareerAnalysisResult } from '../types/analysis';

// Default student profile used across pages
export const defaultProfile: StudentProfile = {
  fullName: 'Aarav Sharma',
  educationLevel: 'Undergraduate — 2nd Year, Computer Science',
  currentSkills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Problem Solving'],
  interests: ['Web Development', 'AI', 'Open Source', 'EdTech'],
  careerGoal: 'Full-Stack Developer',
};

// Mock AI-generated career analysis
// Fallback career analysis matching the CareerAnalysisResult type (used when no AI result is available)
export const careerAnalysis: CareerAnalysisResult = {
  careerPaths: [
    {
      title: 'Full-Stack Software Engineer',
      matchScore: 87,
      description: 'Builds end-to-end web applications using frontend and backend technologies. High demand across startups and enterprises.',
      demandLevel: 'High',
      averageSalary: '$75K – $130K entry-level',
    },
    {
      title: 'Frontend Developer',
      matchScore: 82,
      description: 'Specializes in building user interfaces with modern frameworks like React. Great entry point for new developers.',
      demandLevel: 'High',
      averageSalary: '$60K – $110K entry-level',
    },
    {
      title: 'Backend Developer',
      matchScore: 74,
      description: 'Focuses on server-side logic, APIs, and database architecture. Critical for any web application.',
      demandLevel: 'Growing',
      averageSalary: '$70K – $120K entry-level',
    },
  ],
  skillGapAnalysis: [
    { skill: 'React / Frontend Frameworks', currentLevel: 35, requiredLevel: 85, gap: 50, priority: 'High' },
    { skill: 'Node.js / Express', currentLevel: 15, requiredLevel: 80, gap: 65, priority: 'High' },
    { skill: 'Database Design (SQL)', currentLevel: 20, requiredLevel: 75, gap: 55, priority: 'High' },
    { skill: 'Cloud Deployment (AWS)', currentLevel: 5, requiredLevel: 60, gap: 55, priority: 'Medium' },
    { skill: 'TypeScript', currentLevel: 25, requiredLevel: 75, gap: 50, priority: 'Medium' },
    { skill: 'System Design', currentLevel: 10, requiredLevel: 65, gap: 55, priority: 'Medium' },
    { skill: 'Testing (Jest)', currentLevel: 0, requiredLevel: 55, gap: 55, priority: 'Low' },
    { skill: 'DevOps Basics (CI/CD)', currentLevel: 0, requiredLevel: 50, gap: 50, priority: 'Low' },
  ],
  roadmap30Days: [
    {
      title: 'React Fundamentals',
      skills: ['JSX', 'Components', 'Props', 'useState'],
      milestones: ['Build a todo app', 'Understand component lifecycle', 'Learn hooks'],
    },
    {
      title: 'Advanced React',
      skills: ['useEffect', 'Context API', 'React Router', 'Custom Hooks'],
      milestones: ['Build a multi-page app', 'Implement global state', 'Add routing'],
    },
    {
      title: 'TypeScript Basics',
      skills: ['Types', 'Interfaces', 'Generics'],
      milestones: ['Type a React app', 'Create typed API calls'],
    },
    {
      title: 'Node.js Introduction',
      skills: ['Express', 'REST APIs', 'Middleware'],
      milestones: ['Build a CRUD API', 'Add error handling'],
    },
  ],
  roadmap90Days: [
    {
      title: 'Frontend Mastery',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Testing'],
      milestones: ['Build a portfolio site', 'Write unit tests with Jest', 'Deploy to Vercel'],
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'JWT Auth'],
      milestones: ['Build a REST API with auth', 'Design a database schema', 'Add rate limiting'],
    },
    {
      title: 'Full-Stack Integration',
      skills: ['MERN Stack', 'Docker', 'CI/CD', 'AWS Basics'],
      milestones: ['Build a full-stack MERN app', 'Dockerize the app', 'Set up CI/CD pipeline'],
    },
  ],
  recommendedProjects: [
    {
      title: 'Personal Portfolio Website',
      description: 'Build a responsive portfolio showcasing your projects and skills using React and Tailwind CSS.',
      difficulty: 'Beginner',
    },
    {
      title: 'Task Management App',
      description: 'Create a full-stack CRUD app with user authentication, drag-and-drop, and a PostgreSQL database.',
      difficulty: 'Intermediate',
    },
    {
      title: 'Real-time Chat Application',
      description: 'Build a WebSocket-based chat app with rooms, typing indicators, and message history.',
      difficulty: 'Advanced',
    },
    {
      title: 'E-commerce API',
      description: 'Design and build a RESTful API for an e-commerce platform with cart, payments, and inventory.',
      difficulty: 'Advanced',
    },
  ],
  recommendedCertifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      provider: 'Amazon Web Services',
      relevance: 'Foundational cloud knowledge valued by employers hiring full-stack developers.',
    },
    {
      name: 'Meta Front-End Developer Professional Certificate',
      provider: 'Coursera / Meta',
      relevance: 'Industry-recognized credential covering React, UI design, and frontend best practices.',
    },
    {
      name: 'MongoDB Node.js Developer Path',
      provider: 'MongoDB University',
      relevance: 'Free certification proving proficiency with Node.js and NoSQL databases.',
    },
    {
      name: 'freeCodeCamp Full Stack Certification',
      provider: 'freeCodeCamp',
      relevance: 'Comprehensive free certification covering frontend, backend, and responsive design.',
    },
  ],
  careerAdvice:
    'Based on your strong foundation in JavaScript and problem-solving, a Full-Stack Software Engineer role is an excellent fit. Focus on mastering React and Node.js first — these form the backbone of modern web development. Build at least 3 portfolio projects that demonstrate full-stack capability. Contribute to open source to show collaboration skills. Practice system design fundamentals and prepare for technical interviews with daily coding challenges. The industry demand for full-stack developers is high and growing — with consistent effort over 6 months, you can be job-ready. Remember: the best time to start was yesterday, the next best time is today.',
};

// 6-month learning roadmap
export const roadmap: Roadmap = {
  totalMonths: 6,
  months: [
    {
      month: 1,
      title: 'Frontend Foundations with React',
      focus: 'Component architecture & state management',
      skills: ['React Components', 'Hooks', 'State Management', 'React Router'],
      milestones: [
        'Build a todo app with useState & useEffect',
        'Create a multi-page portfolio with React Router',
        'Understand component lifecycle and re-renders',
      ],
      resources: ['React Docs', 'freeCodeCamp React Course'],
      estimatedHours: 60,
      progress: 100,
      status: 'completed',
    },
    {
      month: 2,
      title: 'TypeScript & Advanced Frontend',
      focus: 'Type safety & scalable frontend architecture',
      skills: ['TypeScript', 'Interfaces & Types', 'Generics', 'Custom Hooks'],
      milestones: [
        'Migrate the todo app to TypeScript',
        'Build a reusable component library',
        'Implement form validation with typed schemas',
      ],
      resources: ['TypeScript Handbook', 'Total TypeScript'],
      estimatedHours: 55,
      progress: 100,
      status: 'completed',
    },
    {
      month: 3,
      title: 'Backend with Node.js & Express',
      focus: 'REST APIs, authentication & middleware',
      skills: ['Node.js', 'Express', 'JWT Auth', 'REST API Design'],
      milestones: [
        'Build a REST API with CRUD operations',
        'Implement JWT-based authentication',
        'Add rate limiting & error handling middleware',
      ],
      resources: ['The Odin Project', 'Node.js Docs'],
      estimatedHours: 65,
      progress: 65,
      status: 'in-progress',
    },
    {
      month: 4,
      title: 'Databases & Data Modeling',
      focus: 'Relational & NoSQL database design',
      skills: ['PostgreSQL', 'Data Modeling', 'Indexes', 'Query Optimization'],
      milestones: [
        'Design a normalized schema for an e-commerce app',
        'Write optimized queries with joins & indexes',
        'Connect Node.js backend to PostgreSQL',
      ],
      resources: ['PostgreSQL Tutorial', 'SQLBolt'],
      estimatedHours: 50,
      progress: 0,
      status: 'upcoming',
    },
    {
      month: 5,
      title: 'Cloud Deployment & DevOps',
      focus: 'AWS, Docker & CI/CD pipelines',
      skills: ['AWS EC2 & S3', 'Docker', 'GitHub Actions', 'Nginx'],
      milestones: [
        'Dockerize the full-stack application',
        'Set up a CI/CD pipeline with GitHub Actions',
        'Deploy to AWS EC2 with Nginx reverse proxy',
      ],
      resources: ['AWS Skill Builder', 'Docker Docs'],
      estimatedHours: 55,
      progress: 0,
      status: 'upcoming',
    },
    {
      month: 6,
      title: 'Capstone Project & Interview Prep',
      focus: 'Real-world project & job readiness',
      skills: ['System Design', 'Testing with Jest', 'Code Reviews', 'Interview Prep'],
      milestones: [
        'Build & deploy a complete MERN stack capstone project',
        'Write unit & integration tests with Jest',
        'Complete 30 mock interview questions',
      ],
      resources: ['Tech Interview Handbook', 'Jest Docs'],
      estimatedHours: 70,
      progress: 0,
      status: 'upcoming',
    },
  ],
};

// Progress dashboard data
export const dashboardData: DashboardData = {
  overallProgress: 44,
  skillsCompleted: 8,
  totalSkills: 18,
  learningStreak: 23,
  longestStreak: 31,
  weeklyGoalProgress: 72,
  skillsCompletedList: [
    { name: 'React Components', date: '2026-01-15', category: 'Frontend' },
    { name: 'React Hooks', date: '2026-01-22', category: 'Frontend' },
    { name: 'React Router', date: '2026-01-28', category: 'Frontend' },
    { name: 'State Management', date: '2026-02-05', category: 'Frontend' },
    { name: 'TypeScript Basics', date: '2026-02-12', category: 'Frontend' },
    { name: 'Interfaces & Types', date: '2026-02-18', category: 'Frontend' },
    { name: 'Generics', date: '2026-02-25', category: 'Frontend' },
    { name: 'Custom Hooks', date: '2026-03-02', category: 'Frontend' },
  ],
  upcomingTasks: [
    { id: 't1', title: 'Complete Express REST API module', category: 'Backend', dueDate: '2026-07-16', priority: 'High', completed: false },
    { id: 't2', title: 'Implement JWT authentication', category: 'Backend', dueDate: '2026-07-18', priority: 'High', completed: false },
    { id: 't3', title: 'Watch Node.js middleware tutorial', category: 'Backend', dueDate: '2026-07-20', priority: 'Medium', completed: false },
    { id: 't4', title: 'Submit weekly progress reflection', category: 'General', dueDate: '2026-07-21', priority: 'Low', completed: false },
    { id: 't5', title: 'Join community coding challenge', category: 'Community', dueDate: '2026-07-23', priority: 'Medium', completed: false },
  ],
  achievements: [
    { id: 'a1', title: 'First Steps', description: 'Completed your first skill module', icon: 'Footprints', earned: true, date: '2026-01-15' },
    { id: 'a2', title: 'React Warrior', description: 'Mastered all React fundamentals', icon: 'Atom', earned: true, date: '2026-01-28' },
    { id: 'a3', title: 'Type Safe', description: 'Completed TypeScript module', icon: 'ShieldCheck', earned: true, date: '2026-02-25' },
    { id: 'a4', title: 'On Fire', description: 'Maintained a 20+ day learning streak', icon: 'Flame', earned: true, date: '2026-07-10' },
    { id: 'a5', title: 'Backend Builder', description: 'Complete the Node.js module', icon: 'Server', earned: false },
    { id: 'a6', title: 'Cloud Pioneer', description: 'Deploy your first app to the cloud', icon: 'Cloud', earned: false },
    { id: 'a7', title: 'Capstone Champion', description: 'Finish the capstone project', icon: 'Trophy', earned: false },
    { id: 'a8', title: 'Mentor', description: 'Help 5 peers in the community', icon: 'HeartHandshake', earned: false },
  ],
  weeklyActivity: [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.0 },
    { day: 'Wed', hours: 1.5 },
    { day: 'Thu', hours: 4.0 },
    { day: 'Fri', hours: 2.0 },
    { day: 'Sat', hours: 3.5 },
    { day: 'Sun', hours: 1.0 },
  ],
};
