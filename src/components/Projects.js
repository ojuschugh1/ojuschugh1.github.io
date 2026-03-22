import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const Projects = () => (
  <div className="section-wrapper" id="projects">
    <div className="section-inner">
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="section-title">Featured <span className="title-accent">Projects</span></h2>
      </motion.div>
      <div className="projects-grid">
        {resumeData.projects.map((project, index) => (
          <motion.a
            className="project-card"
            key={index}
            href={project.link}
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.technologies && (
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              )}
              <span className="project-link-text">View Project →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
