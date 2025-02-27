// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavItems = ({ isMobile }) => (
    <>
      {isHomePage ? (
        <>
          <button onClick={() => scrollToSection('about')} 
            className={`hover:text-primary-600 transition-colors ${isMobile ? 'text-center w-full' : ''}`}>
            About
          </button>
          <Link to="/hours-location" onClick={() => setIsMenuOpen(false)}
            className={`hover:text-primary-600 transition-colors ${isMobile ? 'text-center w-full' : ''}`}>
            Hours & Location
          </Link>
          <button onClick={() => scrollToSection('menu')} 
            className={`hover:text-primary-600 transition-colors ${isMobile ? 'text-center w-full' : ''}`}>
            Menu
          </button>
          <button onClick={() => scrollToSection('contact')} 
            className={`hover:text-primary-600 transition-colors ${isMobile ? 'text-center w-full' : ''}`}>
            Contact
          </button>
        </>
      ) : (
        <>
          <Link to="/#about" onClick={() => setIsMenuOpen(false)} 
            className={`hover:text-primary-600 transition-colors ${isMobile ? 'text-center w-full' : ''}`}>
            About
          </Link>
          <Link to="/hours-location" onClick={() => setIsMenuOpen(false)} 
            className={`hover:text-primary-600 transition-colors ${isMobile ? 'text-center w-full' : ''}`}>
            Hours & Location
          </Link>
          <Link to="/#menu" onClick={() => setIsMenuOpen(false)} 
            className={`hover:text-primary-600 transition-colors ${isMobile ? 'text-center w-full' : ''}`}>
            Menu
          </Link>
          <Link to="/#contact" onClick={() => setIsMenuOpen(false)} 
            className={`hover:text-primary-600 transition-colors ${isMobile ? 'text-center w-full' : ''}`}>
            Contact
          </Link>
        </>
      )}
      <Link to="/cart" onClick={() => setIsMenuOpen(false)} 
        className={`hover:text-primary-600 transition-colors ${isMobile ? 'text-center w-full' : ''}`}>
        Cart
      </Link>
    </>
  );

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <nav className="flex justify-between items-center h-20">
        {/* Logo/Title - smaller on mobile */}
        <Link to="/" className="flex items-center pl-4 sm:pl-8 flex-shrink-0">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Great_Vibes'] font-bold whitespace-nowrap
            [text-shadow:_1px_-1px_0px_#ffffff,_2px_2px_3px_rgba(0,0,0,0.4)]">
            The Circle of Life
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-xl xl:text-2xl font-playfair pr-8">
          <NavItems isMobile={false} />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden pr-4 sm:pr-8 text-3xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed left-0 right-0 top-20 bottom-0 bg-white/95 backdrop-blur-md lg:hidden">
            <div className="flex flex-col items-stretch gap-6 text-xl font-playfair p-8 bg-white/90">
              <NavItems isMobile={true} />
            </div>
            {/* Close button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 