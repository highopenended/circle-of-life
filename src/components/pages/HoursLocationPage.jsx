import React from 'react';
import SectionTitle from '../common/SectionTitle';

const HoursLocationPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle>Hours & Location</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Hours Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Hours</h3>
          <div className="space-y-2">
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

        {/* Location Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Location</h3>
          <address className="not-italic">
            <p>123 Donut Street</p>
            <p>Sweet City, ST 12345</p>
          </address>
          <div className="mt-4">
            <p className="mb-2">Phone: (xxx) xxx-xxxx</p>
            <p>Email: example@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursLocationPage; 