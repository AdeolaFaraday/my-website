import { useEffect, useRef } from 'react'
import 'fullpage.js/dist/fullpage.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
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
        <div className="section">
          <AboutSection />
        </div>
        <div className="section">
          <SkillsSection />
        </div>
        <div className="section">
          <ProjectsSection />
        </div>
        <div className="section">
          <ContactSection />
        </div>
      </div>
    </>
  )
}

export default App
