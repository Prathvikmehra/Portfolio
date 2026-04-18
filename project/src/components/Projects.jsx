import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCode, FaPlay, FaArrowRight, FaYoutube } from 'react-icons/fa';
import cantabilImg from '../assets/cantabil.png';
import stanleyImg from '../assets/stanley.png';
import cutsImg from '../assets/cuts.png';

const projectsData = [
  {
    id: '01',
    title: 'Cantabil Clone',
    category: 'E-COMMERCE CLONE',
    description: 'A pixel-perfect clone of the Cantabil e-commerce website, featuring responsive design and modern UI/UX patterns built with pure HTML & CSS.',
    tags: ['HTML', 'CSS', 'Vite'],
    image: cantabilImg,
    githubLink: 'https://github.com/Prathvikmehra/clone-websites',
    videoLink: 'https://www.youtube.com/@Prathvikmehra-ct3rs',
    liveLink: 'https://sensational-muffin-8dd00f.netlify.app/',
  },
  {
    id: '02',
    title: 'Stanley Clone',
    category: 'LANDING PAGE',
    description: 'A visually stunning landing page clone for Stanley, focusing on product showcase and smooth scroll animations using clean CSS techniques.',
    tags: ['HTML', 'CSS', 'UI/UX'],
    image: stanleyImg,
    githubLink: 'https://github.com/Prathvikmehra/clone-websites',
    videoLink: 'https://www.youtube.com/@Prathvikmehra-ct3rs',
    liveLink: 'https://joyful-croissant-2f8d65.netlify.app/',
  },
  {
    id: '03',
    title: 'Cuts Clothing Clone',
    category: 'FASHION STORE',
    description: 'A clean and minimal clone of the Cuts Clothing website, demonstrating mastery of CSS grid layouts, typography, and responsive design.',
    tags: ['CSS Grid', 'Responsive', 'Flexbox'],
    image: cutsImg,
    githubLink: 'https://github.com/Prathvikmehra/clone-websites',
    videoLink: 'https://www.youtube.com/@Prathvikmehra-ct3rs',
    liveLink: 'https://teal-platypus-27f874.netlify.app/',
  },
];

const gamesData = [
  { title: 'Color Guesser', image: 'https://res.cloudinary.com/dgg85vi0a/image/upload/v1776500654/Screenshot_2026-04-18_135358_hn89u0.png', link: 'https://games-wf1s.vercel.app/', description: 'Test your RGB color knowledge by guessing the correct values in this fun interactive game.' },
  { title: 'Typing Speed', image: 'https://res.cloudinary.com/dgg85vi0a/image/upload/v1776500330/Screenshot_2026-04-18_134806_slkqj3.png', link: 'https://games-o6s5.vercel.app/', description: 'Challenge your WPM and accuracy with this real-time typing speed test and keyboard trainer.' },
  { title: 'Whack-a-Mole', image: 'https://res.cloudinary.com/dgg85vi0a/image/upload/v1776500408/Screenshot_2026-04-18_134916_jucr78.png', link: 'https://games-pvd1.vercel.app/', description: 'Classic arcade fun! Hit those moles as fast as they pop up to reach the highest score.' },
  { title: 'To-Do List', image: 'https://res.cloudinary.com/dgg85vi0a/image/upload/v1776500450/Screenshot_2026-04-18_135037_ybcxzo.png', link: 'https://games-r2dq.vercel.app/', description: 'A sleek and functional productivity app to keep your daily tasks organized and on track.' },
];

const Projects = () => {
    // Only include games in the marquee to remove clones (which link to videos)
    const allGames = gamesData.map((g, i) => ({ 
        id: `G${i}`, 
        title: g.title, 
        image: g.image, 
        demoLink: g.link, 
        description: g.description,
        category: 'MINI GAME' 
    }));

    return (
        <section id="projects" style={{ padding: '8rem 0', background: 'transparent' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '0.8rem', 
                        marginBottom: '1rem' 
                    }}>
                        <span style={{ width: '12px', height: '1px', background: 'var(--accent-primary)' }}></span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>My Works</span>
                        <span style={{ width: '12px', height: '1px', background: 'var(--accent-primary)' }}></span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1rem' }}>
                        Portfolio Showcase<span style={{ color: 'var(--accent-primary)' }}>.</span>
                    </h2>
                </div>

                {/* Projects Grid (The Clones) */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
                    gap: '2.5rem',
                    marginBottom: '8rem'
                }}>
                    {projectsData.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ 
                                background: 'var(--bg-secondary)',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(163, 230, 53, 0.3)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(26, 29, 21, 0.9)', color: 'var(--accent-primary)', padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 800, border: '1px solid rgba(163, 230, 53, 0.2)' }}>
                                    {project.category}
                                </div>
                            </div>
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
                                <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', opacity: 0.8, fontWeight: 600 }}>#{tag}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '1.2rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.75rem', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.8'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}><FaCode /> CODE</a>
                                    <a href={project.videoLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.75rem', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.8'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}><FaYoutube style={{ color: '#FF0000' }} /> VIDEO</a>
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 800, fontSize: '0.75rem', textDecoration: 'none', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateX(3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>LIVE DEMO <FaArrowRight style={{ fontSize: '0.6rem' }} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Games Moving Marquee Section */}
            <div style={{ overflow: 'hidden', padding: '4rem 0', position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900 }}>Arcade Zone<span style={{ color: 'var(--accent-primary)' }}>.</span></h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Classic mini-games — hover to play</p>
                </div>

                <div style={{ display: 'flex', width: 'fit-content' }}>
                    <motion.div 
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        style={{ display: 'flex', gap: '2.5rem', padding: '0 1rem' }}
                    >
                        {/* Duplicate the array for a seamless loop */}
                        {[...allGames, ...allGames].map((item, idx) => (
                            <motion.a 
                                key={idx}
                                href={item.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -10 }}
                                style={{
                                    width: '350px',
                                    flexShrink: 0,
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    display: 'block',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(163, 230, 53, 0.4)'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                            >
                                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
                                    <div style={{ position: 'absolute', bottom: '1rem', left: '1.2rem' }}>
                                        <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: 800 }}>{item.title}</h4>
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
                                        {item.description}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                                        <span style={{ fontSize: '0.65rem', color: 'var(--accent-primary)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>PLAY NOW</span>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(163, 230, 53, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FaPlay style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', marginLeft: '2px' }} />
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
