import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resumeData from "../resumeData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const OpenSource = () => {
  const [expandedRepo, setExpandedRepo] = useState(null);

  const toggle = (index) => {
    setExpandedRepo(expandedRepo === index ? null : index);
  };

  const totalMRs = resumeData.openSourceContributions.reduce(
    (sum, repo) => sum + repo.contributions.length, 0
  );

  return (
    <div className="section-wrapper" id="open-source">
      <div className="section-inner">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="section-title">Open Source <span className="title-accent">Contributions</span></h2>
          <p className="section-subtitle">
            {totalMRs}+ contributions across {resumeData.openSourceContributions.length} projects — from OS kernels to multimedia players.
          </p>
        </motion.div>

        <div className="oss-repos">
          {resumeData.openSourceContributions.map((repo, index) => (
            <motion.div
              className={`oss-repo-card ${expandedRepo === index ? "oss-expanded" : ""}`}
              key={index}
              variants={fadeUp}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <button
                className="oss-repo-header"
                onClick={() => toggle(index)}
                aria-expanded={expandedRepo === index}
              >
                <div className="oss-repo-info">
                  <span className="oss-repo-icon">{repo.icon}</span>
                  <div>
                    <h3 className="oss-repo-name">{repo.repo}</h3>
                    <p className="oss-repo-desc">{repo.description}</p>
                  </div>
                </div>
                <div className="oss-repo-meta">
                  <span className="oss-mr-count">{repo.contributions.length} MR{repo.contributions.length !== 1 ? "s" : ""}</span>
                  <span className={`oss-chevron ${expandedRepo === index ? "oss-chevron-open" : ""}`}>
                    ▾
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {expandedRepo === index && (
                  <motion.div
                    className="oss-contributions"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="oss-contributions-inner">
                      {repo.contributions.map((mr, mrIndex) => (
                        <a
                          href={mr.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="oss-mr-row"
                          key={mrIndex}
                        >
                          <span className="oss-mr-bullet" />
                          <span className="oss-mr-title">{mr.title}</span>
                          <span className="oss-mr-arrow">↗</span>
                        </a>
                      ))}
                      <a
                        href={repo.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="oss-view-repo"
                      >
                        View Repository →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
