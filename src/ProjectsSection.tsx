import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      name: 'OCPUS',
      description: 'Live eCommerce platform with real-time shopping events, video integration, and comprehensive analytics.',
      tech: ['React', 'Node.js', 'MySQL', 'AWS'],
      icon: '🛍️',
      liveUrl: 'https://ocpus.io/',
      githubUrl: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Boltfliz',
      description: 'Content aggregator engine used in 20+ countries for unified movie, series, and music discovery across platforms.',
      tech: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      icon: '🍿',
      liveUrl: 'https://boltfliz.vercel.app/',
      githubUrl: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Veedez',
      description: 'Fintech solution for business operations with payments, expense tracking, and store management.',
      tech: ['React', 'PostgreSQL', 'AWS'],
      icon: '💼',
      liveUrl: 'https://veedez.com/',
      githubUrl: '#',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Battlevault',
      description: 'Multiplayer gaming platform for Ludo and Chess with real-time tournaments, leaderboards, and integrated payments.',
      tech: ['Node.js', 'React', 'Socket.IO', 'MongoDB'],
      icon: '🎮',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-red-50 to-rose-100 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/6 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-4">
            Projects
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've built — platforms that blend scalability, real-time interaction, and elegant design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: 'easeOut'
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-lg rounded-lg sm:rounded-xl p-2 sm:p-4 lg:p-5 border border-gray-200/50 hover:border-gray-300/70 transition-all duration-300 shadow-xl hover:shadow-2xl h-full flex flex-col">
                {/* Project Thumbnail */}
                <div className="flex justify-center mb-2 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br ${project.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                </div>

                {/* Project Name */}
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 text-center mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="hidden sm:block text-gray-600 leading-relaxed mb-2 sm:mb-4 text-xs sm:text-xs lg:text-sm flex-grow text-center">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-2 sm:mb-4">
                  <div className="flex flex-wrap justify-center gap-0.5 sm:gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-1 sm:gap-2 mt-auto">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-md sm:rounded-lg text-xs shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span>🌐</span>
                    <span className="hidden xs:inline">Live</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-gray-100 text-gray-700 font-medium rounded-md sm:rounded-lg border border-gray-200 hover:bg-gray-200 text-xs transition-all duration-300"
                  >
                    <span>📚</span>
                    <span className="hidden xs:inline">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
