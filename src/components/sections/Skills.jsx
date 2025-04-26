import React from "react";
import { motion } from "framer-motion";
import SkillsCard from "../ui/SkillsCard";
import { skillsData } from "../../data/skills";

const Skills = () => {
    // Group skills by category
    const frontendSkills = skillsData.filter(
        (skill) => skill.category === "frontend"
    );
    const frameworkSkills = skillsData.filter(
        (skill) => skill.category === "framework"
    );
    const toolSkills = skillsData.filter((skill) => skill.category === "tools");
    const otherSkills = skillsData.filter((skill) => skill.category === "other");

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>
                        My <span className="accent">Skills</span>
                    </h2>
                    <p>Technical expertise and capabilities</p>
                </motion.div>

                <div className="skills-container">
                    <motion.div
                        className="skills-category"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="category-title">Frontend Technologies</h3>
                        <div className="skills-grid">
                            {frontendSkills?.map((skill, index) => (
                                <SkillsCard key={skill.id} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="skills-category"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="category-title">Frameworks & Libraries</h3>
                        <div className="skills-grid">
                            {frameworkSkills?.map((skill, index) => (
                                <SkillsCard key={skill.id} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="skills-category"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h3 className="category-title">Development Tools</h3>
                        <div className="skills-grid">
                            {toolSkills?.map((skill, index) => (
                                <SkillsCard key={skill.id} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="skills-category"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <h3 className="category-title">Integration & Performance</h3>
                        <div className="skills-grid">
                            {otherSkills?.map((skill, index) => (
                                <SkillsCard key={skill.id} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
