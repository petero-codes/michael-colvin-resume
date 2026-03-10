import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <Code2 size={16} /> Welcome to my portfolio
          </div>
          
          <h1 className="hero-title">
            Hi, I'm Michael Colvin<br />
            <span className="hero-subtitle">I build models that build understanding.</span>
          </h1>
          
          <p className="hero-description">
            Computer vision engineer creating AI models that respect data and scale with clarity. High-performance inference is my north star.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="mailto:michael.colvin@email.com" className="btn btn-outline">
              <Code2 size={18} className="btn-icon" /> Tech Stack
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
