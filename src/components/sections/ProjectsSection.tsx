"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define TypeScript interface for project data
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  link?: string;
  github?: string;
}

// Sample project data - replace with your own
const projectData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, shopping cart, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/e-cart.jpg",
    category: "web",
    link: "https://example.com",
    github: "https://github.com/username/project"
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and fitness progress.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "/images/fitnessApp.jpg",
    category: "mobile",
    link: "https://example.com/fitness",
    github: "https://github.com/username/fitness-app"
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Interactive analytics dashboard for financial portfolio management.",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    image: "/images/Portfolio.jpg",
    category: "web",
    link: "https://dashboard-demo.com",
    github: "https://github.com/username/dashboard"
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my recent work and projects that showcase my skills and expertise.
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-all ${filter === 'all' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md transition-all ${filter === 'web' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 rounded-md transition-all ${filter === 'mobile' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              Mobile
            </button>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={item}
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg">
                  {/* Replace with Image component when you have actual images */}
                  Project Image
                </div>
                
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> 
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
