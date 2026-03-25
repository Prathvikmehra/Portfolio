import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="card"
        style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}
      >
        <h2>About Me</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          I am a developer with a keen eye for design and a passion for building seamless digital solutions.
          I enjoy turning complex problems into simple, beautiful, and intuitive interface designs.
          When I'm not coding, you can find me exploring new technologies or refining my craft.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
