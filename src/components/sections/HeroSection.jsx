// eslint-disable-next-line no-unused-vars
import React from 'react';
import circleLogo from '../../assets/circle_of_life_logo.png';
import belowLogoText from '../../assets/below_logo_text.png';
import eggAndMilk from '../../assets/eggs-and-milk.png';
import chocolateGlazed from '../../assets/chocolate-glazed-donuts.png';
import donutSpread from '../../assets/donut-spread.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Content wrapper with fade-out mask */}
      <div className="absolute inset-0" 
        style={{
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
      >
        {/* Left Side Image */}
        <div className="absolute left-0 top-0 h-full w-[75%] z-10 max-w-[900px]">
          <img 
            src={donutSpread} 
            alt="Variety of Donuts" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo Container - Centered and Top Z-Index */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 -translate-y-12">
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

        {/* Right Side Images with Improved Masking */}
        <div className="absolute right-0 top-0 h-full w-[40%] z-10 opacity-0 lg:opacity-100 transition-opacity duration-300">
          {/* Top Right Image Container */}
          <div 
            className="absolute right-0 top-0 h-1/2 w-full max-w-[600px]"
            style={{
              WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 10%, black 95%, transparent 100%)`,
              maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
            }}
          >
            <img 
              src={eggAndMilk} 
              alt="Egg and Milk" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Image Container */}
          <div 
            className="absolute right-16 bottom-0 h-1/2 w-full max-w-[600px]"
            style={{
              WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 10%, black 95%, transparent 100%)`,
              maskImage: `linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
            }}
          >
            <img 
              src={chocolateGlazed} 
              alt="Chocolate Glazed Donuts" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
