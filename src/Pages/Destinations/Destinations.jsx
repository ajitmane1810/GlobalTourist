import React from 'react'
import pages from '../../components/Pages'
import HeroSection from '../../components/HeroSection'
import Search from '../../components/Search'
import Destination from '../../components/Destination/Destination'

const Destinations = () => {
  return (
    <div>
         <HeroSection title={pages.destination.title} image={pages.destination.image} />
         <Search/>
         <Destination/>
    </div>
  )
}

export default Destinations