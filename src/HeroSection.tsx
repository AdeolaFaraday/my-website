import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

// Extend window interface for fullpage.js
declare global {
  interface Window {
    fullpage_api?: any;
  }
}

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(4); // Projects section (0-indexed + 1)
    }
  };

  const scrollToContact = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(5); // Contact section (0-indexed + 1)
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
        {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Adeola Apanisile
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <h2 className="text-xl md:text-3xl font-light text-purple-200 mb-6 min-h-[2.5rem] md:min-h-[3.5rem] flex items-center justify-center">
            <Typewriter
              words={['Full Stack Developer', 'AI Enthusiast', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              cursorColor="#a855f7"
            />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building scalable systems and intelligent experiences that connect people and technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-purple-400 text-purple-200 hover:bg-purple-400/10 font-medium rounded-lg transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-sm font-light tracking-wider">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/50 text-2xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
