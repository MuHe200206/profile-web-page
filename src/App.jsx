import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout/>}>
      <Route index element = {<ProfilePage/>}/>
      <Route path='/projects' element = {<ProjectsPage/>}/>
      <Route path='/contact' element = {<ContactPage/>}/>
      <Route path='*' element = {<NotFoundPage/>}/>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
      
    
  )
}

export default App