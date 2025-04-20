"use client";

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Define skill types
interface TechnicalSkill {
  name: string;
  percentage: number;
  icon: string;
  color: string;
}

interface ProfessionalSkill {
  name: string;
  percentage: number;
}

export default function SkillsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const technicalSkills: TechnicalSkill[] = [
    { name: 'HTML', percentage: 90, icon: '🟠', color: 'bg-orange-500' },
    { name: 'CSS', percentage: 80, icon: '🔵', color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 85, icon: '🟡', color: 'bg-yellow-400' },
    { name: 'Python', percentage: 50, icon: '🐍', color: 'bg-blue-800' },
    { name: 'React', percentage: 75, icon: '⚛️', color: 'bg-blue-400' },
    { name: 'Next.js', percentage: 70, icon: '🔲', color: 'bg-black dark:bg-white' },
  ];
  
  const professionalSkills: ProfessionalSkill[] = [
    { name: 'Creativity', percentage: 90 },
    { name: 'Communication', percentage: 65 },
    { name: 'Problem Solving', percentage: 75 },
    { name: 'Teamwork', percentage: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the skills I have developed throughout my career as a developer.
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Technical Skills */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-cyan-400 inline-block">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center mb-1">
                    <span className="mr-2">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Professional Skills */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-cyan-400 inline-block">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-32 h-32">
                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 absolute"></div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <motion.circle
                        className="text-cyan-400 stroke-current"
                        cx="50"
                        cy="50"
                        r="40"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray="251.2"
                        strokeDashoffset="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={isInView ? { 
                          strokeDashoffset: 251.2 - (251.2 * skill.percentage / 100) 
                        } : { strokeDashoffset: 251.2 }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">{skill.percentage}%</span>
                    </div>
                  </div>
                  <p className="mt-4 text-center font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}