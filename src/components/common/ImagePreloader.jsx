// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// Create an array of all image paths we want to preload
const imagePaths = [
  '/src/assets/circle_of_life_logo.png',
  '/src/assets/below_logo_text.png',
  '/src/assets/eggs-and-milk.png',
  '/src/assets/chocolate-glazed-donuts.png',
  '/src/assets/donut-spread.png',
  // Add all other image paths here
];

// eslint-disable-next-line react/prop-types
const ImagePreloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images before mounting
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
        setIsLoading(false); // Show content anyway if there's an error
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