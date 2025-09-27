import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Linkedin, Download, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Redstruck', // Replace with your actual GitHub
      color: 'text-white hover:text-green-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/nishad-raghuvanshi', // Replace with your actual LinkedIn
      color: 'text-blue-400 hover:text-blue-300'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">{'>'}</span> contact.exe
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to connect? Let's build something amazing together.
            </p>
          </motion.div>

          {/* Terminal-style contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }} // Much faster delay
            className="bg-black/80 border border-green-500/30 rounded-lg p-8 backdrop-blur-sm mb-12"
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-green-500/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">contact_info.txt</span>
              <span className="text-gray-600 text-sm font-mono">×</span>
            </div>

            {/* Contact info */}
            <div className="space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }} // Faster delay
                className="flex items-center space-x-4"
              >
                <span className="text-green-400 font-mono">email:</span>
                <div className="flex items-center space-x-3 flex-1">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  >
                    {personalInfo.email}
                  </a>
                  <motion.button
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-green-400 transition-colors"
                    title="Copy email"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }} // Much faster delay
                className="flex items-center space-x-4"
              >
                <span className="text-green-400 font-mono">status:</span>
                <span className="text-white">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available for opportunities
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }} // Much faster delay
                className="flex items-center space-x-4"
              >
                <span className="text-green-400 font-mono">interests:</span>
                <span className="text-gray-300">Software Development, AI/ML, College Applications</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }} // Much faster delay
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/50 border border-gray-600 hover:border-green-500/50 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <social.icon className={`w-8 h-8 ${social.color} transition-colors`} />
                  <div className="text-left">
                    <h3 className={`text-white font-mono transition-colors ${social.name === 'LinkedIn' ? 'group-hover:text-blue-400' : 'group-hover:text-green-400'}`}>
                      {social.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Connect with me on {social.name}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }} // Much faster delay
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={`mailto:${personalInfo.email}?subject=Let's Connect!&body=Hi Nishad, I'd like to connect with you about...`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-green-500/20 border border-green-500 text-green-400 rounded font-mono hover:bg-green-500/30 transition-colors"
            >
              <Mail size={20} />
              <span>{'>'} send_email.exe</span>
            </motion.a>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-500/30 border border-blue-500 text-blue-400 rounded font-mono hover:bg-blue-500/40 transition-colors"
            >
              <span>{'>'} return_to_top.exe</span>
            </motion.button>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }} // Much faster delay
            className="mt-16 pt-8 border-t border-green-500/30"
          >
            <p className="text-gray-500 text-sm font-mono">
              © 2025 {personalInfo.name} | Built with React & Passion
            </p>
            <p className="text-gray-600 text-xs font-mono mt-2">
              {'>'} System status: All systems operational
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
