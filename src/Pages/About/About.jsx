import React from 'react'
import HeroSection from '../../components/HeroSection'
import pages from '../../components/Pages'
import Search from '../../components/Search'
import AboutSection from '../../components/AboutSection'
import Registration from '../../components/Registration'
import TravelGuides from '../../components/TravelGuides '

const About = () => {
  return (
    <div>
        <HeroSection title={pages.about.title} image={pages.about.image} />
        <Search/>
        <AboutSection/>
        <Registration/>
        <TravelGuides/>
    </div>
  )
}

export default About