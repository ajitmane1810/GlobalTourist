// src/components/HeroSection.jsx
import React from 'react';

const HomeHeroSection = ({ image, title, subtitle, buttonText }) => {
  return (
    <div className=" relative w-full md:min-h-screen flex items-center justify-center">
      <img className="w-full h-[500px] md:min-h-screen object-cover" src={image} alt="mainimage" />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/50"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white gap-3 px-4">
        <h2 className="md:py-4 text-xl font-semibold font-poppins sm:text-xl md:text-3xl">{title}</h2>
        <h1 className="mx-1 sm:mx-20 md:mx-40 py-4 text-3xl font-bold font-poppins sm:text-4xl md:text-6xl lg:text-7xl">
          {subtitle}
        </h1>
        <button
          className="w-32 md:w-48 md:mt-5 mx-auto py-3 bg-primary text-white text-sm md:text-lg font-semibold rounded-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HomeHeroSection;
