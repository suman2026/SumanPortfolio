import React from 'react';
import { Inter } from 'next/font/google';

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
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="pt-16">
        {children}
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Suman Sharma . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}