import React, { useState, useEffect } from 'react';

const ImagePreloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get all image sources from the app
    const images = document.querySelectorAll('img');
    const imageSources = Array.from(images).map(img => img.src);
    
    // Preload all images
    Promise.all(imageSources.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    }))
    .then(() => {
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error preloading images:', error);
      setIsLoading(false); // Show content anyway if there's an error
    });
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-400"></div>
      </div>
    );
  }

  return children;
};

export default ImagePreloader; 