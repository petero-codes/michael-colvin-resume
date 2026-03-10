import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const education = [
  {
    degree: "Master of Science (MS) in Computer Science",
    concentration: "Computer Vision & Artificial Intelligence",
    school: "University of Texas at Austin",
    year: "2017",
    courses: ["Deep Learning for Visual Recognition", "Machine Learning Algorithms", "Image Processing", "Neural Networks"]
  },
  {
    degree: "Bachelor of Science (BS) in Electrical Engineering",
    concentration: "Embedded Systems & Signal Processing",
    school: "Texas A&M University",
    year: "2015",
    courses: ["Digital Signal Processing", "Embedded Systems", "Image Processing Fundamentals", "Data Structures"]
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        
        <div className="section-label">
          <GraduationCap size={16} className="label-icon" /> Academic Background
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Foundations of computer vision and intelligent systems.</p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="edu-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="edu-icon">
                <GraduationCap size={24} />
              </div>
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-school">{edu.school} — <span className="edu-year">{edu.year}</span></h4>
                <p className="edu-concentration">{edu.concentration}</p>
                <div className="edu-courses">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="skill-tag">{course}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
