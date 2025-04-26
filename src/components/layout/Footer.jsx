import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/tasneem-mohamed58/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/TasneemMhmd",
      label: "GitHub",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/201066587314",
      label: "WhatsApp",
    },
    {
      icon: <FaFacebook />,
      url: "https://web.facebook.com/Nemaaa.Mohamed",
      label: "Facebook",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-logo">Tasneem Mohamed</div>
          <p className="footer-tagline">Frontend Developer</p>
        </motion.div>
        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="footer-social-title">Connect With Me</h3>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        © {currentYear} Tasneem Mohamed. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
