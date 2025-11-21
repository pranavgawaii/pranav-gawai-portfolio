import { ProfileData, ExperienceItem, ProjectItem, EducationItem, LeadershipItem } from './types';
import { Github, Linkedin, Mail, ExternalLink, Twitter } from 'lucide-react';
import React from 'react';

export const PROFILE: ProfileData = {
  name: "Pranav Gawai",
  title: "Full Stack Engineer",
  location: "Pune, MH",
  bio: "Third-year Computer Science student passionate about building scalable web applications and solving real-world problems through technology. Experienced in full-stack development with React, TypeScript, and Node.js, with hands-on expertise in API design and database optimization. Won 1st place at Cybersecurity Hackathon 2025 and secured Top 10 position among 800+ teams at Smart India Hackathon 2025.",
  socials: [
    { name: "Email", url: "mailto:pranavgawai1518@gmail.com", icon: "mail" },
    { name: "LinkedIn", url: "https://linkedin.com/in/pranavgawai", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/pranavgawaii", icon: "github" },
  ],
  skills: [
    { name: "Languages", skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML5", "CSS3"] },
    { name: "Frameworks", skills: ["React", "Node.js", "Express.js", "Django", "Flask", "Next.js", "Socket.io", "Tailwind CSS"] },
    { name: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { name: "AI & ML", skills: ["GPT-4", "Google Gemini API", "HuggingFace", "LangChain", "RAG"] },
    { name: "Tools", skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Linux/Unix", "Figma"] },
    { name: "Core Skills", skills: ["RESTful APIs", "WebSocket", "System Architecture", "Encryption (AES-256, JWT)"] },
  ]
};

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    institution: "MIT-ADT University",
    degree: "Bachelor of Technology in Computer Science and Engineering (AI)",
    period: "Aug 2023 – Jun 2027",
    location: "Pune, Maharashtra"
  },
  {
    id: "edu-2",
    institution: "Maharashtra State Board",
    degree: "Higher Secondary (12th): 85.33%",
    period: "",
    location: "Jalna, Maharashtra",
    details: ["Secondary School (10th): 84.80%"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Development Intern",
    company: "Yes Boss Technology Pvt. Ltd.",
    period: "Jun 2025 – Sep 2025",
    type: "Internship",
    location: "Pune, MH",
    description: [
      "Engineered REST APIs using Django and PostgreSQL with GPT-4 and DALL-E integrations.",
      "Built analytics dashboard with logs, tracking, and CSV export; optimized API latency by 30%.",
      "Worked in Agile sprints and contributed to GitHub reviews and workflow maintenance."
    ],
    techStack: ["Django", "PostgreSQL", "GPT-4", "Agile"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "MedSecure24",
    description: "Developed encrypted live vitals system using AES-256, JWT, and Socket.io with sub-2s latency. Delivered complete security architecture, threat model, and functional prototype in 24 hours.",
    techStack: ["React", "Node.js", "PostgreSQL", "AES-256", "Socket.io"],
    github: "https://github.com/pranavgawaii",
    status: "Winner"
  },
  {
    id: "proj-2",
    title: "Sahara",
    description: "Built accessible WCAG 2.1-compliant platform with Google OAuth and real-time messaging. Integrated multilingual Gemini AI chatbot with voice features serving 200+ active users.",
    techStack: ["React", "TypeScript", "Node.js", "Gemini API"],
    github: "https://github.com/pranavgawaii",
    status: "Top 10"
  },
  {
    id: "proj-3",
    title: "Post Genius",
    description: "Automated Facebook/Twitter post scheduling via Graph APIs. Engineered analytics dashboard and improved performance by 40% through query optimization.",
    techStack: ["Django", "React", "PostgreSQL", "Graph APIs"],
    github: "https://github.com/pranavgawaii",
  }
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    id: "lead-1",
    title: "1st Place Winner",
    role: "24-Hour Cybersecurity Hackathon 2025 (MedSecure24)",
    description: ""
  },
  {
    id: "lead-2",
    title: "Placement Coordinator - Core Team",
    role: "MIT-ADT University",
    description: "Coordinated campus recruitment with 50+ companies and organized training workshops for 1200+ students."
  },
  {
    id: "lead-3",
    title: "Top 10 Finalist",
    role: "Smart India Hackathon 2025 among 800+ teams (Sahara)",
    description: ""
  },
  {
    id: "lead-4",
    title: "GitHub Foundations Certification",
    role: "Score: 83/100",
    description: ""
  },
  {
    id: "lead-5",
    title: "NPTEL Certification",
    role: "Design and Analysis of Algorithms",
    description: ""
  },
  {
    id: "lead-6",
    title: "LinkedIn Learning",
    role: "React.js Development Path Certificate",
    description: ""
  }
];

export const ICONS_MAP: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  external: ExternalLink,
  twitter: Twitter
};