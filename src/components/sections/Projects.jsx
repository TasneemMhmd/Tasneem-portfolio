import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
const Projects = () => {
    const [filter, setFilter] = useState('all');
  
    const filteredProjects = filter === 'all' 
      ? projectsData 
      : projectsData.filter(project => project.category === filter);
  
    return (
      <section id="projects" className="projects-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>My <span className="accent">Projects</span></h2>
            <p>Recent work I've built with passion</p>
          </motion.div>
  
          <motion.div
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['all', 'erp', 'web', 'ui'].map((filterType) => (
              <button
                key={filterType}
                className={filter === filterType ? 'active' : ''}
                onClick={() => setFilter(filterType)}
              >
                {filterType === 'all' && 'All Projects'}
                {filterType === 'erp' && 'ERP Systems'}
                {filterType === 'web' && 'Web Apps'}
                {filterType === 'ui' && 'UI Projects'}
              </button>
            ))}
          </motion.div>
  
          <motion.div
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Projects;
