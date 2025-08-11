import React from 'react'

const AboutSection = ({ about }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
      </div>
      <div className="prose prose-gray max-w-none">
        {about.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default AboutSection 