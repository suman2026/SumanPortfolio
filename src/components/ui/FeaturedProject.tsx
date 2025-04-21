// src/components/ui/FeaturedProject.tsx
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
  isNew?: boolean;
  dateAdded?: string;
}

export default function FeaturedProject({
  title,
  description,
  image,
  technologies,
  link,
  github,
  isNew = false,
  dateAdded
}: FeaturedProjectProps) {
  return (
    <div className="relative border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {isNew && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          New
        </div>
      )}
      
      {/* Project image */}
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Project content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        {/* Technologies used */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Date added (if available) */}
        {dateAdded && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Added: {dateAdded}
          </p>
        )}
        
        {/* Links */}
        <div className="flex space-x-3 mt-4">
          <Link 
            href={link} 
            target="_blank" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Project
          </Link>
          
          {github && (
            <Link 
              href={github} 
              target="_blank" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}