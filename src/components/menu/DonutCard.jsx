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
    <div className="flex flex-col items-center p-4">
      {/* Image container with white circular backdrop */}
      <div className="relative">
        <div className="w-96 h-96 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.8] blur-[2px]" />
        <img 
          src={imageUrl} 
          alt={nameEn} 
          className="w-96 h-96 relative z-10 object-contain transition-transform hover:scale-105 cursor-pointer"
        />
      </div>
      
      {/* Text content */}
      <div className="text-center -mt-8">
        <h3 className="text-2xl font-medium">{nameJp}</h3>
        <p className="text-xl">{nameEn}</p>
        <p className="text-xl font-medium">¥{price}</p>
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