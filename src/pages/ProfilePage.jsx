import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import EducationSection from '../components/EducationSection'
import ContactSection from '../components/ContactSection'
import CertificationsSection from '../components/CertificationsSection'
import {
  profileData,
  about,
  skills,
  experiences,
  projects,
  education,
  certifications
} from '../data/profileData'

const ProfilePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* Header Section */}
      <ProfileHeader profileData={profileData} />

      <div className="space-y-12">
        {/* About Section */}
        <AboutSection about={about} />

        {/* Main Content and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <SkillsSection skills={skills} />
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={projects} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <EducationSection education={education} />
            <CertificationsSection certifications={certifications} />
            <ContactSection contactInfo={profileData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage 