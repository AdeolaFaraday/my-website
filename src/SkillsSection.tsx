import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    // Languages
    { name: 'JavaScript', icon: '🟨', description: 'Modern JavaScript with ES6+ features', category: 'languages' },
    { name: 'TypeScript', icon: '🔷', description: 'Type-safe JavaScript development', category: 'languages' },
    { name: 'Python', icon: '🐍', description: 'Backend scripting and automation', category: 'languages' },
    { name: 'HTML5', icon: '🏗️', description: 'Semantic markup and accessibility', category: 'languages' },
    { name: 'CSS3', icon: '🎨', description: 'Modern styling with animations', category: 'languages' },
    { name: 'SQL', icon: '🗃️', description: 'Database querying and management', category: 'languages' },

    // Frontend
    { name: 'React.js', icon: '⚛️', description: 'Component-based UI library', category: 'frontend' },
    { name: 'Next.js', icon: '▲', description: 'Full-stack React framework', category: 'frontend' },
    { name: 'React Native', icon: '📱', description: 'Cross-platform mobile apps', category: 'frontend' },
    { name: 'Vue.js', icon: '💚', description: 'Progressive JavaScript framework', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🎯', description: 'Utility-first CSS framework', category: 'frontend' },
    { name: 'Redux', icon: '🔄', description: 'State management for React', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime for servers', category: 'backend' },
    { name: 'Express.js', icon: '🚂', description: 'Web application framework', category: 'backend' },
    { name: 'GraphQL', icon: '🔺', description: 'Query language for APIs', category: 'backend' },
    { name: 'Socket.IO', icon: '📡', description: 'Real-time bidirectional communication', category: 'backend' },
    { name: 'REST APIs', icon: '🔗', description: 'RESTful web services', category: 'backend' },

    // Databases
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL document database', category: 'database' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Advanced relational database', category: 'database' },
    { name: 'Firebase', icon: '🔥', description: 'Cloud database and authentication', category: 'database' },

    // Cloud & Tools
    { name: 'AWS', icon: '☁️', description: 'Cloud computing services', category: 'cloud' },
    { name: 'Docker', icon: '🐳', description: 'Containerization platform', category: 'cloud' },
    { name: 'Git', icon: '📚', description: 'Distributed version control', category: 'tools' },
    { name: 'Jest', icon: '🃏', description: 'JavaScript testing framework', category: 'tools' },

    // AI & Data
    { name: 'TensorFlow', icon: '🧠', description: 'Machine learning framework', category: 'ai' },
    { name: 'Scrapy', icon: '🕷️', description: 'Web scraping framework', category: 'ai' },
  ];

  const currentlyLearning = [
    { name: 'Advanced TensorFlow', icon: '🚀', description: 'Deep learning and neural networks' },
    { name: 'AI Model Deployment', icon: '⚡', description: 'Production AI systems' },
    { name: 'Cloud Architecture', icon: '🏗️', description: 'Scalable system design' }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      languages: 'from-blue-500 to-blue-600',
      frontend: 'from-cyan-500 to-cyan-600',
      backend: 'from-green-500 to-green-600',
      database: 'from-purple-500 to-purple-600',
      cloud: 'from-orange-500 to-orange-600',
      tools: 'from-gray-500 to-gray-600',
      ai: 'from-pink-500 to-pink-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const SkillCard = ({ skill, index, getCategoryColor }: { skill: any, index: number, getCategoryColor: (cat: string) => string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.05,
        ease: 'easeOut'
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div className={`flex items-center gap-0.5 sm:gap-2 px-1.5 py-1 sm:px-3 sm:py-2 bg-gradient-to-r ${getCategoryColor(skill.category)} text-white font-medium rounded-md sm:rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-white/20`}>
        <span className="text-xs sm:text-lg group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </span>
        <span className="text-xs sm:text-sm group-hover:text-yellow-200 transition-colors duration-300">
          {skill.name}
        </span>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-lg">
        {skill.description}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-orange-50 to-amber-100 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/6 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-2 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold text-gray-900 mb-1 lg:mb-4">
            Tech Stack
          </h2>
          <p className="text-xs sm:text-sm lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies I use to build modern web applications
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-4">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.filter(skill => skill.category === 'languages').map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} getCategoryColor={getCategoryColor} />
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.filter(skill => skill.category === 'frontend').map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} getCategoryColor={getCategoryColor} />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.filter(skill => skill.category === 'backend').map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} getCategoryColor={getCategoryColor} />
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skills.filter(skill => skill.category === 'database').map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} getCategoryColor={getCategoryColor} />
              ))}
            </div>
          </motion.div>

          {/* Cloud & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1">Cloud & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.filter(skill => ['cloud', 'tools'].includes(skill.category)).map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} getCategoryColor={getCategoryColor} />
              ))}
            </div>
          </motion.div>

          {/* AI & Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1">AI & Data</h3>
            <div className="flex flex-wrap gap-2">
              {skills.filter(skill => skill.category === 'ai').map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} getCategoryColor={getCategoryColor} />
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default SkillsSection;
