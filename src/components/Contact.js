import React from "react";
import { motion } from "framer-motion";
import resumeData from "../resumeData";

const Contact = () => {
  return (
    <section id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Contact</h2>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
        </p>
        <p><strong>Location:</strong> {resumeData.contact.location}</p>
        <p>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>{" | "}
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>{" | "}
          <a href={resumeData.contact.GSoC} target="_blank" rel="noopener noreferrer">GSoC</a>{" | "}
          <a href={resumeData.contact.Medium} target="_blank" rel="noopener noreferrer">Medium</a>{" | "}
          <a href={resumeData.contact.website} target="_blank" rel="noopener noreferrer">Website</a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
