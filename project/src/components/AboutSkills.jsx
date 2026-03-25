import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaDatabase } from 'react-icons/fa';
import { SiVite, SiFramer, SiNodedotjs, SiC, SiCplusplus, SiMongodb, SiRender } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillsData = [
    { name: 'HTML', percentage: 100, icon: <FaHtml5 /> },
    { name: 'React', percentage: 80, icon: <FaReact /> },
    { name: 'CSS', percentage: 100, icon: <FaCss3Alt /> },
    { name: 'Node.js', percentage: 75, icon: <SiNodedotjs /> },
    { name: 'SQL', percentage: 70, icon: <FaDatabase /> },
    { name: 'JavaScript', percentage: 85, icon: <FaJs /> },
    { name: 'MongoDB', percentage: 65, icon: <SiMongodb /> },
    { name: 'Python', percentage: 70, icon: <FaPython /> },
    { name: 'C++', percentage: 60, icon: <SiCplusplus /> },
    { name: 'C', percentage: 60, icon: <SiC /> },
];

const toolsData = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'VS Code', icon: <VscCode /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Render', icon: <SiRender /> },
    { name: 'Framer', icon: <SiFramer /> },
];

const AboutSkills = () => {
    return (
        <section id="about" className="section about-skills-section">
            <div className="about-skills-container">
                {/* Left Column: About */}
                <motion.div
                    className="about-column"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>About Me</h2>
                    <p className="about-text">
                        I am a passionate developer with a keen eye for design and a drive to build seamless digital experiences.
                        I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                        <br /><br />
                        When I'm not coding, I'm exploring new technologies, refining my craft, or working on personal projects that challenge me to learn something new every day.
                    </p>

                    <h3 className="tools-title">Tools I Use</h3>
                    <div className="tools-grid">
                        {toolsData.map((tool) => (
                            <div key={tool.name} className="tool-item">
                                <span className="tool-icon">{tool.icon}</span>
                                <span className="tool-name">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Skills */}
                <motion.div
                    className="skills-column"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>My Skills</h2>
                    <div className="skills-list">
                        {skillsData.map((skill, index) => (
                            <div key={skill.name} className="skill-item">
                                <div className="skill-info">
                                    <span className="skill-name-text">
                                        {skill.icon} {skill.name}
                                    </span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                                <div className="skill-bar-bg">
                                    <motion.div
                                        className="skill-bar-fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percentage}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSkills;
