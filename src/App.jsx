// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import MenuSection from './components/sections/MenuSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContactSection />
    </div>
  )
}

export default App 