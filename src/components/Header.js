import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
// Determine active section
const sections = ['about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
     <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-text">A.Navaneetha</span>
          <span className="logo-subtitle">AI & Data Science Student</span>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''} 
                onClick={closeMenu}
              >
                <span className="nav-text">About</span>
                <span className="nav-indicator"></span>
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeSection === 'skills' ? 'active' : ''} 
                onClick={closeMenu}
              >
                <span className="nav-text">Skills</span>
                <span className="nav-indicator"></span>
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? 'active' : ''} 
                onClick={closeMenu}
              >
                <span className="nav-text">Experience</span>
                <span className="nav-indicator"></span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''} 
                onClick={closeMenu}
              >
                <span className="nav-text">Projects</span>
                <span className="nav-indicator"></span>
              </a>
            </li>
            <li>
              <a 
                href="#awards" 
                className={activeSection === 'achievements' ? 'active' : ''} 
                onClick={closeMenu}
              >
                <span className="nav-text">Achievements</span>
                <span className="nav-indicator"></span>
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''} 
                onClick={closeMenu}
              >
                <span className="nav-text">Contact</span>
                <span className="nav-indicator"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="header-glow"></div>
    </header>
  );
}
