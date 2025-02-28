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
import backgroundPattern from '../../assets/backgroundpattern.png';
import facebookLogo from '../../assets/facebook_logo.png';
import instagramLogo from '../../assets/instagram_logo.png';
import twitterLogo from '../../assets/twitter_x_logo.png';
// Import all donut images from 1-12
import donut1 from '../../assets/donut_1.png';
import donut2 from '../../assets/donut_2.png';
import donut3 from '../../assets/donut_3.png';
import donut4 from '../../assets/donut_4.png';
import donut5 from '../../assets/donut_5.png';
import donut6 from '../../assets/donut_6.png';
import donut7 from '../../assets/donut_7.png';
import donut8 from '../../assets/donut_8.png';
import donut9 from '../../assets/donut_9.png';
import donut10 from '../../assets/donut_10.png';
import donut11 from '../../assets/donut_11.png';
import donut12 from '../../assets/donut_12.png';

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
  backgroundPattern,
  facebookLogo,
  instagramLogo,
  twitterLogo,
  donut1,
  donut2,
  donut3,
  donut4,
  donut5,
  donut6,
  donut7,
  donut8,
  donut9,
  donut10,
  donut11,
  donut12,
];

// eslint-disable-next-line react/prop-types
const ImagePreloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        // Apply background pattern immediately to prevent flicker
        document.body.style.backgroundImage = `url(${backgroundPattern})`;
        document.body.style.backgroundRepeat = 'repeat';
        document.body.style.backgroundSize = '200px';
        document.body.style.backgroundColor = 'rgba(229, 212, 229, 1)';

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

    // Cleanup function
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-mauve-light flex items-center justify-center z-50"
        style={{
          backgroundImage: `url(${backgroundPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-400"></div>
      </div>
    );
  }

  return children;
};

export default ImagePreloader; 