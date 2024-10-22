import React from 'react';
import { motion } from 'framer-motion';
import './styles/AnimatedSection.css';

const AnimatedSection = () => {
  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <h1>Hello, I'm Arth Sharma</h1>
        <p>I'm a Full Stack Developer</p>
        <a href="#portfolio" className="cta-button">View My Work</a>
      </div>
    </motion.div>
  );
};

export default AnimatedSection;
