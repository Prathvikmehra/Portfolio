import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import FigmaDesigns from '../components/FigmaDesigns';
import Hackathons from '../components/Hackathons';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectsPage = () => {
  // Ensure we start at top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: '8rem', minHeight: '100vh', position: 'relative' }}
    >
      <SEO 
        title="Works & Hackathons | Prathvik Portfolio" 
        description="Explore my latest projects, e-commerce clones, UI/UX figma designs, and hackathon winnings. Building the web, one component at a time."
        url="https://prathvik.com/projects"
      />
      
      {/* Small CSS tweak: Page specific header complementing the portfolio */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', marginBottom: '-4rem' }}>
         <Link to="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            color: 'var(--accent-primary)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '2rem',
            transition: 'transform 0.3s ease'
         }}
         onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-5px)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
         >
           <FaArrowLeft /> Back to Home
         </Link>
         <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            All Works<span style={{ color: 'var(--accent-primary)' }}>.</span>
         </h1>
         <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', marginTop: '1rem' }}>
            A deep dive into my clones, designs, games, and competitive coding experiences.
         </p>
      </div>

      {/* The components normally seen on the homepage */}
      <Projects />
      <FigmaDesigns />
      <Hackathons />
      
    </motion.div>
  );
};

export default ProjectsPage;
