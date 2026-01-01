import { motion } from 'framer-motion';

// Extend window interface for fullpage.js
declare global {
  interface Window {
    fullpage_api?: any;
  }
}

const HeroSection = () => {
  const scrollToProjects = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(4); // Projects section (0-indexed + 1)
    }
  };

  return (
    <section className="relative h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Senior Frontend /<br /> Product Engineer
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl font-light leading-relaxed"
          >
            I build revenue-critical dashboards and product interfaces for fintech and SaaS companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-white text-slate-900 font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              View Selected Work
              <span className="absolute inset-0 rounded-md ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"></span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
