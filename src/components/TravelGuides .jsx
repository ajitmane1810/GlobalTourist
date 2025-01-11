import React from 'react';

import guide1 from '../assets/guide/team-1.jpg';
import guide2 from '../assets/guide/team-2.jpg';
import guide3 from '../assets/guide/team-3.jpg';
import guide4 from '../assets/guide/team-4.jpg';

const TravelGuides = () => {
    return (
        <div className="py-16 px-10 md:px-44 bg-gray-50">
            <div className="container pt-10 pb-12">
                <div className="text-center mb-12 pb-12">
                    <h6 className="text-primary uppercase mb-2" style={{ letterSpacing: "5px" }}>Guides</h6>
                    <h1 className='text-2xl md:text-4xl font-bold text-gray-900 mb-2'>Our Travel Guides</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {[guide1, guide2, guide3, guide4].map((image, index) => (
                        <div key={index} className="pb-2">
                            <div className="bg-white mb-4 group relative overflow-hidden hover:shadow-2xl">
                                <div className="relative overflow-hidden">
                                    <img 
                                        className="w-full h-auto group-hover:scale-125 transition-all duration-500 ease-in-out" 
                                        src={image} 
                                        alt={`Guide ${index + 1}`} 
                                    />
                                    {/* Black overlay on hover */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                    
                                    {/* Icons centered in the middle of the card, sliding up from the bottom */}
                                    <div className="absolute inset-0 flex justify-center items-center space-x-2 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                        <a className="bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500 p-2 rounded-full" href="">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a className="bg-transparent text-blue-700 hover:bg-blue-700 hover:text-white border-2 border-blue-700 p-2 rounded-full" href="">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="bg-transparent text-pink-500 hover:bg-pink-500 hover:text-white border-2 border-pink-500 p-2 rounded-full" href="">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a className="bg-transparent text-blue-700 hover:bg-blue-700 hover:text-white border-2 border-blue-700 p-2 rounded-full" href="">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center py-8">
                                    <h5 className="truncate font-semibold text-xl">Guide Name</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TravelGuides;
