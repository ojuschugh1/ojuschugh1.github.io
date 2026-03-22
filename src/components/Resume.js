import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const Resume = () => (
  <div className="section-wrapper" id="resume">
    <div className="section-inner">
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="section-title">Work <span className="title-accent">Experience</span></h2>
      </motion.div>

      <div className="timeline">
        {resumeData.workExperience.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            variants={fadeUp}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <span className="company-name">{exp.company}</span>
                {exp.location && <span className="company-location">{exp.location}</span>}
              </div>
              <span className="timeline-period">{exp.period}</span>
              <ul>
                {exp.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="section-header"
        style={{ marginTop: 72 }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="section-title">Education</h2>
      </motion.div>
      <div className="education-grid">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            variants={fadeUp}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h3>{edu.degree}</h3>
            <p className="edu-institution">{edu.institution}</p>
            <span className="edu-period">{edu.period}</span>
            <p className="edu-details">{edu.details}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="section-header"
        style={{ marginTop: 72 }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="section-title">Achievements</h2>
      </motion.div>
      <motion.div
        className="achievements-list"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {resumeData.achievements.map((ach, index) => (
          <div className="achievement-item" key={index}>
            <span className="achievement-icon" aria-hidden="true">✦</span>
            <span>{ach}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Resume;
