import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const commandLines = [
    '> Initializing portfolio...',
    '> Loading personal data...',
    '> Compiling projects...',
    '> Ready to showcase skills...',
  ];

  useEffect(() => {
    if (currentLine >= commandLines.length) {
      // Show main content instantly after command sequence
      setShowMainContent(true);
      return;
    }

    const currentText = commandLines[currentLine];
    
    if (displayedText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, 80); // 80ms per character for commands
      
      return () => clearTimeout(timeout);
    } else {
      // Move to next command immediately
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setDisplayedText('');
      }, 0); // No pause between commands
      
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentLine, commandLines]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Slower, more natural cursor blinking
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <div className="bg-black/80 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm max-w-4xl mx-auto">
          {/* Terminal header */}
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-green-500/30">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">portfolio.exe</span>
            <span className="text-gray-600 text-sm font-mono">×</span>
          </div>

          {/* Terminal content */}
          <div className="font-mono text-left space-y-2 mb-8">
            {/* Show completed command lines */}
            {commandLines.slice(0, currentLine).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-sm"
              >
                {line}
              </motion.div>
            ))}
            
            {/* Show currently typing command */}
            {currentLine < commandLines.length && (
              <div className="text-green-400 text-sm">
                {displayedText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  |
                </span>
              </div>
            )}
            
            {/* Show main content instantly after commands complete */}
            {showMainContent && (
              <>
                <div className="mt-4"></div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white text-3xl md:text-4xl font-bold mt-4"
                >
                  Hello, I'm {personalInfo.name}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-300 text-xl md:text-2xl"
                >
                  {personalInfo.title}
                </motion.div>
              </>
            )}
          </div>

          {/* Action buttons - show instantly with main content */}
          {showMainContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-500/20 border border-green-500 text-green-400 rounded font-mono hover:bg-green-500/30 transition-colors"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {'>'} view_projects.exe
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-500/20 border border-blue-500 text-blue-400 rounded font-mono hover:bg-blue-500/30 transition-colors"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {'>'} about_me.exe
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Scroll indicator */}
        {showMainContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }} // Appear shortly after buttons
            className="mt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-green-400 text-sm font-mono"
            >
              ↓ scroll to explore ↓
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
