import React from 'react'

const ProjectsHeader = () => {
  return (
    <div className="text-center py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">My Projects</h1>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          A collection of my recent projects showcasing my skills in software development, 
          from mobile apps to web applications and distributed systems.
        </p>
      </div>
    </div>
  )
}

export default ProjectsHeader 