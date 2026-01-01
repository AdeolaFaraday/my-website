import { useEffect, useRef } from 'react'
import 'fullpage.js/dist/fullpage.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import CredibilityStrip from './CredibilityStrip'
import SelectedProjects from './SelectedProjects'
// import TechStack from './TechStack'
import WhatIDo from './WhatIDo'
import ContactSection from './ContactSection'

// Declare fullpage globally
declare global {
  interface Window {
    fullpage: any
  }
}

function App() {
  const fullpageRef = useRef<any>(null)

  useEffect(() => {
    // Initialize fullpage.js after component mounts
    const initFullpage = () => {
      try {
        // @ts-ignore
        fullpageRef.current = new window.fullpage('#fullpage', {
          autoScrolling: true,
          scrollHorizontally: false,
          scrollingSpeed: 700,
          fitToSection: true,
          fitToSectionDelay: 1000,
          easing: 'easeInOutCubic',
          easingcss3: 'ease',
          loopBottom: false,
          loopTop: false,
          css3: true,
          navigation: false,
          slidesNavigation: false,
          controlArrows: false,
          slidesToSections: false,
          keyboardScrolling: true,
          animateAnchor: false,
          recordHistory: false,
          lazyLoading: true,
          responsiveWidth: 0,
          responsiveHeight: 0,
          parallax: false,
          parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' }
        })
      } catch (error) {
        console.error('Fullpage.js initialization error:', error)
      }
    }

    // Small delay to ensure DOM and fullpage.js are ready
    const timer = setTimeout(() => {
      if (window.fullpage) {
        initFullpage()
      } else {
        console.error('Fullpage.js not loaded')
      }
    }, 200)

    return () => {
      clearTimeout(timer)
      if (fullpageRef.current) {
        try {
          fullpageRef.current.destroy('all')
        } catch (error) {
          console.error('Fullpage.js destroy error:', error)
        }
      }
    }
  }, [])

  return (
    <>
      <Navbar />
      <div id="fullpage">
        <div className="section">
          <HeroSection />
        </div>

        {/* Credibility Strip - Auto Height */}
        <div className="section fp-auto-height">
          <CredibilityStrip />
        </div>

        {/* Selected Projects */}
        <div className="section">
          <SelectedProjects />
        </div>

        {/* Tech Stack - Auto Height */}
        {/* <div className="section fp-auto-height">
          <TechStack />
        </div> */}

        {/* What I Do - Auto Height (Optional, or full section) - Keeping full section for visual weight */}
        <div className="section">
          <WhatIDo />
        </div>

        <div className="section">
          <ContactSection />
        </div>
      </div>
    </>
  )
}

export default App
