import { useState, useEffect } from 'react';
import { MatrixBackground } from "@/components/MatrixBackground";
import { TerminalNav } from "@/components/TerminalNav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize the portfolio immediately for instant loading
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Handle scroll-based navigation
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? '' : section);
        if (element || section === 'home') {
          const top = section === 'home' ? 0 : element!.offsetTop;
          const bottom = section === 'home' ? window.innerHeight : top + element!.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-400 font-mono">Initializing portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Matrix background effect */}
      <MatrixBackground />
      
      {/* Terminal navigation */}
      <TerminalNav currentSection={currentSection} onNavigate={handleNavigate} />
      
      {/* Main content */}
      <main className="relative" style={{ zIndex: 10 }}>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* About Section */}
        <AboutSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;