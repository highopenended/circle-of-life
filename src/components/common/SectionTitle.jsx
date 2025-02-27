import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-mauve-dark
      [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]">
      {children}
    </h2>
  );
};

export default SectionTitle; 