import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const OpenSource = () => {
  return (
    <section id="open-source">
    <div>
      <h2 className="section-title">Open Source Contributions</h2>
      <motion.ul
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {resumeData.openSource.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </motion.ul>
    </div>
    </section>
  );
};

export default OpenSource;
