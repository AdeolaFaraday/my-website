import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    {
      icon: '🚀',
      text: 'Built production-ready backend systems with Node.js and Express'
    },
    {
      icon: '🧠',
      text: 'Exploring AI integration with TensorFlow'
    },
    {
      icon: '💼',
      text: 'Built a payment admin dashboard currently live in production'
    },
    {
      icon: '🛍️',
      text: 'Worked on OCPUS — an eCommerce platform that hosts live events and enables real-time product sales'
    },
    {
      icon: '🎮',
      text: 'Creator of Battlevault — a Ludo and Chess multiplayer gaming platform'
    },
    {
      icon: '🍿',
      text: 'Built Boltfliz — a movie & music aggregator used across 20+ countries'
    }
  ];

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-emerald-50 to-teal-100 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-teal-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/6 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center min-h-full py-8 lg:py-0">

          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4 lg:space-y-6 order-1"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-8"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="hidden lg:block text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
            >
              I'm Adeola Apanisile — a passionate Full Stack Developer with a strong focus on building scalable systems, admin dashboards, and real-time applications.
              I enjoy creating tools that empower businesses and integrating AI to enhance user experiences.
            </motion.p>
          </motion.div>

          {/* Right side - Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="space-y-4 lg:space-y-6 order-2 lg:order-2"
          >
            <div className="grid gap-3 sm:gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:bg-white/80 transition-colors duration-300"
                >
                  <span className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">{highlight.icon}</span>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{highlight.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
