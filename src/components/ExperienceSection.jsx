import React from 'react'

const ExperienceSection = ({ experiences }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-gray-200 hover:border-blue-400 transition-colors duration-200">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-2"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{exp.period}</span>
            </div>
            <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
            <p className="text-gray-700 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection 