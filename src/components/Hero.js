import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const Hero = () => (
  <div className="hero" aria-label="Introduction">
    <div className="hero-bg-pattern" aria-hidden="true" />
    <div className="hero-content">
      <motion.p
        className="hero-greeting"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Hi, I'm
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {resumeData.name}
      </motion.h1>
      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        {resumeData.tagline}
      </motion.p>
      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <a href="#resume" className="btn btn-primary">View Experience</a>
        <a href="#contact" className="btn btn-outline">Get in Touch</a>
      </motion.div>
      <motion.div
        className="hero-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="hero-link-sep" aria-hidden="true">·</span>
        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="hero-link-sep" aria-hidden="true">·</span>
        <a href={resumeData.contact.Medium} target="_blank" rel="noopener noreferrer">Medium</a>
      </motion.div>
    </div>
  </div>
);

export default Hero;
