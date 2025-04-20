"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaTools, FaMedal, FaBriefcase } from 'react-icons/fa';
import CountUp from 'react-countup';

// First, install required dependencies:
// npm install react-countup react-icons

// Achievements Slider Component
const AchievementsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace with your actual achievements
  const achievements = [
    {
      id: 1,
      title: "Best Web App Award",
      description: "Received recognition for developing an innovative web application that solved real-world problems.",
      date: "2023",
      icon: <FaMedal className="text-yellow-500 text-3xl" />,
    },
    {
      id: 2,
      title: "Full Stack Development Certification",
      description: "Completed comprehensive training in modern full-stack development technologies and best practices.",
      date: "2022",
      icon: <FaMedal className="text-blue-500 text-3xl" />,
    },
    {
      id: 3,
      title: "Code Challenge Winner",
      description: "I completed 100+ coding challenges on hackerrank and won the monthly contest.",
      date: "2021",
      icon: <FaMedal className="text-green-500 text-3xl" />,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === achievements.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? achievements.length - 1 : prevIndex - 1));
  };

  return (
    <div className="mt-8">
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        <div className="flex items-center">
          <button 
            onClick={prevSlide} 
            className="absolute left-0 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
            aria-label="Previous achievement"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="w-full py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={achievements[currentIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700">
                    {achievements[currentIndex].icon}
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold">{achievements[currentIndex].title}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                        {achievements[currentIndex].date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievements[currentIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
            aria-label="Next achievement"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentIndex 
                  ? "bg-blue-600" 
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Career Timeline Component
const CareerTimeline = () => {
  const timelineItems = [
    {
      year: "2024-25",
      title: "joined intern of full stack developer",
      company: "AICTE Internship",
      description: "Worked on a project using MERN stack",
      skills: ["MERN", "JavaScript", "Node.js"]
    },
    {
      year: "2023-24",
      title: "2nd year of B.Tech",
      company: "AKTU University",
      description: "Studied advanced algorithms and data structures",
      skills: ["Data Structures", "Algorithms", "Java"]
    },
    {
      year: "2022-23",
      title: "Joined B.Tech CSE",
      company: "AKTU University",
      description: "Pursuing a degree in Computer Science Engineering ",
      skills: ["C", "Python", "HTML/CSS"]
    }
  ];

  return (
    <div className="py-8">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-300 dark:bg-blue-700"></div>
        
        {/* Timeline items */}
        {timelineItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Year bubble */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full"
              />
            </div>
            
            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 
                ? 'md:pr-8 md:text-right' 
                : 'md:pl-8'
            }`}>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-block px-2 py-1 mb-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-md">
                  {item.year}
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                <p className="mt-2">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 3D Rotating Skill Cards
const SkillCards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const cards = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express", "Python", "Java", "MongoDB", "SQL"],
      color: "from-purple-500 to-indigo-400"
    },
    {
      title: "Tools",
      icon: "🔧",
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code"],
      color: "from-amber-500 to-orange-400"
    }
  ];
  
  // Function to determine card height class based on skill count
  const getCardHeightClass = (skillCount: number) => {
    if (skillCount <= 4) return "h-64"; // Default height
    if (skillCount <= 6) return "h-72"; // Taller for 5-6 skills
    return "h-80"; // Tallest for 7+ skills
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const heightClass = getCardHeightClass(card.skills.length);
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: 30, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            whileHover={{ 
              z: 50, 
              rotateY: activeCard === index ? -180 : 0,
              transition: { duration: 0.6 }
            }}
            onClick={() => setActiveCard(activeCard === index ? null : index)}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative w-full perspective-1000 cursor-pointer ${heightClass}`}
          >
            <div className={`absolute inset-0 preserve-3d duration-700 ease-in-out ${activeCard === index ? 'rotate-y-180' : ''}`}>
              {/* Front */}
              <div className={`absolute inset-0 rounded-xl shadow-xl bg-gradient-to-br ${card.color} p-6 backface-hidden`}>
                <div className="h-full flex flex-col justify-between">
                  <span className="text-5xl">{card.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                    <p className="text-white/80 mt-1">Click to see {card.skills.length} skills</p>
                  </div>
                </div>
              </div>
              
              {/* Back */}
              <div className="absolute inset-0 rounded-xl shadow-xl bg-white dark:bg-gray-800 p-6 rotate-y-180 backface-hidden overflow-auto">
                <h3 className="text-xl font-bold mb-4">{card.title} Skills</h3>
                <div className="space-y-2">
                  {card.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// About section with parallax effect
const AboutWithParallax = () => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Background parallax layers */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/absImg.jpg')",
          backgroundSize: 'cover',
        }}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      
      <div className="relative z-10 p-8 md:p-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-2xl font-bold">Hello, I am Suman!</h3>
            
            <div className="text-lg space-y-4">
              <p>
                I am a passionate full-stack developer specialized in creating modern web applications
                with clean code and exceptional user experiences.
              </p>
              <p>
                With expertise in React, Next.js, and Node.js, I enjoy building scalable solutions
                that solve real-world problems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                Frontend Expert
              </div>
              <div className="px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full">
                Backend Developer
              </div>
              <div className="px-4 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full">
                UI/UX Enthusiast
              </div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4 h-full">
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full min-h-[200px]">
                  <Image 
                    src="/images/skph.jpg" 
                    alt="Coding" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              <div className="space-y-4">
                <motion.div
                  className="relative h-1/2 w-full overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full min-h-[100px]">
                    <Image
                      src="/images/skph.jpg" 
                      alt="Coding" 
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  className="relative h-1/2 w-full overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full min-h-[100px]">
                    <Image
                      src="/images/skph.jpg" 
                      alt="At workspace" 
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Counter component
const StatsCounter = () => {
  const stats = [
    { value: 10, label: "Projects Completed" },
    { value: 1, label: "Years Experience" },
    { value: 0, label: "Happy Clients" },
    { value: 15, label: "Technologies" }
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
        >
          <motion.div 
            className="text-4xl font-bold text-blue-600 dark:text-blue-400"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: index * 0.1 + 0.3
            }}
          >
            <CountUp end={stat.value} duration={2} />
          </motion.div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

// Main AboutSection component 
export default function AboutSection() {
  const [activeSlide, setActiveSlide] = useState('about');
  const slides = ['about', 'skills', 'achievements', 'career'];
  const currentIndex = slides.indexOf(activeSlide);
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex = Math.min(Math.max(0, currentIndex + newDirection), slides.length - 1);
    setActiveSlide(slides[newIndex]);
    setPage([newIndex, newDirection]);
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and achievements.
          </p>
        </motion.div>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              onClick={() => setActiveSlide('about')}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                activeSlide === 'about'
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <FaUser className="mr-2" />
              <span>About</span>
            </button>
            <button
              onClick={() => setActiveSlide('skills')}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                activeSlide === 'skills'
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <FaTools className="mr-2" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => setActiveSlide('achievements')}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                activeSlide === 'achievements'
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <FaMedal className="mr-2" />
              <span>Achievements</span>
            </button>
            <button
              onClick={() => setActiveSlide('career')}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                activeSlide === 'career'
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <FaBriefcase className="mr-2" />
              <span>Career</span>
            </button>
          </div>
        </div>
        
        {/* Content Slides with Swipe Gesture Support */}
        <motion.div 
          className="max-w-4xl mx-auto"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) paginate(1);
            if (info.offset.x > 100) paginate(-1);
          }}
        >
          <AnimatePresence custom={direction} mode="wait">
            {activeSlide === 'about' && (
              <motion.div
                key="about"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <AboutWithParallax />
                <div className="mt-8">
                  <StatsCounter />
                </div>
              </motion.div>
            )}
            
            {activeSlide === 'skills' && (
              <motion.div
                key="skills"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <SkillCards />
              </motion.div>
            )}
            
            {activeSlide === 'achievements' && (
              <motion.div
                key="achievements"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <AchievementsSlider />
              </motion.div>
            )}
            
            {activeSlide === 'career' && (
              <motion.div
                key="career"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <CareerTimeline />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Gesture navigation hint */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Swipe to navigate</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </section>
  );
}