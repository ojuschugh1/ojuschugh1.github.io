import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const Resume = () => {
  return (
    <section id="Resume">
    <div>
      <h2 className="section-title">Work Experience</h2>
      {resumeData.workExperience.map((exp, index) => (
        <motion.div
          key={index}
          className="experience-item"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <h3>{exp.title} @ {exp.company}</h3>
          <span>{exp.period}</span>
          <ul>
            {exp.details.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      <h2 className="section-title">Education</h2>
      {resumeData.education.map((edu, index) => (
        <motion.div
          key={index}
          className="education-item"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <h3>{edu.degree}</h3>
          <span>{edu.institution} | {edu.period}</span>
          <p>{edu.details}</p>
        </motion.div>
      ))}

      <h2 className="section-title">Certifications</h2>
      <motion.ul
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {resumeData.certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </motion.ul>

      <h2 className="section-title">Achievements</h2>
      <motion.ul
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {resumeData.achievements.map((ach, index) => (
          <li key={index}>{ach}</li>
        ))}
      </motion.ul>

      <h2 className="section-title">Hobbies</h2>
      <motion.ul
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {resumeData.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </motion.ul>
    </div>
    </section>
  );
};

export default Resume;
