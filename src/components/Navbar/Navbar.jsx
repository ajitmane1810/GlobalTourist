import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import NavLinks from '../Navbar/NavLinks.jsx';
import MobileMenu from '../Navbar/MobileMenu.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);  // Manage the dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tour Packages', href: '/tour-packages' },
    { 
      name: 'Pages', 
      href: '#', 
      dropdown: true, 
      dropdownLinks: [
        { name: 'Destination', href: '/destination' },
        { name: 'Travel Guides', href: '/guides' },
        { name: 'Testimonial', href: '/testimonial' }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsPagesOpen(false);  // Close the dropdown when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-white drop-shadow-2xl lg:mx-44 lg:relative top-9 z-10" ref={navRef}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <h1 className="text-3xl font-bold">
                  <span className="text-gray-800">Global</span>
                  <span className="text-primary">Tourist</span>
                </h1>
              </a>
            </div>

            {/* Desktop Menu */}
            <NavLinks navLinks={navLinks} isPagesOpen={isPagesOpen} setIsPagesOpen={setIsPagesOpen}  activeDropdown={activeDropdown}  
        setActiveDropdown={setActiveDropdown} />

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} setIsPagesOpen={setIsPagesOpen} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
