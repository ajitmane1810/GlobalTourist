import React from 'react';

const Footer = () => {
  return (
    <div className="bg-secondary px-5 md:px-14">
      <div className="text-white py-5 px-3 sm:px-5 mt-[40px]">
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <a href="#" className="navbar-brand">
              <h1 className="text-primary text-3xl font-bold md:pt-3">
                <span className="text-white">Global</span>Tourist
              </h1>
            </a>
            <p className="pt-2 text-gray-400">
              Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor
            </p>
            <h6 className="text-white uppercase mt-4 mb-3" style={{ letterSpacing: '5px' }}>
              Follow Us
            </h6>
            <div className="flex space-x-2">
              <a className="border border-primary text-primary p-2 hover:bg-primary hover:text-white" href="#">
              <i className="fab fa-twitter"></i>
              </a>
              <a className="border border-primary text-primary p-2 hover:bg-primary hover:text-white" href="#">
              <i className="fab fa-facebook-f"></i>
              </a>
              <a className="border border-primary text-primary hover:bg-primary hover:text-white p-2" href="https://www.linkedin.com/in/ajitmane/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="border border-primary text-primary hover:bg-primary hover:text-white p-2" href="#">
              <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h5 className="text-white text-xl uppercase mt-4 mb-3" style={{ letterSpacing: '5px' }}>
              Our Services
            </h5>
            <div className="flex flex-col space-y-2">
              <a className="text-gray-400" href="#">
                <i className="fa fa-angle-right mr-2"></i>About
              </a>
              <a className="text-gray-400" href="#">
                <i className="fa fa-angle-right mr-2"></i>Destination
              </a>
              <a className="text-gray-400" href="#">
                <i className="fa fa-angle-right mr-2"></i>Services
              </a>
              <a className="text-gray-400" href="#">
                <i className="fa fa-angle-right mr-2"></i>Packages
              </a>
              <a className="text-gray-400" href="#">
                <i className="fa fa-angle-right mr-2"></i>Guides
              </a>
              <a className="text-gray-400" href="#">
                <i className="fa fa-angle-right mr-2"></i>Testimonial
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h5 className="text-white text-xl uppercase mt-4 mb-3" style={{ letterSpacing: '5px' }}>
              Contact Us
            </h5>
            <p className="text-gray-400 mb-2">
              <i className="fa fa-map-marker-alt mr-2"></i>123 Pimpri-Chinchwad, Pune, India
            </p>
            <p className="text-gray-400 mb-2">
              <i className="fa fa-phone-alt mr-2"></i>+91 742 092 8727
            </p>
            <p className="text-gray-400 mb-2">
              <i className="fa fa-envelope mr-2"></i>ajitmane1810@gmail.com
            </p>
            <h6 className="text-white uppercase mt-4 mb-3" style={{ letterSpacing: '5px' }}>
              Newsletter
            </h6>
            <div className="w-full">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="text"
                  className="form-control border-light p-4 focus:outline-none"
                  placeholder="Your Email"
                />
                <button className="bg-primary text-white p-4 mt-2 sm:mt-0 sm:ml-2">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white border-t py-4 px-3 sm:px-5">
        <div className="flex justify-between items-center">
          <div className="hidden md:block text-center sm:text-left mb-3 sm:mb-0">
            <a href="#" className="navbar-brand">
              <h1 className="text-primary text-xl md:text-3xl font-bold">
                <span className="text-white">Global</span>Tourist
              </h1>
            </a>
          </div>
          <div className="text-center sm:text-right">
            <p className="m-0 text-gray-300">
              Designed by <a href="https://ajitmane-portfolio.vercel.app/" className="font-bold">Ajit Mane💖</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
