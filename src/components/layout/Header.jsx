import { Link } from 'react-scroll';
import React from 'react';

const Header = () => {
  const navItems = [
    { title: 'About', to: 'about' },
    { title: 'Menu', to: 'menu' },
    { title: 'Contact', to: 'contact' },
    { title: 'Cart', to: 'cart' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent-white backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-mauve-dark text-2xl font-bold">
          The Circle of Life
        </div>

        {/* Navigation Items */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-mauve-dark hover:text-black cursor-pointer transition-colors duration-300"
              spy={true}
              offset={-100}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header; 