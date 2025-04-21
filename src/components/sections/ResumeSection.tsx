// src/components/sections/ResumeSection.tsx
import Link from 'next/link';

export default function ResumeSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Download my resume to learn more about my experience, education, and skills.
        </p>
        
        {/* Option 1: View & Print Resume */}
        <Link 
          href="/resume" 
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors mr-4"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View Resume
        </Link>
      </div>
    </section>
  );
}
