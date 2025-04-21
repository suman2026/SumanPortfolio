// src/app/resume/page.tsx
import { personalInfo, experience, education, skills, projects } from '@/data/resumeData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Your Portfolio',
  description: 'Professional resume and qualifications',
};

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-10 max-w-4xl print:py-2">
      {/* Print button - hidden when printing */}
      <div className="flex justify-end mb-6 print:hidden">
        <button 
          onClick={() => window.print()} 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Print / Save as PDF
        </button>
      </div>
      
      {/* Resume content */}
      <div className="bg-white p-8 shadow-md print:shadow-none">
        {/* Header */}
        <header className="mb-8 text-center border-b pb-6">
          <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-3">{personalInfo.title}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span>{personalInfo.email}</span>
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.location}</span>
            <span>{personalInfo.website}</span>
          </div>
        </header>
        
        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-blue-700">Professional Summary</h2>
          <p>{personalInfo.summary}</p>
        </section>
        
        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-blue-700">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index}>
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <span className="text-sm text-gray-600">{job.period}</span>
                </div>
                <p className="text-gray-700 mb-2">{job.company}, {job.location}</p>
                <p className="mb-2">{job.description}</p>
                {job.achievements && (
                  <ul className="list-disc list-inside">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-blue-700">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">{edu.period}</span>
                </div>
                <p>{edu.institution}, {edu.location}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-blue-700">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects */}
        <section>
          <h2 className="text-xl font-bold mb-3 text-blue-700">Notable Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm mb-1">{project.description}</p>
                <p className="text-xs text-gray-600">
                  Technologies: {project.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}