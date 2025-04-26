import React, { useEffect } from "react";
import { FaUserGraduate, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Education & <span className="accent">Certifications</span></h2>
                    <p className="subtitle">My academic journey and professional growth</p>
                </motion.div>

                <div className="education-container">
                    {/* University Education */}
                    <motion.div
                        className="education-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="education-icon">
                            <FaUserGraduate />
                        </div>
                        <div className="education-content">
                            <h3>Bachelor of Computer Science</h3>
                            <div className="education-meta">
                                <span className="institution">Menoufia University, Egypt</span>
                                <span className="date">Oct 2021 - Jul 2024</span>
                            </div>
                            <ul className="education-details">
                                <li>Faculty of Computers and Information</li>
                                <li>Studied web development technologies</li>
                                <li>Studied algorithms and data structures</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        className="education-card"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="education-icon">
                            <FaCertificate />
                        </div>
                        <div className="education-content">
                            <h3>Professional Certifications</h3>
                            
                            <motion.div 
                                className="certification-item"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="certification-header">
                                    <h4>Front-end Web Development</h4>
                                    <span className="certification-badge">ITI Certified</span>
                                </div>
                                <span className="certification-date">Jul 2023 - Sep 2023</span>
                                <ul className="certification-details">
                                    <li>Modern front-end development practices</li>
                                    <li>React.js, Redux, and state management</li>
                                    <li>Responsive design principles</li>
                                </ul>
                            </motion.div>

                            <motion.div 
                                className="certification-item"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="certification-header">
                                    <h4>Advanced React.js</h4>
                                    <span className="certification-badge">Online Course</span>
                                </div>
                                <span className="certification-date">Jun 2024</span>
                                <ul className="certification-details">
                                    <li>React Hooks and Context API</li>
                                    <li>Redux Toolkit for state management</li>
                                    <li>Performance optimization techniques</li>
                                </ul>
                            </motion.div>

                            <motion.div 
                                className="certification-item"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="certification-header">
                                    <h4>Web Development Fundamentals</h4>
                                </div>
                                <span className="certification-date">Feb 2023</span>
                                <ul className="certification-details">
                                    <li>HTML5, CSS3, and Bootstrap5</li>
                                    <li>JavaScript and ES6 features</li>
                                    <li>DOM manipulation and events</li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;