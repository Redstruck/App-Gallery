import { motion } from 'framer-motion';
import { useState } from 'react';
import { personalInfo } from '../data/personal';

export const AboutSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05 // Faster stagger animation
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">{'>'}</span> about_me.exe
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-400"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Photo and basic info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative group">
                <div className="w-64 h-64 mx-auto lg:mx-0 relative">
                  {/* Glitch effect border */}
                  <div className="absolute inset-0 border-2 border-green-400 transform rotate-1 opacity-50 group-hover:rotate-2 transition-transform"></div>
                  <div className="absolute inset-0 border-2 border-blue-400 transform -rotate-1 opacity-50 group-hover:-rotate-2 transition-transform"></div>
                  
                  {/* Photo placeholder */}
                  <div className="relative w-full h-full bg-gradient-to-br from-green-400/20 to-blue-400/20 border border-green-500/30 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 border border-green-500/30 p-4 rounded">
                  <div className="text-2xl font-bold text-green-400 font-mono">
                    {personalInfo.skills.length}+
                  </div>
                  <div className="text-gray-400 text-sm">Skills</div>
                </div>
                <div className="bg-black/50 border border-blue-500/30 p-4 rounded">
                  <div className="text-2xl font-bold text-blue-400 font-mono">15+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Bio and details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-black/50 border border-green-500/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">
                  $ cat bio.txt
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {personalInfo.bio}
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-green-400 font-mono">Contact:</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-black/50 border border-blue-500/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold text-blue-400 mb-4 font-mono">
                  $ ./skills --list
                </h3>
                <div className="space-y-3">
                  {personalInfo.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: index * 0.02, duration: 0.8 }} // Much faster skill animations
                      viewport={{ once: true }}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 font-mono text-sm">
                          {skill.name}
                        </span>
                        <span className="text-green-400 font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.02, duration: 0.8 }} // Much faster skill bar animations
                          viewport={{ once: true }}
                          className={`h-full rounded transition-all duration-300 ${
                            hoveredSkill === skill.name
                              ? 'bg-green-400 shadow-lg shadow-green-400/50'
                              : 'bg-gradient-to-r from-green-500 to-blue-500'
                          }`}
                        />
                      </div>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 mt-1 px-2 py-1 bg-black border border-green-500/30 rounded text-xs text-green-300 whitespace-nowrap z-10"
                        >
                          {skill.category}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
