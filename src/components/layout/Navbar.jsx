import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? "scrolled" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Tasneem Mohamed
                    </motion.span>
                </Link>

                <div className="nav-controls">
                    <button className="theme-toggle" onClick={toggleDarkMode}>
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    <div
                        className={`menu-toggle ${menuOpen ? "active" : ""}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <motion.ul
                    className={`nav-links ${menuOpen ? "open" : ""}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href="#home" onClick={() => setMenuOpen(false)}>
                            Home
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href="#about" onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href="#skills" onClick={() => setMenuOpen(false)}>
                            Skills
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href="#projects" onClick={() => setMenuOpen(false)}>
                            Projects
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href="#experience" onClick={() => setMenuOpen(false)}>
                            Experience
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href="#education" onClick={() => setMenuOpen(false)}>
                            Education
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </a>
                    </motion.li>
                </motion.ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
