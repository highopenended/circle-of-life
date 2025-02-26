import Header from './components/layout/Header'
import React from 'react'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Placeholder */}
      <section id="hero" className="h-screen bg-mauve-light">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="w-32 h-32 bg-white flex items-center justify-center">
            LOGO
          </div>
        </div>
      </section>

      {/* About Section - Placeholder */}
      <section id="about" className="min-h-screen bg-[repeating-linear-gradient(45deg,#E6D7E6,#E6D7E6 10px,#D6C7D6 10px,#D6C7D6 20px)]">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl text-center text-mauve-dark mb-8">About Us</h2>
        </div>
      </section>

      {/* Menu Section - Placeholder */}
      <section id="menu" className="min-h-screen bg-mauve-light">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl text-center text-mauve-dark mb-8">Menu</h2>
        </div>
      </section>

      {/* Contact Section - Placeholder */}
      <section id="contact" className="bg-mauve-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-mauve-dark mb-8">Contact</h2>
        </div>
      </section>
    </div>
  )
}

export default App 