import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';

interface Project {
  title: string;
  image: string;
  liveLink: string;
  sourceCode: string;
  description: string;
}

interface MatrixProjectCardProps {
  project: Project;
  index: number;
}

export const MatrixProjectCard = ({ project, index }: MatrixProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.4 }} // Much faster stagger and duration
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glitch effect borders */}
      <div className="absolute inset-0 border border-green-400/50 transform transition-transform duration-300 group-hover:rotate-1 group-hover:scale-105"></div>
      <div className="absolute inset-0 border border-blue-400/30 transform transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-105"></div>
      
      {/* Main card */}
      <div className="relative bg-black/80 border border-green-500/30 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:bg-black/90">
        {/* Image section */}
        <div className="relative h-48 overflow-hidden bg-gray-900">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-110 brightness-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              // Fallback to placeholder
              e.currentTarget.src = '/placeholder.svg';
              setImageLoaded(true);
            }}
          />
          
          {/* Terminal-style project number */}
          <div className="absolute top-2 left-2 bg-black/80 border border-green-500/50 px-2 py-1 rounded text-xs font-mono text-green-400">
            [{String(index + 1).padStart(2, '0')}]
          </div>
        </div>

        {/* Content section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors font-mono">
              {project.title}
            </h3>
            <div className="flex space-x-2">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-green-400 hover:text-green-300 transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </motion.a>
              <motion.a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="text-blue-400 hover:text-blue-300 transition-colors"
                title="Source Code"
              >
                <Code size={18} />
              </motion.a>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Terminal-style action buttons */}
          <div className="flex space-x-3">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-3 py-2 bg-green-500/20 border border-green-500 text-green-400 text-xs font-mono rounded hover:bg-green-500/30 transition-colors text-center"
            >
              {'>'} run demo
            </motion.a>
            <motion.a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-3 py-2 bg-blue-500/20 border border-blue-500 text-blue-400 text-xs font-mono rounded hover:bg-blue-500/30 transition-colors text-center"
            >
              {'>'} view code
            </motion.a>
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-lg pointer-events-none"
        />
      </div>
    </motion.div>
  );
};
