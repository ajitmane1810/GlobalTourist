import React from 'react'
import HeroSection from '../../components/HeroSection'
import pages from '../../components/Pages'
import Search from '../../components/Search'
import PackagesSection from '../../components/Packages/PackagesSection'
import Destination from '../../components/Destination/Destination'

const Packages = () => {
  return (
    <div>
        <HeroSection title={pages.packages.title} image={pages.packages.image} />
        <Search/>
        <PackagesSection/>
        <Destination/>
    </div>
  )
}

export default Packages