// src/data/resumeData.ts
export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  phone: "+1 (123) 456-7890",
  location: "Meerut, India",
  website: "yourportfolio.com",
  summary: "Experienced web developer with expertise in React, Next.js, and Node.js..."
};

export const experience = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    location: "Remote",
    period: "Jan 2023 - Present",
    description: "Developed and maintained responsive web applications using React and Next.js...",
    achievements: [
      "Improved site performance by 40% through optimization techniques",
      "Led a team of 4 developers for major feature releases",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  // More experience entries...
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University Name",
    location: "City, Country",
    period: "2018 - 2022",
    achievements: ["Graduated with honors", "Specialized in web technologies"]
  },
  // More education entries...
];

export const skills = {
  technical: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "MongoDB", "AWS"],
  soft: ["Communication", "Leadership", "Problem Solving", "Teamwork"]
};

export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, shopping cart, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    url: "https://example.com"
  },
  // More projects...
];