// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import MenuSection from './components/sections/MenuSection'
import HoursLocationPage from './components/pages/HoursLocationPage'
import Footer from './components/layout/Footer'
import ImagePreloader from './components/common/ImagePreloader'

function App() {
  return (
    <Router>
      <ImagePreloader>
        <div className="flex flex-col min-h-screen bg-mauve-light text-black">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/hours-location" element={<HoursLocationPage />} />
              <Route path="/" element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <MenuSection />
                </>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </ImagePreloader>
    </Router>
  )
}

export default App 