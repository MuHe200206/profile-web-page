import React from 'react'

const EducationSection = ({ education }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Education</h2>
      </div>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-4 border-l-2 border-gray-200">
            <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-1 top-2"></div>
            <h3 className="font-semibold text-gray-900 text-sm">{edu.degree}</h3>
            <a 
              href="https://www.ucalgary.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors duration-200 cursor-pointer"
            >
              {edu.school}
            </a>
            {edu.details && (
              <p className="text-xs text-gray-600 mt-1">{edu.details}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EducationSection 