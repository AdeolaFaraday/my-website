import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    // You can add actual form submission logic here
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/AdeolaFaraday',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/adeola-apanisile-b38230182/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'mailto:adexconly@gmail.com',
      color: 'hover:text-green-400'
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      url: 'https://x.com/tech_faraday',
      color: 'hover:text-blue-300'
    }
  ];

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(59,130,246,0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4"
              >
                Get In Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="text-lg lg:text-xl text-gray-600 leading-relaxed"
              >
                I'm always excited to collaborate or discuss ideas. Feel free to reach out!
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-800">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1,
                      ease: 'easeOut'
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:shadow-xl transition-all duration-300 ${link.color}`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <span>↑</span>
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Mobile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
            <p className="text-sm sm:text-base text-gray-600">I'm always excited to collaborate!</p>
          </motion.div>

          {/* Mobile Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl border border-white/50">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name-mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name-mobile"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email-mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email-mobile"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message-mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message-mobile"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 px-4 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>

                {/* Social Links inside form */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 text-center">Connect with me</h4>
                  <div className="flex justify-center gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.1,
                          ease: 'easeOut'
                        }}
                        whileHover={{ scale: 1.1, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base ${link.color}`}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Mobile Scroll to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm"
            >
              <span>↑</span>
              <span>Back to Top</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
