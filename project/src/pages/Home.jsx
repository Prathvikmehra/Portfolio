import React from 'react';
import Hero from '../components/Hero';
import AboutSkills from '../components/AboutSkills';
import Projects from '../components/Projects';
import FigmaDesigns from '../components/FigmaDesigns';
import Hackathons from '../components/Hackathons';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

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
      <Projects />
      <FigmaDesigns />
      <Hackathons />
      <Certificates />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
