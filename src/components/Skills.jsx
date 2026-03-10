import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server, Wrench, Code, Terminal } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: 'vision',
    title: 'Computer Vision',
    icon: <Network size={20} />,
    skills: ['Object Detection', 'Image Segmentation', 'Pose Estimation', 'Video Analysis']
  },
  {
    id: 'ml',
    title: 'Deep Learning',
    icon: <Code size={20} />,
    skills: ['CNNs & ViT', 'Transfer Learning', 'Data Augmentation', 'Neural Optimization']
  },
  {
    id: 'infra',
    title: 'Infrastructure',
    icon: <Server size={20} />,
    skills: ['CUDA', 'Docker', 'AWS ML', 'Edge AI Optimization']
  },
  {
    id: 'tools',
    title: 'Frameworks',
    icon: <Wrench size={20} />,
    skills: ['Python', 'PyTorch & TensorFlow', 'OpenCV', 'NumPy & Pandas']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        <div className="section-label">
          <Terminal size={16} className="label-icon" /> Technical Stack
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Technical Proficiency</h2>
          <p className="section-subtitle">A comprehensive overview of my expertise across various domains.</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="card-tags skill-chips">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
