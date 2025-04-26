import React from "react";
import { motion } from "framer-motion";
import tasneemImage from "../../assets/images/about.png";
import resumePDF from "../../assets/Tasneem_Mohamed_Mahmoud_resume.pdf";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>
                        About <span className="accent">Me</span>
                    </h2>
                    <p className="subtitle">My journey in web development</p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="image-wrapper">
                            <img
                                src={tasneemImage}
                                alt="Tasneem Mohamed - Frontend Developer"
                                className="profile-image"
                            />
                            <div className="image-border"></div>
                            <div className="image-dots"></div>
                        </div>
                        <motion.div
                            className="image-tech-stack"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <span>React</span>
                            <span>Next</span>
                            <span>JavaScript</span>
                            <span>CSS3</span>
                            <span>HTML5</span>

                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                Front-end Developer
                            </motion.span>
                        </h3>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Hello! I'm <span className="accent-text">Tasneem Mohamed</span>, a passionate front-end developer specializing in React.js. With a keen eye for design and a commitment to clean code, I create digital experiences that are both beautiful and functional.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            My journey includes graduating from ITI with a focus on modern web technologies. I approach each project with attention to detail and a user-first mindset, ensuring accessibility and performance are never compromised.
                        </motion.p>

                        <motion.div
                            className="about-highlights"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <motion.div
                                className="highlight-item"
                                whileHover={{ y: -5 }}
                            >
                                <div className="highlight-icon">
                                    <i className="fas fa-code"></i>
                                </div>
                                <div className="highlight-info">
                                    <h4>Clean Code</h4>
                                    <p>Modular, maintainable, and documented</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="highlight-item"
                                whileHover={{ y: -5 }}
                            >
                                <div className="highlight-icon">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <div className="highlight-info">
                                    <h4>Fast Performance</h4>
                                    <p>Optimized loading & rendering</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="highlight-item"
                                whileHover={{ y: -5 }}
                            >
                                <div className="highlight-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="highlight-info">
                                    <h4>Responsive</h4>
                                    <p>Fully adaptive interfaces</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="about-cta"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <motion.a
                                href="#contact"
                                className="btn primary"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 5px 15px rgba(97, 218, 251, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="fas fa-paper-plane"></i> Contact Me
                            </motion.a>

                            <motion.a
                                href={resumePDF}
                                download="Tasneem_Mohamed_Frontend_Developer_CV.pdf"
                                className="btn secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="fas fa-download"></i> Download CV
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;