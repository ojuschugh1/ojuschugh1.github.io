import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const Writing = () => (
  <div className="section-wrapper" id="writing">
    <div className="section-inner">
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="section-title">
          <span className="title-accent">Writing</span>
        </h2>
        <p className="section-subtitle">
          Essays and technical writing on AI agents, verification, and the systems we build around them.
        </p>
      </motion.div>
      <div className="projects-grid">
        {resumeData.writing.map((piece, index) => (
          <motion.a
            className="project-card"
            key={index}
            href={piece.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="project-card-content">
              <span className="writing-outlet">{piece.outlet}</span>
              <h3>{piece.title}</h3>
              <p>{piece.blurb}</p>
              {piece.tags && (
                <div className="project-tech">
                  {piece.tags.map((tag, idx) => (
                    <span key={idx} className="tech-badge">{tag}</span>
                  ))}
                </div>
              )}
              <span className="project-link-text">Read →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);

export default Writing;
