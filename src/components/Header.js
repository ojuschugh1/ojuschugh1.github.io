import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Resume", id: "resume" },
  { name: "Open Source", id: "open-source" },
  { name: "Contact", id: "contact" }
];

const Header = () => {
  return (
    <header>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
