// eslint-disable-next-line no-unused-vars
import React from 'react';
import facebookLogo from '../../assets/facebook_logo.png';
import instagramLogo from '../../assets/instagram_logo.png';
import twitterLogo from '../../assets/twitter_x_logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Contact Information */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <p className="text-3xl mb-4">
              <a href="mailto:example@gmail.com" className="hover:text-primary-200 transition-colors">
                example@gmail.com
              </a>
            </p>
            <p className="text-3xl">(xxx)xxx-xxxx</p>
          </div>
          
          {/* Social Media Links */}
          <div className="flex gap-12">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={facebookLogo} alt="Facebook" className="w-40 h-40" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={instagramLogo} alt="Instagram" className="w-40 h-40" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={twitterLogo} alt="Twitter" className="w-40 h-40" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-12 text-2xl">
          <p>&copy; {new Date().getFullYear()} Your Donut Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 