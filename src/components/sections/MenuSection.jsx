// eslint-disable-next-line no-unused-vars
import React from 'react'
import DonutCard from '../menu/DonutCard'
import { donuts } from '../../data/donuts'
import SectionTitle from '../common/SectionTitle'
import ScrollToTop from '../common/ScrollToTop'
import circleLogo from '../../assets/circle_of_life_logo.png'

const MenuSection = () => {
  return (
    <section id="menu" className="min-h-screen py-16 flex items-center relative">
      {/* Logo - Absolutely positioned */}
      <div className="absolute left-[30%] top-8 transform -translate-x-full">
        <img 
          src={circleLogo} 
          alt="The Circle of Life Logo" 
          className="w-32 md:w-40 lg:w-48 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] [transform:rotate(-15deg)]"
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Title and Description - Centered */}
        <div className="text-center mb-12">
          <SectionTitle>Menu</SectionTitle>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our handcrafted selection of artisanal donuts, made fresh daily with love! Which is your favorite?
          </p>
        </div>

        {/* Donut Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {donuts.map((donut, index) => (
            <DonutCard
              key={index}
              imageUrl={donut.imageUrl}
              nameJp={donut.nameJp}
              nameEn={donut.nameEn}
              price={donut.price}
            />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </section>
  )
}

export default MenuSection 