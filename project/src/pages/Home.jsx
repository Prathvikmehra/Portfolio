import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import AboutSkills from '../components/AboutSkills';
import SEO from '../components/SEO';

const Projects = lazy(() => import('../components/Projects'));
const FigmaDesigns = lazy(() => import('../components/FigmaDesigns'));
const Hackathons = lazy(() => import('../components/Hackathons'));
const Certificates = lazy(() => import('../components/Certificates'));
const Education = lazy(() => import('../components/Education'));
const Contact = lazy(() => import('../components/Contact'));

const SectionFallback = () => (
  <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
    <span style={{ opacity: 0.7 }}>Loading content...</span>
  </div>
);

const Home = () => {
  return (
    <>
      <SEO 
        title="Prathvik | UI/UX & MERN Developer" 
        description="Welcome to my portfolio! I build fast, scalable MERN apps with premium clean UI. From zero to deployed, solving complex problems."
        url="https://prathvik.com/"
      />
      <Hero />
      <AboutSkills />
      <Suspense fallback={<SectionFallback />}>
        <Projects />
        <FigmaDesigns />
        <Hackathons />
        <Certificates />
        <Education />
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;
