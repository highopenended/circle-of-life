// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import facebookLogo from '../../assets/facebook_logo.png';
import instagramLogo from '../../assets/instagram_logo.png';
import twitterLogo from '../../assets/twitter_x_logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    setEmail('');
  };

  return (
    <footer className="bg-primary-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Your Donut Shop</h3>
            <p className="text-primary-200 leading-relaxed">
              Crafting moments of joy through perfectly baked donuts. 
              Visit us for a sweet escape into donut paradise.
            </p>
          </div>

          {/* Hours Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Hours</h3>
            <div className="space-y-2 text-primary-200">
              <p className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6:00 AM - 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday</span>
                <span>7:00 AM - 9:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span>7:00 AM - 6:00 PM</span>
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-3 text-primary-200">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:example@gmail.com" 
                   className="hover:text-white transition-colors duration-300">
                  example@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(xxx)xxx-xxxx</span>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>123 Donut Street, Sweet City</span>
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
            <p className="text-primary-200 mb-4">
              Subscribe to our newsletter for special offers and updates!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-primary-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-primary-200"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-200 text-primary-800 rounded hover:bg-primary-300 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center border-t border-primary-700 pt-8">
          <div className="flex gap-6 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img src={facebookLogo} alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img src={instagramLogo} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img src={twitterLogo} alt="Twitter" className="w-8 h-8" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-primary-200">
            &copy; {new Date().getFullYear()} Your Donut Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 