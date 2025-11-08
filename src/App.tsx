import { useEffect, useRef } from 'react'
import 'fullpage.js'
import 'fullpage.js/dist/fullpage.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'

function App() {
  const fullpageRef = useRef<any>(null)

  useEffect(() => {
    // @ts-ignore
    fullpageRef.current = new fullpage('#fullpage', {
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

    return () => {
      if (fullpageRef.current) {
        fullpageRef.current.destroy('all')
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
