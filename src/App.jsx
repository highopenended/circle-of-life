// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import MenuSection from './components/sections/MenuSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'
import ImagePreloader from './components/common/ImagePreloader'

function App() {
  return (
    <ImagePreloader>
      <div className="flex flex-col min-h-screen bg-mauve-light">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ImagePreloader>
  )
}

export default App 