// eslint-disable-next-line no-unused-vars
import React from 'react'
import SectionTitle from '../common/SectionTitle'
import donutsPhoto1 from '../../assets/donuts_photograph1.png';
import donutsPhoto2 from '../../assets/donuts_photograph2.png';
import certificationPaper from '../../assets/certification_papers.png';

const AboutSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <SectionTitle>About Us</SectionTitle>
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="relative w-[60%] aspect-[4/3]">
          <img 
            src={donutsPhoto1} 
            alt="Sugar dusted donuts" 
            className="absolute top-0 left-[-10%] w-[75%] aspect-square object-contain rounded-lg filter drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] z-10"
          />
          <img 
            src={donutsPhoto2} 
            alt="Jelly filled donuts" 
            className="absolute top-[15%] left-[25%] w-[75%] aspect-square object-contain rounded-lg filter drop-shadow-[0_8px_8px_rgba(0,0,0,0.3)] z-20"
          />
        </div>
        <img 
          src={certificationPaper} 
          alt="Certification details" 
          className="w-[45%] rounded-lg"
        />
      </div>
    </section>
  )
}

export default AboutSection 