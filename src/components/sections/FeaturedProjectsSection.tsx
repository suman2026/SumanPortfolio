// src/components/sections/FeaturedProjectsSection.tsx
import FeaturedProject from '../ui/FeaturedProject';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, shopping cart, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/e-cart.jpg",
    link: "https://example.com",
    github: "https://github.com/username/project",
    isNew: true,
    dateAdded: "April 20, 2025"
  },
  {
    title: "Portfolio Dashboard",
    description: "Interactive analytics dashboard for financial portfolio management.",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    image: "/images/Portfolio.jpg",
    link: "https://dashboard-demo.com",
    github: "https://github.com/username/dashboard",
    dateAdded: "March 15, 2025"
  }
];

export default function FeaturedProjectsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link 
            href="/projects" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all projects →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FeaturedProject {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}