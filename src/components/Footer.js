import React from "react";
import resumeData from "../resumeData";

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-links">
        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={resumeData.contact.Medium} target="_blank" rel="noopener noreferrer">Medium</a>
        <a href={resumeData.contact.GSoC} target="_blank" rel="noopener noreferrer">GSoC</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Ojus Chugh. Built with React.</p>
    </div>
  </footer>
);

export default Footer;
