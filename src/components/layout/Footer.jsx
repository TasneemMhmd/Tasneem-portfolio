import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
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
                    className="footer-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="footer-connect-section">
                        <h3 className="connect-title">Connect With Me</h3>
                        <div className="social-icons-wrapper">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="social-icon"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;