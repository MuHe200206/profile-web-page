import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClass = ({isActive}) => isActive ? 
    "text-gray-900 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200" 
    : "text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KH</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Kevin He</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={linkClass}>
              Profile
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              <NavLink
                to="/"
                className={({isActive}) => isActive ? 
                  "block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md" 
                  : "block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </NavLink>
              <NavLink
                to="/projects"
                className={({isActive}) => isActive ? 
                  "block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md" 
                  : "block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({isActive}) => isActive ? 
                  "block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md" 
                  : "block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar