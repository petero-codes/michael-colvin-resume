import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        
        <div className="footer-content">
          <h2 className="footer-title">Let's build together</h2>
          <p className="footer-subtitle">
            Open to new opportunities in visual intelligence architectures. Feel free to reach out.
          </p>
          
          <a href="mailto:michael.colvin@email.com" className="btn btn-primary footer-cta">
            Get In Touch
          </a>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <div className="logo-icon-small">MC</div>
            <span className="logo-text-small">&copy; {currentYear} Michael Colvin. All rights reserved.</span>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/michaelcolvin" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/michaelcolvin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:michael.colvin@email.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
