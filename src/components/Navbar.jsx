import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar glass-pill ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <div className="logo-icon">MC</div>
          <span className="logo-text">Michael Colvin</span>
        </a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#experience" className="mobile-only" onClick={() => setMobileMenuOpen(false)}>Experience</a>
        </div>

        <div className="nav-actions">
          <a href="https://github.com/michaelcolvin" target="_blank" rel="noreferrer" className="btn btn-primary compact-btn desktop-only">
            Repo Inside!
          </a>
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
