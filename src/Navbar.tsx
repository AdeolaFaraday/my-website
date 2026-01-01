import { motion } from 'framer-motion';
import { useState } from 'react';

// Extend window interface for fullpage.js
declare global {
  interface Window {
    fullpage_api?: any;
  }
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // { name: 'Work', section: 3 }, // Selected Projects (Section 3 index 2 usually, adjusting for fullpage index if needed, assuming 3 based on array order: Hero(0), Cred(1), Proj(2) -> wait, Hero is 1 in fullpage 1-based usually, or 0 in array. Let's assume standard fullpage scroll)
    // Actually, let's map: 
    // Hero: 0
    // Credibility: 1
    // Selected Projects: 2
    // Tech Stack: 3
    // What I Do: 4
    // Contact: 5
    // Let's refine based on "Work" -> Selected Projects (2), "What I Do" -> (4), "Contact" -> (5)
    { name: 'Work', section: 2 },
    { name: 'What I Do', section: 3 },
    { name: 'Contact', section: 4 }
  ];

  const scrollToSection = (sectionIndex: number) => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(sectionIndex + 1); // fullpage.js uses 1-based indexing for sections
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-lg font-bold text-slate-900 tracking-tight hover:text-indigo-600 transition-colors duration-300"
          >
            Adeola Apanisile
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}

            <div className="h-4 w-px bg-slate-200 mx-2"></div>

            {/* Download CV (Secondary) */}
            <a
              href="/ADEOLA APANISILE.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
            >
              Download CV
            </a>

            {/* Contact CTA (Primary) */}
            <button
              onClick={() => scrollToSection(5)}
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-b border-slate-100"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.section)}
              className="block w-full text-left text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <div className="border-t border-slate-100 pt-4 space-y-4">
            <a
              href="/ADEOLA APANISILE.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Download CV
            </a>
            <button
              onClick={() => scrollToSection(5)}
              className="w-full px-5 py-3 bg-slate-900 text-white text-base font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
