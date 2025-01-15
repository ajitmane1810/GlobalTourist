import React from 'react'
import AboutImg from '../assets/about.jpg'

const AboutSection = () => {
  return (
    <div className="py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Large Background Image */}
        <div className="relative flex flex-col md:flex-row items-center">
          {/* Image on top for smaller screens (stacked) */}
          <img
            src={AboutImg}
            alt="Traveler with backpack"
            className="w-full h-auto md:w-[600px] md:h-[600px] lg:h-[800px] object-cover mb-6 md:mb-0"
          />
          
          {/* White Card */}
          <div className="bg-white p-8 shadow-lg w-full md:flex flex-col md:w-[700px] lg:absolute lg:right-5 mt-6 md:mt-0">
            <div className="mb-8">
              <h2 className="text-primary uppercase text-sm mb-2" style={{ letterSpacing: "5px" }}>ABOUT US</h2>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We Provide Best Tour Packages In Your Budget</h1>
              <p className="text-gray-600 text-base">
                Dolores lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuOo3H4vek-aivM5yU1kmrBYVsykkEUkayg&s"
                alt="Taj Mahal"
                className="w-full h-40 object-cover"
              />
              <img
                src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-485233,resizemode-75,msid-47013559/magazines/travel/dreamt-of-pristine-white-sand-beaches-visit-seychelles-in-the-indian-ocean.jpg"
                alt="Beach"
                className="w-full h-40 object-cover"
              />
            </div>

            {/* Book Now Button */}
            <button className="bg-primary text-white px-6 py-2 text-sm hover:bg-green-600 transition-colors">
              Book Now
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-3 md:px-0">
          {/* Competitive Pricing */}
          <div className="flex items-start">
            <div className="bg-primary p-4 mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>

          {/* Best Services */}
          <div className="flex items-start">
            <div className="bg-primary p-4 mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-2">Best Services</h3>
              <p className="text-gray-600 text-sm">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>

          {/* Worldwide Coverage */}
          <div className="flex items-start">
            <div className="bg-primary p-4 mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-2">Worldwide Coverage</h3>
              <p className="text-gray-600 text-sm">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
