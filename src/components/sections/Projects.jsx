import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import { FaChevronDown } from "react-icons/fa";

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const [visibleCount, setVisibleCount] = useState(6);
    const sectionRef = useRef(null);

    const handleFilterChange = (type) => {
        setFilter(type);
        setVisibleCount(6);
    };

    const filteredProjects =
        filter === "all"
            ? projectsData
            : projectsData.filter((project) => project.category === filter);

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    const isAllShown = visibleCount >= filteredProjects.length;

    const handleToggle = () => {
        if (isAllShown) {
            setVisibleCount(6);
            sectionRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
            setVisibleCount((prev) => prev + 6);
        }
    };

    return (
        <section id="projects" className="projects-section" ref={sectionRef}>
            <div className="container">

                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2>
                        My <span className="accent">Projects</span>
                    </h2>
                    <p>Recent work I've built with passion</p>
                </motion.div>

                <motion.div className="filter-buttons">
                    {["all", "erp", "web", "ui", "mini"].map((type) => (
                        <button
                            key={type}
                            className={filter === type ? "active" : ""}
                            onClick={() => handleFilterChange(type)}
                        >
                            {type === "all" && "All Projects"}
                            {type === "erp" && "ERP Systems"}
                            {type === "web" && "Web Apps"}
                            {type === "ui" && "UI Projects"}
                            {type === "mini" && "Mini-Projects"}
                        </button>
                    ))}
                </motion.div>

                <motion.div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </motion.div>

                {filteredProjects.length > 6 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={handleToggle}
                            className="show-more-btn"
                        >
                            <span>{isAllShown ? "Show Less" : "Show More"}</span>
                            <FaChevronDown
                                className={`show-more-icon ${isAllShown ? "rotated" : ""}`}
                            />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;