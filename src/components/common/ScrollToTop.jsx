// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top with faster animation
  const scrollToTop = () => {
    const scrollStep = window.scrollY / 15 // Divide total scroll distance into steps
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, -scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 15) // Smaller interval = faster scroll
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-mauve-dark text-white px-4 py-2 rounded-full 
                     opacity-70 hover:opacity-100 transition-opacity duration-300 z-50"
          aria-label="Scroll to top"
        >
          Scroll to Top
        </button>
      )}
    </>
  )
}

export default ScrollToTop 