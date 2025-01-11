import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavLinks = ({ navLinks }) => {
  const location = useLocation();

  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={`text-base font-medium ${
            location.pathname === link.href
              ? 'text-primary'
              : 'text-gray-700 hover:text-primary'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
