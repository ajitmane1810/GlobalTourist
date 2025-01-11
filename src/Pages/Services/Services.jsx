import React from 'react'
import HeroSection from '../../components/HeroSection'
import pages from '../../components/Pages'
import Search from '../../components/Search';
import ServicesSection from '../../components/ServicesSection';
import Testimonials from '../../components/Testimonials ';


const Services = () => {
  return (
    <div>
        <HeroSection title={pages.services.title} image={pages.services.image} />
        <Search/>
        <ServicesSection/>
        <Testimonials/>
    </div>
  )
}

export default Services