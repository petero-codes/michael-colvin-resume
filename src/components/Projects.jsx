import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Maximize, Cpu, FolderOpen } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Real-Time Object Detection Engine",
    description: "Developed a high-performance YOLO-based model capable of detecting multiple objects in high-definition video streams with minimal latency.",
    icon: <Maximize size={24} />,
    tags: ["Python", "PyTorch", "YOLOv8", "CUDA", "OpenCV"],
    metrics: "Maintained 60fps inference speed with 94% mAP.",
    links: {
      github: "https://github.com/michaelcolvin/rtod",
      live: "#"
    }
  },
  {
    id: 2,
    title: "Industrial Image Segmentation",
    description: "Designed a lightweight U-Net architecture to perform robust image segmentation for industrial anomaly and defect detection.",
    icon: <Cpu size={24} />,
    tags: ["TensorFlow", "U-Net", "Data Augmentation", "Docker"],
    metrics: "Improved defect detection accuracy by 18%.",
    links: {
      github: "https://github.com/michaelcolvin/industrial-seg",
      live: "#"
    }
  },
  {
    id: 3,
    title: "Vision Analytics Dashboard",
    description: "Built an end-to-end pipeline that transforms raw video feeds into actionable business insight dashboards using tracking algorithms.",
    icon: <Database size={24} />,
    tags: ["Python", "React", "OpenCV", "AWS", "FastAPI"],
    metrics: "Processes over 5TB of video data daily.",
    links: {
      github: "https://github.com/michaelcolvin/vision-analytics",
      live: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="section-label">
          <FolderOpen size={16} className="label-icon" /> Open Source Projects
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world applications of visual intelligence and machine learning</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href={project.links.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-metrics">
                <span className="metric-arrow">▸</span> {project.metrics}
              </div>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="skill-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
