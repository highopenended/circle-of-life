// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import circleLogo from '../../assets/circle_of_life_logo.png';
import belowLogoText from '../../assets/below_logo_text.png';
import eggAndMilk from '../../assets/eggs-and-milk.png';
import chocolateGlazed from '../../assets/chocolate-glazed-donuts.png';
import donutSpread from '../../assets/donut-spread.png';
import donutsPhoto1 from '../../assets/donuts_photograph1.png';
import donutsPhoto2 from '../../assets/donuts_photograph2.png';
import certificationPaper from '../../assets/certification_papers.png';
// Import any other images you're using

// Create an array of all image paths we want to preload
const imagePaths = [
  circleLogo,
  belowLogoText,
  eggAndMilk,
  chocolateGlazed,
  donutSpread,
  donutsPhoto1,
  donutsPhoto2,
  certificationPaper,
  // Add any other imported images
];

// eslint-disable-next-line react/prop-types
const ImagePreloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          imagePaths.map((src) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
            });
          })
        );
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-400"></div>
      </div>
    );
  }

  return children;
};

export default ImagePreloader; 