"use client"; 
import React from 'react';
import { Inter } from 'next/font/google';
import DarkModeToggle from '@/components/ui/DarkModeToggle';
import { scrollToSection } from '@/utils/scrollUtils';
import MobileNav from '@/components/layout/MobileNav';

const inter = Inter({ subsets: ['latin'] });

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Suman Sharma</div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <MobileNav />
          </div>
        </div>
      </header>
      
      <main className="pt-16">
        {children}
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Suman Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
