import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const links = [
  { icon: "✉", label: "Email", value: "ojuschugh@gmail.com", href: "mailto:ojuschugh@gmail.com" },
  { icon: "⌨", label: "GitHub", value: "ojuschugh1", href: "https://github.com/ojuschugh1" },
  { icon: "☀", label: "GSoC", value: "2023 Archive", href: "https://summerofcode.withgoogle.com/archive/2023/projects/R3i5iNpL" },
  { icon: "🐧", label: "LFX", value: "Mentorship", href: "https://mentorship.lfx.linuxfoundation.org/project/8ca351b0-168d-4b89-87ec-3a37a3c77cd1" },
  { icon: "M", label: "Medium", value: "@ojuschugh1", href: "https://medium.com/@ojuschugh1" }
];

const Contact = () => (
  <div className="section-wrapper" id="contact">
    <div className="section-inner">
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="section-title">
          Let's <span className="title-accent">Connect</span>
        </h2>
        <p className="section-subtitle">
          Open to collaboration, open source contributions, and interesting conversations.
        </p>
      </motion.div>
      <div className="contact-grid">
        {links.map((item, i) => (
          <motion.a
            href={item.href}
            target={item.href.startsWith("mailto") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="contact-card"
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <span className="contact-icon" aria-hidden="true">{item.icon}</span>
            <span className="contact-label">{item.label}</span>
            <span className="contact-value">{item.value}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);

export default Contact;
