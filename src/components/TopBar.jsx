import React from 'react';

const TopBar = () => {
  return (
    <div className="hidden lg:block  mt-5 px-44">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">
              <i className="far fa-envelope mr-2"></i>ajitmane1810@gmail.com
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">
              <i className="fas fa-phone-alt mr-2"></i>+91 742 092 8727
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-primary hover:text-primary/80">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-primary hover:text-primary/80">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/ajitmane/" className="text-primary hover:text-primary/80">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-primary hover:text-primary/80">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-primary hover:text-primary/80">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
