import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
    return (
        <motion.div
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <motion.div
                className="skill-border"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ backgroundColor: skill.color }}
            />
        </motion.div>
    );
};

export default SkillCard;