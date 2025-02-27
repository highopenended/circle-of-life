// eslint-disable-next-line no-unused-vars
import React from 'react';
import circleLogo from '../../assets/circle_of_life_logo.png';
import belowLogoText from '../../assets/below_logo_text.png';
import eggAndMilk from '../../assets/egg-and-milk.jpg';
import chocolateGlazed from '../../assets/chocolate-glazed-donuts.jpg';
import donutSpread from '../../assets/donut-spread.png';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen bg-mauve-light overflow-hidden">
      {/* Left Side Image */}
      <div className="absolute left-0 top-0 h-full w-[75%] z-10 max-w-[800px]">
        <img 
          src={donutSpread} 
          alt="Variety of Donuts" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo Container - Centered and Top Z-Index */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="w-[400px] flex flex-col items-center">
          <img 
            src={circleLogo} 
            alt="The Circle of Life Logo" 
            className="w-full drop-shadow-[0_4px_8px_rgba(0,0,0,1)]"
          />
          <img 
            src={belowLogoText} 
            alt="Delicious Gluten Free Donuts" 
            className="w-[80%] mt-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      {/* Right Side Images */}
      <div className="absolute right-0 top-0 h-full w-[40%] z-10 max-w-[600px]">
        {/* Top Right Image */}
        <div className="relative h-1/2 w-full overflow-hidden">
          <div className="absolute inset-0 z-10">
            {/* Top edge fade */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-mauve-light to-transparent" />
            {/* Bottom edge fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-mauve-light to-transparent" />
            {/* Left edge fade */}
            <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-mauve-light to-transparent" />
            {/* Right edge fade */}
            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-mauve-light to-transparent" />
          </div>
          <img 
            src={eggAndMilk} 
            alt="Egg and Milk" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Bottom Right Image */}
        <div className="relative h-1/2 w-full overflow-hidden">
          <div className="absolute inset-0 z-10">
            {/* Top edge fade */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-mauve-light to-transparent" />
            {/* Bottom edge fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-mauve-light to-transparent" />
            {/* Left edge fade */}
            <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-mauve-light to-transparent" />
            {/* Right edge fade */}
            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-mauve-light to-transparent" />
          </div>
          <img 
            src={chocolateGlazed} 
            alt="Chocolate Glazed Donuts" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Optional: Add a subtle overlay to ensure logo visibility */}
      <div className="absolute inset-0 bg-white/10 z-10"></div>
    </section>
  );
};

export default HeroSection; 