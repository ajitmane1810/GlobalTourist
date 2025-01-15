import { BiCaretDown } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = ({ navLinks, activeDropdown, setActiveDropdown }) => {
  const location = useLocation();

  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-8">
      {navLinks.map((link) =>
        link.dropdown ? (
          <div key={link.name} className="relative">
            {/* Parent dropdown button */}
            <button
              className={`flex items-center space-x-1 text-gray-700 hover:text-primary ${
                location.pathname.startsWith(link.href) ? 'text-primary' : ''
              }`}
              onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)} // Toggle dropdown visibility
            >
              <span className="font-semibold">{link.name}</span>
              <BiCaretDown /> {/* Dropdown icon */}
            </button>

            {/* Dropdown links */}
            {activeDropdown === link.name && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                {link.dropdownLinks.map((dropdownLink) => (
                  <Link
                    key={dropdownLink.name}
                    to={dropdownLink.href}
                    className={`block px-4 py-2 text-gray-700 ${
                      location.pathname === dropdownLink.href ? 'text-white bg-primary' : ''
                    }`}
                    onClick={() => setActiveDropdown(null)} // Close dropdown when link is clicked
                  >
                    {dropdownLink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          // Regular link rendering
          <Link
            key={link.name}
            to={link.href}
            className={`font-semibold ${
              location.pathname === link.href ? 'text-primary' : 'text-gray-700 hover:text-primary'
            }`}
          >
            {link.name}
          </Link>
        )
      )}
    </div>
  );
};

export default NavLinks;
