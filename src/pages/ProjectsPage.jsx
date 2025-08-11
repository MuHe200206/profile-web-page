import React from 'react'
import { projects } from '../data/profileData'
import ProjectsHeader from '../components/ProjectsHeader'
import ProjectsGrid from '../components/ProjectsGrid'
import CallToAction from '../components/CallToAction'

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <ProjectsHeader />
      <ProjectsGrid projects={projects} />
      <CallToAction />
    </div>
  )
}

export default ProjectsPage 