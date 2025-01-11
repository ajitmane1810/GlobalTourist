import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MobileMenu = ({ navLinks, isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === link.href
                ? 'text-primary bg-gray-100' // Active link in mobile menu
                : 'text-gray-700 hover:text-primary hover:bg-gray-100'
            }`}
            onClick={() => setIsOpen(false)} // Close menu when a link is clicked
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
