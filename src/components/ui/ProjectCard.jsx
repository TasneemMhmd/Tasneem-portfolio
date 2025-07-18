// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        {project.featured && <div className="featured-badge">Featured</div>}

        <div className="project-links">
          {project.sourceLink && (
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code"
            >
              <FiGithub />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="description">{project.description}</p>

        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {project.challenges && (
          <div className="challenges">
            <strong>Key Challenge:</strong> {project.challenges}
          </div>
        )}
        {project.learningFocus && (
          <div className="challenges">
            <strong>Learning Focus:</strong> {project.learningFocus}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
