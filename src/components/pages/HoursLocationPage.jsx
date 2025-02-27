// eslint-disable-next-line no-unused-vars
import React from 'react';
import SectionTitle from '../common/SectionTitle';

const HoursLocationPage = () => {
  return (
    <div className="pt-32 pb-16 px-4 text-center">
      <SectionTitle>Hours & Location</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-left">
        {/* Hours Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-playfair font-semibold mb-6 text-primary-600">Hours</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="font-medium">Monday - Friday</span>
              <span className="text-gray-600">6:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="font-medium">Saturday</span>
              <span className="text-gray-600">7:00 AM - 9:00 PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="font-medium">Sunday</span>
              <span className="text-gray-600">7:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-playfair font-semibold mb-6 text-primary-600">Location</h3>
          <address className="not-italic space-y-4">
            <div className="text-lg">
              <p className="mb-1">123 Donut Street</p>
              <p>Sweet City, ST 12345</p>
            </div>
            <div className="mt-6 space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <a href="tel:(xxx)xxx-xxxx" className="text-primary-600 hover:text-primary-700 transition-colors">
                  (xxx) xxx-xxxx
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:example@gmail.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                  example@gmail.com
                </a>
              </p>
            </div>
          </address>
        </div>
      </div>
    </div>
  );
};

export default HoursLocationPage; 