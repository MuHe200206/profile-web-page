import React, { useEffect } from 'react'
import { Outlet, useLocation } from "react-router-dom"
import Navbar from '../components/Navbar'

// ScrollToTop component to handle scrolling to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
 
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navbar />
      <main className="pt-8">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout