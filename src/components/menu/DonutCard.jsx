// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'

/**
 * DonutCard component displays individual donut information
 * @param {Object} props
 * @param {string} props.imageUrl - URL of the donut image
 * @param {string} props.nameJp - Japanese name of the donut
 * @param {string} props.nameEn - English name of the donut
 * @param {number} props.price - Price in yen
 */
const DonutCard = ({ imageUrl, nameJp, nameEn, price }) => {
  return (
    <div className="flex flex-col items-center p-4 transition-transform hover:scale-105">
      {/* Image container with white circular backdrop */}
      <div className="relative mb-4">
        <div className="w-80 h-80 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-90" />
        <img 
          src={imageUrl} 
          alt={nameEn} 
          className="w-72 h-72 relative z-10 object-contain"
        />
      </div>
      
      {/* Text content */}
      <div className="text-center">
        <h3 className="text-lg font-medium text-mauve-dark">{nameJp}</h3>
        <p className="text-md text-mauve-dark">{nameEn}</p>
        <p className="text-md font-medium text-mauve-dark">¥{price}</p>
      </div>
    </div>
  )
}

DonutCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  nameJp: PropTypes.string.isRequired,
  nameEn: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default DonutCard 