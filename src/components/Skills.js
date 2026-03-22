import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const labels = {
  languages: "Languages",
  frameworks: "Frameworks",
  cloud: "Cloud & DevOps",
  ai: "AI / ML",
  tools: "Tools"
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const Skills = () => (
  <div className="section-wrapper" id="skills">
    <div className="section-inner">
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="section-title">Skills & <span className="title-accent">Technologies</span></h2>
      </motion.div>
      <div className="skills-categories">
        {Object.entries(resumeData.keySkills).map(([key, skills], i) => (
          <motion.div
            className="skill-category"
            key={key}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h3>{labels[key] || key}</h3>
            <div className="skill-tags">
              {skills.map((skill, idx) => (
                <span className="skill-tag" key={idx}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
