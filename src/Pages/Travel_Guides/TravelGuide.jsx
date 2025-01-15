import React from 'react'
import HeroSection from '../../components/HeroSection'
import pages from '../../components/Pages'
import Search from '../../components/Search'
import TravelGuides from '../../components/TravelGuides '

const TravelGuide = () => {
  return (
    <div>
        <HeroSection title={pages.guides.title} image={pages.guides.image}/>
        <Search/>
        <TravelGuides/>
    </div>
  )
}

export default TravelGuide