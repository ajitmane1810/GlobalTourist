import { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MobileMenu = ({ navLinks, isOpen, setIsOpen, setIsPagesOpen }) => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown state for mobile view

  return (
    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.name} className="relative">
              <button
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100 flex items-center space-x-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle mobile dropdown visibility
              >
                <span>{link.name}</span>
                <BiCaretDown/>  {/* Adjust size of the icon */}
              </button>

              {isDropdownOpen && (
                <div className="mt-2 w-48 bg-white shadow-lg rounded-md">
                  {link.dropdownLinks.map((dropdownLink) => (
                    <Link
                      key={dropdownLink.name}
                      to={dropdownLink.href}
                      className={`block px-4 py-2 text-gray-700 ${
                        location.pathname === dropdownLink.href ? 'text-white bg-primary' : ''
                      }`}
                      onClick={() => {
                        setIsDropdownOpen(false); // Close dropdown when link is clicked
                        setIsOpen(false); // Close the mobile menu
                      }}
                    >
                      {dropdownLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.name}
              to={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.href ? 'text-primary bg-gray-100' : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
