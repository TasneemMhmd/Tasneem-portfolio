import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 992) {
                setMenuOpen(false);
            }
        };


        handleResize();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? "scrolled" : ""} ${darkMode ? "dark-mode" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Tasneem Mohamed
                    </motion.span>
                </Link>

                <div className="nav-controls">
                    <button 
                        className="theme-toggle" 
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    <div
                        className={`menu-toggle ${menuOpen ? "active" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <AnimatePresence>
                    {(menuOpen || window.innerWidth > 992) && (
                        <motion.ul
                            className={`nav-links ${menuOpen ? "open" : ""}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ 
                                opacity: 1, 
                                y: 0,
                                transition: { staggerChildren: 0.1 }
                            }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.id}
                                    custom={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ 
                                        opacity: 1, 
                                        x: 0,
                                        transition: { delay: index * 0.1 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a 
                                        href={`#${link.id}`} 
                                        onClick={closeMenu}
                                        aria-label={`Go to ${link.label} section`}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;