import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Senior Computer Vision Engineer",
    company: "TechVision AI Labs",
    location: "Houston, Texas",
    period: "2022 - Present",
    description: "Leading development of scalable visual recognition systems. Working with cutting-edge technologies to build scalable AI solutions.",
    achievements: [
      "Designed and implemented deep learning models for object detection, segmentation, and visual recognition tasks",
      "Built scalable training pipelines for processing large-scale image datasets",
      "Optimized neural network performance using GPU acceleration and distributed training",
      "Implemented Vision Transformer architectures for advanced image classification systems",
      "Improved detection accuracy by 28% through model optimization and data augmentation strategies"
    ],
    tags: ["PyTorch", "Python", "Vision Transformers", "CUDA", "OpenCV"]
  },
  {
    id: 2,
    role: "Computer Vision Engineer",
    company: "DataSight Technologies",
    location: "Austin, Texas",
    period: "2019 - 2022",
    description: "Developed ML models for automated visual inspection and infrastructure processing.",
    achievements: [
      "Built computer vision pipelines using Python, PyTorch, and OpenCV",
      "Implemented image segmentation models to improve feature extraction from complex scenes",
      "Conducted benchmarking experiments to compare neural network architectures",
      "Supported deployment of AI models in cloud environments and optimized for real-time"
    ],
    tags: ["PyTorch", "TensorFlow", "Image Segmentation", "AWS"]
  },
  {
    id: 3,
    role: "Machine Learning Engineer",
    company: "Vision Analytics Group",
    location: "Dallas, Texas",
    period: "2017 - 2019",
    description: "Created real-time video analysis algorithms and data labeling infrastructure.",
    achievements: [
      "Developed image classification and video analysis algorithms for real-time systems",
      "Designed preprocessing pipelines including data cleaning, augmentation, and annotation",
      "Worked closely with engineering teams to integrate vision models into software platforms"
    ],
    tags: ["Python", "Keras", "Video Analysis", "Data Pipelines"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        <div className="section-label">
          <Briefcase size={16} className="label-icon" /> Professional Experience
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">A journey through my professional career and key achievements</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-items">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-icon">
                  <Briefcase size={20} />
                </div>
                
                <div className="timeline-card">
                  <div className="card-header">
                    <div className="role-info">
                      <h3 className="role-title">{exp.role}</h3>
                      <div className="company-info">
                        <span className="company-name">{exp.company}</span>
                      </div>
                      <div className="location-info">{exp.location}</div>
                    </div>
                    <div className="period-badge">
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>
                  
                  <p className="card-description">{exp.description}</p>
                  
                  <ul className="card-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>
                        <span className="bullet">▸</span> {achievement}
                      </li>
                    ))}
                  </ul>

                  {exp.tags && (
                    <div className="card-tags">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
