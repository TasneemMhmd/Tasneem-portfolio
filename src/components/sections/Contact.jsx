import React, { useEffect } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaGitlab,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>Contact <span className="accent">Me</span></h2>
                    <p>Let's connect and discuss potential opportunities</p>
                </div>

                <div className="contact-container" data-aos="fade-up">
                    <div className="contact-grid">
                        <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <div className="contact-text">
                                <h3>Email</h3>
                                <a href="mailto:tassnemm70@gmail.com">
                                    tassnemm70@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="contact-icon">
                                <FaPhone />
                            </div>
                            <div className="contact-text">
                                <h3>Phone</h3>
                                <p>(+2) 01066587314</p>
                            </div>
                        </div>

                        <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-text">
                                <h3>Location</h3>
                                <p>Tanta, Al Gharbiyah, Egypt</p>
                            </div>
                        </div>

                        <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
                            <div className="contact-icon">
                                <FaLinkedin />
                            </div>
                            <div className="contact-text">
                                <h3>LinkedIn</h3>
                                <p>
                                    <a
                                        href="https://www.linkedin.com/in/tasneem-mohamed58/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        tasneemmohamed58
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="contact-item" data-aos="fade-up" data-aos-delay="500">
                            <div className="contact-icon">
                                <FaGithub />
                            </div>
                            <div className="contact-text">
                                <h3>GitHub</h3>
                                <p>
                                    <a
                                        href="https://github.com/TasneemMhmd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        TasneemMhmd
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="contact-item" data-aos="fade-up" data-aos-delay="600">
                            <div className="contact-icon">
                                <FaGitlab />
                            </div>
                            <div className="contact-text">
                                <h3>GitLab</h3>
                                <p>
                                    <a
                                        href="https://gitlab.com/Tasneem56"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Tasneem56
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;