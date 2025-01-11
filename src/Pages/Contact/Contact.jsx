import React from 'react'
import ContactForm from '../../components/ContactForm '
import HeroSection from '../../components/HeroSection'
import pages from '../../components/Pages'
import Search from '../../components/Search'

const Contact = () => {
  return (
    <div>
         <HeroSection title={pages.contact.title} image={pages.contact.image} />
         {/* <Search/> */}
         <ContactForm/>
    </div>
  )
}

export default Contact