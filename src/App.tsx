import { useState, useEffect } from 'react';
import { MatrixBackground } from './components/MatrixBackground';
import { TerminalNav } from './components/TerminalNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for subtle cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i] === 'home' ? 'hero' : sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    // Map 'skills' command to the 'about' section element
    const elementId =
      section === 'home' ? 'hero' : section === 'skills' ? 'about' : section;
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Custom Cursor Effect */}
      <div
        className="fixed w-6 h-6 border border-green-400/50 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Terminal Navigation */}
      <TerminalNav currentSection={currentSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Sound toggle (optional) */}
      <button
        className="fixed bottom-6 right-6 w-12 h-12 bg-black/80 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-colors z-50"
        title="Toggle sound effects"
      >
        🔊
      </button>
    </div>
  );
};

export default App;