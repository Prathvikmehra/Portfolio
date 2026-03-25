import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaDatabase } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiFramer, SiNodedotjs, SiC, SiCplusplus, SiMongodb, SiRender } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillsData = [
  // Skills
  { name: 'HTML', icon: <FaHtml5 size={50} color="#E34F26" /> },
  { name: 'CSS', icon: <FaCss3Alt size={50} color="#1572B6" /> },
  { name: 'JavaScript', icon: <FaJs size={50} color="#F7DF1E" /> },
  { name: 'React', icon: <FaReact size={50} color="#61DAFB" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={50} color="#339933" /> },
  { name: 'C', icon: <SiC size={50} color="#A8B9CC" /> },
  { name: 'C++', icon: <SiCplusplus size={50} color="#00599C" /> },
  { name: 'Python', icon: <FaPython size={50} color="#3776AB" /> },
  { name: 'SQL', icon: <FaDatabase size={50} color="#003B57" /> },
  { name: 'MongoDB', icon: <SiMongodb size={50} color="#47A248" /> },

  // Tools
  { name: 'Git', icon: <FaGitAlt size={50} color="#F05032" /> },
  { name: 'VS Code', icon: <VscCode size={50} color="#007ACC" /> },
  { name: 'Vite', icon: <SiVite size={50} color="#646CFF" /> },
  { name: 'Framer', icon: <SiFramer size={50} color="#0055FF" /> },
  { name: 'Render', icon: <SiRender size={50} color="#46E3B7" /> },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills & Tools</h2>
      <div className="grid-skills">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
