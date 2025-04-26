import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Work <span className="accent">Experience</span></h2>
                    <p>My professional journey</p>
                </motion.div>

                <div className="timeline">
                    {experienceData?.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{item.company}</h3>
                                <span className="company-location">
                                            <FaMapMarkerAlt className="icon" /> {item.location}
                                        </span>
                                <div className="timeline-date">{item.period}</div>
                                <h3 className="timeline-date">{item.type}</h3>
                                <div className="timeline-role">{item.role}</div>
                                <ul className="timeline-description">
                                    {item.responsibilities?.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                                <div className="timeline-tech">
                                    {item.technologies?.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;