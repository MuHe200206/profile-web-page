import React from 'react'

const CertificationsSection = ({ certifications }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
      </div>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="relative pl-4 border-l-2 border-gray-200">
            <div className="absolute w-2 h-2 bg-yellow-500 rounded-full -left-1 top-2"></div>
            <div className="space-y-1">
              {cert.name === 'Microsoft Certified: Azure Fundamentals' ? (
                <a 
                  href="https://learn.microsoft.com/en-us/users/kevinhe-0673/credentials/10138906d8289f0f?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 text-sm hover:text-blue-600 transition-colors duration-200 cursor-pointer whitespace-nowrap block"
                >
                  {cert.name}
                </a>
              ) : (
                <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
              )}
              {cert.issuer === 'Microsoft' ? (
                <a 
                  href="https://www.microsoft.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-600 text-sm font-medium hover:text-yellow-800 transition-colors duration-200 cursor-pointer block"
                >
                  {cert.issuer}
                </a>
              ) : (
                <p className="text-yellow-600 text-sm font-medium">{cert.issuer}</p>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">{cert.period}</p>
            <p className="text-xs text-gray-500">{cert.location}</p>
            {cert.credentialId && (
              <p className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded mt-1">ID: {cert.credentialId}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CertificationsSection 