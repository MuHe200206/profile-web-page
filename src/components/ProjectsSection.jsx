import React from 'react'

const ProjectsSection = ({ projects }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
      </div>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-gray-200 hover:border-orange-400 transition-colors duration-200">
            <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-1.5 top-2"></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{project.period}</span>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <p className="text-orange-600 font-medium">{project.role}</p>
              <p className="text-gray-500 text-sm">{project.location}</p>
            </div>
            <ul className="text-gray-700 space-y-2">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection 