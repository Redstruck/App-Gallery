import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalNavProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export const TerminalNav = ({ currentSection, onNavigate }: TerminalNavProps) => {
  const [isTyping, setIsTyping] = useState(false);
  const [currentPath, setCurrentPath] = useState('~');

  const sections = [
    { name: 'about', command: 'about.exe', description: 'Personal information and bio' },
    { name: 'skills', command: 'skills.exe', description: 'Technical skills and proficiency' },
    { name: 'projects', command: 'projects.exe', description: 'Portfolio of applications' },
    { name: 'contact', command: 'contact.exe', description: 'Get in touch' },
  ];

  const handleCommand = (section: string) => {
    setIsTyping(true);
    setCurrentPath(`~/${section}`);
    
    setTimeout(() => {
      onNavigate(section);
      setIsTyping(false);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-green-500/30 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Terminal controls and prompt */}
          <div className="flex items-center space-x-4">
            {/* Terminal controls */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            {/* Terminal prompt */}
            <div className="flex items-center space-x-2 text-green-400 font-mono text-sm">
              <span className="text-green-300">nishad@portfolio</span>
              <span className="text-gray-400">:</span>
              <span className="text-blue-400">{currentPath}</span>
              <span className="text-gray-400">$</span>
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-2 h-4 bg-green-400 inline-block ml-1"
                />
              )}
            </div>
          </div>

          {/* Navigation commands */}
          <div className="flex space-x-6">
            {sections.map((section) => (
              <motion.button
                key={section.name}
                onClick={() => handleCommand(section.name)}
                className={`relative font-mono text-sm transition-colors group ${
                  currentSection === section.name
                    ? 'text-green-400'
                    : 'text-gray-400 hover:text-green-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-1">{'>'}</span>
                {section.command}
                
                {/* Tooltip */}
                <div className="absolute top-full left-0 mt-2 px-2 py-1 bg-black border border-green-500/30 rounded text-xs text-green-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {section.description}
                </div>

                {/* Active indicator */}
                {currentSection === section.name && (
                  <motion.div
                    layoutId="activeCommand"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
