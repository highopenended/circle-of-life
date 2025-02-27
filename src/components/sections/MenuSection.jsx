// eslint-disable-next-line no-unused-vars
import React from 'react'
import DonutCard from '../menu/DonutCard'
import { donuts } from '../../data/donuts'

const MenuSection = () => {
  return (
    <section id="menu" className="min-h-screen bg-mauve-light py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
            LOGO
          </div>
          <h2 className="text-4xl text-mauve-dark mb-4">Menu</h2>
          <p className="text-xl text-mauve-dark max-w-2xl mx-auto">
            Discover our handcrafted selection of artisanal donuts, made fresh daily with love
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
    </section>
  )
}

export default MenuSection 