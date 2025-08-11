import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  )
}

export default ProjectsGrid 