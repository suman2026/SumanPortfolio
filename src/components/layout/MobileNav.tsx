"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '@/utils/scrollUtils';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };
  
  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 z-50"
          >
            <nav className="py-4">
              <ul className="flex flex-col space-y-4 px-4">
                <li>
                  <button 
                    onClick={() => handleNavClick('about')} 
                    className="w-full text-left py-2 hover:text-blue-600 transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('projects')} 
                    className="w-full text-left py-2 hover:text-blue-600 transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('contact')} 
                    className="w-full text-left py-2 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}