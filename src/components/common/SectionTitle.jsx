// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8
      [text-shadow:_1px_-1px_0px_rgba(255,255,255,1),_2px_2px_3px_rgba(0,0,0,0.4)]">
      {children}
    </h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default SectionTitle; 