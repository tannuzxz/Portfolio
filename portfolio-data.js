// Portfolio Data

// User profile data
const userProfile = {
  name: "Tannu sharma",
  title: "Full stack Developer",
  intro: "I build modern, responsive web applications with a focus on clean code and exceptional user experiences. Specializing in React, Tailwind CSS, and modern JavaScript.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  yearsExperience: 5,
  location: "San Francisco, CA",
  email: "contact@example.com",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

// Skills data
const skills = [
  // Frontend skills
  { id: 1, name: "React", category: "Frontend Development", proficiency: 90 },
  { id: 2, name: "JavaScript/TypeScript", category: "Frontend Development", proficiency: 85 },
  { id: 3, name: "HTML/CSS", category: "Frontend Development", proficiency: 95 },
  { id: 4, name: "Tailwind CSS", category: "Frontend Development", proficiency: 92 },
  
  // Backend skills
  { id: 5, name: "Node.js", category: "Backend Development", proficiency: 80 },
  { id: 6, name: "Express", category: "Backend Development", proficiency: 78 },
  { id: 7, name: "MongoDB", category: "Backend Development", proficiency: 75 },
  { id: 8, name: "PostgreSQL", category: "Backend Development", proficiency: 70 },
  
  // Tools & other skills
  { id: 9, name: "Git/GitHub", category: "Tools & Others", proficiency: 88 },
  { id: 10, name: "Docker", category: "Tools & Others", proficiency: 65 },
  { id: 11, name: "AWS", category: "Tools & Others", proficiency: 60 },
  { id: 12, name: "Figma/Design", category: "Tools & Others", proficiency: 75 }
];

// Projects data
const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order processing.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Web-based Code Editor",
    description: "A browser-based code editor with syntax highlighting, multiple themes, and real-time collaboration features.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    category: "Frontend",
    tags: ["React", "WebSockets", "CodeMirror"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and health metrics with visualized progress.",
    imageUrl: "https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Mobile",
    tags: ["React Native", "GraphQL", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "RESTful API Service",
    description: "A scalable RESTful API service with authentication, rate limiting, and comprehensive documentation.",
    imageUrl: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    category: "Backend",
    tags: ["Node.js", "Express", "PostgreSQL", "Swagger"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

// Experience data
const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2020 - Present",
    description: "Led the development of multiple web applications, mentored junior developers, and implemented best practices for accessibility and performance.",
    isActive: true,
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "WebSolutions",
    period: "2018 - 2020",
    description: "Developed responsive web applications, collaborated with design and backend teams, and improved website performance metrics.",
    isActive: false,
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Digital Agency",
    period: "2016 - 2018",
    description: "Created websites for clients across various industries, learned modern web development practices, and collaborated with cross-functional teams.",
    isActive: false,
  }
];