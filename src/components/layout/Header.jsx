// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Add scroll listener and click outside handler
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Add this near the other useEffect
  useEffect(() => {
    if (isHomePage) {
      const scrollTarget = sessionStorage.getItem('scrollTo');
      if (scrollTarget) {
        // Clear the stored value
        sessionStorage.removeItem('scrollTo');
        // Small delay to ensure page content is loaded
        setTimeout(() => {
          scrollToSection(scrollTarget);
        }, 100);
      }
    }
  }, [isHomePage]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavItems = ({ isMobile }) => (
    <>
      <button 
        onClick={() => {
          if (!isHomePage) {
            window.location.href = '/';
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          setIsMenuOpen(false);
        }}
        className={`hover:text-primary-600 transition-all duration-200 ease-in-out ${
          isMobile ? 'text-center w-full py-4 hover:bg-black/5' : 'hover:scale-105'
        }`}
      >
        Home
      </button>

      <button 
        onClick={() => {
          if (!isHomePage) {
            window.location.href = '/#about';
            sessionStorage.setItem('scrollTo', 'about');
          } else {
            scrollToSection('about');
          }
          setIsMenuOpen(false);
        }}
        className={`hover:text-primary-600 transition-all duration-200 ease-in-out ${
          isMobile ? 'text-center w-full py-4 hover:bg-black/5' : 'hover:scale-105'
        }`}
      >
        About
      </button>
      <button 
        onClick={() => {
          if (!isHomePage) {
            window.location.href = '/#menu';
            sessionStorage.setItem('scrollTo', 'menu');
          } else {
            scrollToSection('menu');
          }
          setIsMenuOpen(false);
        }}
        className={`hover:text-primary-600 transition-all duration-200 ease-in-out ${
          isMobile ? 'text-center w-full py-4 hover:bg-black/5' : 'hover:scale-105'
        }`}
      >
        Menu
      </button>

      <button 
        onClick={() => {
          if (!isHomePage) {
            window.location.href = '/#contact';
            sessionStorage.setItem('scrollTo', 'contact');
          } else {
            scrollToSection('contact');
          }
          setIsMenuOpen(false);
        }}
        className={`hover:text-primary-600 transition-all duration-200 ease-in-out ${
          isMobile ? 'text-center w-full py-4 hover:bg-black/5' : 'hover:scale-105'
        }`}
      >
        Contact Us
      </button>

      {!isMobile && <span className="text-gray-300 select-none">|</span>}
      {isMobile && <div className="w-full border-t border-gray-200 my-2"></div>}

      <Link to="/hours-location" 
        onClick={() => setIsMenuOpen(false)} 
        className={`hover:text-primary-600 transition-all duration-200 ease-in-out ${
          isMobile ? 'text-center w-full py-4 hover:bg-black/5' : 'hover:scale-105'
        }`}
      >
        Hours & Location
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
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden pr-4 sm:pr-8 text-5xl leading-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div ref={menuRef} className="fixed left-0 right-0 top-20 bottom-0 bg-white/95 backdrop-blur-md lg:hidden">
            <div className="flex flex-col items-stretch gap-0 text-xl font-playfair bg-white/90">
              <NavItems isMobile={true} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 