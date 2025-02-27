// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import facebookLogo from '../../assets/facebook_logo.png';
import instagramLogo from '../../assets/instagram_logo.png';
import twitterLogo from '../../assets/twitter_x_logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-white/80 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-3">Your Donut Shop</h3>
            <p className="text-gray-600 leading-relaxed">
              Crafting moments of joy through perfectly baked donuts. 
              Visit us for a sweet escape into donut paradise.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-3">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:example@gmail.com" 
                className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                <span>📧</span>
                example@gmail.com
              </a>
              <p className="flex items-center gap-3 text-gray-600">
                <span>📞</span>
                (xxx)xxx-xxxx
              </p>
              <p className="flex items-center gap-3 text-gray-600">
                <span>📍</span>
                123 Donut Street, Sweet City
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-3">Stay Updated</h3>
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-600 transition-colors"
                required
              />
              <button
                onClick={handleSubmit}
                className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg
                  hover:bg-primary-700 active:bg-primary-800 transition-all duration-200 
                  shadow-md hover:shadow-lg text-base min-w-[120px]
                  transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links & Copyright */}
        <div className="flex flex-col items-center border-t border-gray-200 pt-6">
          <div className="flex gap-8 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img src={facebookLogo} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img src={instagramLogo} alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img src={twitterLogo} alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Your Donut Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 