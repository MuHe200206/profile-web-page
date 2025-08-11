import React from 'react'
import ContactHeader from '../components/ContactHeader'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <ContactHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}

export default ContactPage 