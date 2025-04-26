import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
const Hero = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                'Front-end Developer',
                'React.js Specialist',
            ],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
            backDelay: 1500
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Tasneem Mohamed</h1>
                    <h2>
                        <span className="accent">I'm a </span>
                        <span className="typed-text" ref={typedRef}></span>
                    </h2>
                    <p>Turning ideas into seamless digital experiences</p>

                    <div className="hero-buttons">
                        <motion.a
                            href="#projects"
                            className="btn primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="social-icons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <motion.a
                        href="https://github.com/TasneemMhmd"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                    >
                        <i className="fab fa-github"></i>
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/tasneem-mohamed58"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                    >
                        <i className="fab fa-linkedin"></i>
                    </motion.a>
                    <motion.a
                        href="https://gitlab.com/Tasneem56"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                    >
                        <i className="fab fa-gitlab"></i>
                    </motion.a>
                </motion.div>
            </div>

            <div className="scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <i className="fas fa-chevron-down"></i>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
