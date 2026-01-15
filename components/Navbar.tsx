
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <span className="font-heading font-bold text-xl tracking-tighter text-glow text-cyan-400">
          SJR.
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Expertise</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <a 
          href="mailto:contact@shahriarrafi.com" 
          className="px-5 py-2 glass rounded-full text-xs font-semibold hover:bg-cyan-500/10 transition-all"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
