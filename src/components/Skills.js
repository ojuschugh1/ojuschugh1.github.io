import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const Skills = () => {
  return (
    <section id="skills">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Key Skills</h2>
        <ul>
          {resumeData.keySkills.map((skill, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#00bcd4" }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Skills;
