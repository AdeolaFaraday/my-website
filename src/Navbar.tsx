import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';

// Extend window interface for fullpage.js
declare global {
  interface Window {
    fullpage_api?: any;
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { scrollY } = useScroll();

  const navItems = [
    { name: 'Home', section: 0 },
    { name: 'About', section: 1 },
    { name: 'Skills', section: 2 },
    { name: 'Projects', section: 3 },
    { name: 'Contact', section: 4 }
  ];

  // Track active section based on scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    const sectionHeight = window.innerHeight;
    const currentSection = Math.round(latest / sectionHeight);
    setActiveSection(Math.min(currentSection, navItems.length - 1));
  });

  const scrollToSection = (sectionIndex: number) => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(sectionIndex + 1);
      setActiveSection(sectionIndex); // Immediately update active section
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(1);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 font-bold text-xl text-white hover:text-purple-200 transition-colors duration-300"
          >
            Adeola Apanisile
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.section
                    ? 'text-white bg-white/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                {activeSection === item.section && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection(4)} // Contact section
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 bg-purple-600/80 hover:bg-purple-600 text-white text-sm font-medium rounded-lg border border-purple-400/50 transition-all duration-300"
            >
              Connect
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className="absolute top-0 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="absolute top-2 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className="absolute top-4 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-black/20 backdrop-blur-xl border-t border-white/10"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20
              }}
              transition={{
                duration: 0.3,
                delay: isMenuOpen ? index * 0.1 : 0
              }}
              onClick={() => scrollToSection(item.section)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                activeSection === item.section
                  ? 'text-white bg-white/20 border-l-4 border-purple-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.name}
            </motion.button>
          ))}

          {/* Mobile CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              x: isMenuOpen ? 0 : -20
            }}
            transition={{
              duration: 0.3,
              delay: isMenuOpen ? navItems.length * 0.1 : 0
            }}
            onClick={() => scrollToSection(4)}
            className="w-full mt-2 px-4 py-3 bg-purple-600/80 hover:bg-purple-600 text-white text-base font-medium rounded-lg border border-purple-400/50 transition-all duration-300"
          >
            Connect
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
