import React from 'react'

const ProjectCard = ({ project, index }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Project Header */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white">
        <div className="flex items-start justify-between mb-3">
          <a 
            href="https://github.com/MuHe200206"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold line-clamp-2 flex-1 mr-4 hover:text-orange-200 transition-colors duration-200 cursor-pointer"
          >
            {project.title}
          </a>
          <span className="text-orange-100 text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
            #{index + 1}
          </span>
        </div>
        <p className="text-orange-100 font-medium mb-3">{project.role}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-orange-100">{project.period}</span>
          <span className="text-orange-100">{project.location}</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <ul className="space-y-3">
          {project.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start text-gray-700">
              <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">•</span>
              <span className="text-sm leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Project Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">Project Details</span>
          <div className="flex space-x-2">
            <a
              href="https://github.com/MuHe200206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 