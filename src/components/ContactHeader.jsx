import React from 'react'

const ContactHeader = () => {
  return (
    <div className="text-center py-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Get In Touch</h1>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          I'm always interested in new opportunities and exciting projects. 
          Feel free to reach out if you'd like to collaborate or just want to say hello!
        </p>
      </div>
    </div>
  )
}

export default ContactHeader 