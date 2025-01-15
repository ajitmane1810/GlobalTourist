import React from 'react'
import HeroSection from '../../components/HeroSection'
import pages from '../../components/Pages'
import Search from '../../components/Search'
import Testimonials from '../../components/Testimonials '

const Testimonial = () => {
  return (
    <div>
      <HeroSection title={pages.testimonial.title} image={pages.testimonial.image}/>
      <Search/>
      <Testimonials/>
    </div>
  )
}

export default Testimonial