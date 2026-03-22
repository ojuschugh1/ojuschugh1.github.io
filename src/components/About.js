import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const About = () => (
  <div className="section-wrapper" id="about">
    <div className="section-inner">
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="section-title">About <span className="title-accent">Me</span></h2>
      </motion.div>
      <div className="about-content">
        <motion.div
          className="about-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p>{resumeData.professionalSummary}</p>
        </motion.div>
        <div className="about-highlights">
          {[
            { num: "Amazon", label: "Current Role" },
            { num: "3+", label: "Years Exp" },
            { num: "GSoC", label: "Alum '23" },
            { num: "LF", label: "Fellow '25" }
          ].map((item, i) => (
            <motion.div
              className="highlight-item"
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="highlight-number">{item.num}</span>
              <span className="highlight-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
