import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const About = () => {
  return (
    <section id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About Me</h2>
        <h3>{resumeData.name}</h3>
        <p><strong>{resumeData.tagline}</strong></p>
        <p>{resumeData.professionalSummary}</p>
      </motion.div>
    </section>
  );
};

export default About;
