// eslint-disable-next-line no-unused-vars
import React from 'react'
import SectionTitle from '../common/SectionTitle'

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-mauve-light py-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <SectionTitle>About Us</SectionTitle>
          {/* Rest of about section content */}
        </div>
      </div>
    </section>
  )
}

export default AboutSection 