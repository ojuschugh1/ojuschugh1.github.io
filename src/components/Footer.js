import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <motion.div
        className="footer-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} OJUS CHUGH. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
