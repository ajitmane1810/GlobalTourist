import React from 'react';
import main from '../../assets/carousel-2.jpg';
import Search from '../../components/Search';
import AboutSection from '../../components/AboutSection';
import Destination from '../../components/Destination/Destination.jsx';
import ServicesSection from '../../components/ServicesSection.jsx';
import PackagesSection from '../../components/Packages/PackagesSection.jsx';
import Registration from '../../components/Registration.jsx';
import TravelGuides from '../../components/TravelGuides .jsx';
import Testimonials from '../../components/Testimonials .jsx';
import HomeHeroSection from '../Home/HomeHeroSection.jsx'; 

const Home = () => {
  return (
    <div className="w-full md:min-h-screen relative">
      {/* Home Hero Section */}
      <HomeHeroSection
        image={main} 
        title="Tours & Travel"
        subtitle="Let's Discover The World Together"
        buttonText="Book Now"
      />

      {/* Rest of the page content */}
      <Search />
      <AboutSection />
      <Destination />
      <ServicesSection />
      <PackagesSection />
      <Registration />
      <TravelGuides />
      <Testimonials />
    </div>
  );
};

export default Home;
