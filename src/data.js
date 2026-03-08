/**
 * data.js — Central data file for the portfolio
 *
 * All content (projects, skills, nav links, social links, about info)
 * lives here so components stay clean and content is easy to update.
 */

// Navigation links — id must match the section id for smooth scrolling
export const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

// Social profile links
export const socialLinks = {
  github: "https://github.com/liner14",
  linkedin: "https://linkedin.com/in/akash",
};

// About section content
export const aboutInfo = {
  title: "About Me",
  bio: `I'm a passionate frontend developer who loves crafting beautiful, 
  performant, and accessible web experiences. With a strong focus on modern 
  JavaScript frameworks, clean UI design, and smooth animations, I build 
  applications that are both visually stunning and highly functional. 
  When I'm not coding, I'm exploring new technologies and building 
  open-source projects.`,
  highlights: [
    "Frontend Developer specialising in React & JavaScript",
    "Proficient in Material UI, Framer Motion & modern CSS",
    "Strong focus on UI/UX design and smooth animations",
    "Open source enthusiast — check out my GitHub @liner14",
  ],
};

// Hero section content
export const heroInfo = {
  greeting: "Hello, I'm",
  name: "Akash",
  role: "Frontend Developer",
  roles: [
    "Frontend Developer",
    "React Enthusiast",
    "UI/UX Craftsman",
    "Open Source Builder",
  ],
  tagline:
    "I craft pixel-perfect, animated web applications with React, Material UI, and modern technologies.",
  cta: "View My Work",
  resumeUrl: "/resume.pdf",
};

// Projects data — real projects from github.com/liner14
export const projects = [
  {
    id: 1,
    title: "Smart To-Do",
    description:
      "A sleek, modern To-Do List & Task Manager built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies. Features a stunning glassmorphism UI, dark/light theme toggle, drag-and-drop reordering, priority levels, and persistent local storage.",
    techStack: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    github: "https://github.com/liner14/Smart-To-Do",
    demo: "https://github.com/liner14/Smart-To-Do",
    image: null,
    color: "from-violet-500 to-purple-600",
    featured: true,
  },
  {
    id: 2,
    title: "ShopWave — E-Commerce",
    description:
      "🛍️ A sleek, responsive mini e-commerce frontend built with React, Material UI, and Framer Motion. Features a modern product grid, cart functionality, smooth page transitions, and a polished shopping experience.",
    techStack: ["React", "Material UI", "Framer Motion", "JavaScript"],
    github: "https://github.com/liner14/E-commerce",
    demo: "https://github.com/liner14/E-commerce",
    image: null,
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "🚀 My personal developer portfolio — built with React 19, Vite, Material UI (MUI v6) & Framer Motion. Ships with a typewriter hero animation, animated gradient orbs, MUI AppBar + mobile Drawer navbar, filterable project cards with Chip tags, gradient LinearProgress skill bars, persistent dark/light theme, and an MUI TextField contact form. Hosted on GitHub at liner14/Portfolio.",
    techStack: ["React", "Vite", "Tailwind CSS", "MUI", "Framer Motion"],
    github: "https://github.com/liner14/Portfolio",
    demo: "https://github.com/liner14/Portfolio",
    image: null,
    color: "from-emerald-500 to-teal-500",
    featured: false,
  },
];

// Skills data — grouped by category with proficiency percentages
export const skills = {
  Frontend: [
    { name: "React", level: 88 },
    { name: "JavaScript", level: 90 },
    { name: "HTML & CSS", level: 95 },
    { name: "Material UI", level: 82 },
    { name: "Framer Motion", level: 78 },
    { name: "Tailwind CSS", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 70 },
    { name: "REST APIs", level: 80 },
    { name: "LocalStorage / Web APIs", level: 88 },
    { name: "Git & GitHub", level: 90 },
  ],
  Tools: [
    { name: "Vite", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 68 },
    { name: "npm / package management", level: 85 },
    { name: "Responsive Design", level: 90 },
  ],
};

// Unique tech tags extracted from all projects (used for filter tabs)
export const allTechTags = [
  "All",
  ...new Set(projects.flatMap((p) => p.techStack)),
];
