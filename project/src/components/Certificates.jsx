import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

import intellipaatPdf from '../assets/intellipaat-certificate.pdf';
import intellipaatImg from '../assets/intellipaat-certificate.png';
import tcsImg from '../assets/tcs-certificate.jpg';
import codingDataImg from '../assets/coding-data-certificate.jpg';
import hackathonPdf from '../assets/hackathon-certificate.pdf';
import claudeCodePdf from '../assets/claude-code-certificate.pdf';
import bytebattleImg from '../assets/bytebattle-certificate.png';

const certificates = [
  {
    id: 1,
    image: intellipaatImg,
    link: intellipaatPdf,
    title: 'Intellipaat Certification',
    description: 'Professional Certification covering Data Science, Python, and Machine Learning algorithms.',
    linkLabel: 'View Certificate',
    type: 'image'
  },
  {
    id: 2,
    image: tcsImg,
    link: tcsImg,
    title: 'TCS iON Career Edge',
    description: 'Young Professional course encompassing Communication, Presentation, Soft Skills, and foundational IT capabilities.',
    linkLabel: 'View Certificate',
    type: 'image'
  },
  {
    id: 3,
    image: codingDataImg,
    link: codingDataImg,
    title: 'Sololearn – Coding for Data',
    description: 'Demonstrated theoretical and practical understanding of Data Science concepts through coding and data analysis workflows.',
    linkLabel: 'View Certificate',
    type: 'image'
  },
  {
    id: 4,
    link: hackathonPdf,
    title: 'Elite Hack 1.0 - Finalist',
    description: 'Certificate of Appreciation presented to CortexCrew for outstanding skills, creativity, and development execution.',
    linkLabel: 'View Certificate',
    type: 'pdf'
  },
  {
    id: 5,
    image: bytebattleImg,
    link: bytebattleImg,
    title: 'ByteBattle 2026',
    description: 'Certificate of Participation from Swaminarayan University & InfoTechiezz for The Ultimate Coding Showdown.',
    linkLabel: 'View Certificate',
    type: 'image'
  },
  {
    id: 6,
    link: claudeCodePdf,
    title: 'Claude Code in Action',
    description: 'Certificate of Completion from Anthropic demonstrating practical proficiency in leveraging advanced AI systems.',
    linkLabel: 'View Certificate',
    type: 'pdf'
  }
];

const Certificates = () => {
    return (
        <section id="certificates" style={{ overflow: 'hidden', padding: '8rem 0', position: 'relative', background: 'transparent' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '0.8rem', 
                        marginBottom: '1rem' 
                    }}>
                        <span style={{ width: '12px', height: '1px', background: 'var(--accent-primary)' }}></span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Achievements</span>
                        <span style={{ width: '12px', height: '1px', background: 'var(--accent-primary)' }}></span>
                </div>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1rem' }}>
                    Certifications<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Recognitions & completed programs</p>
            </div>

            <div style={{ display: 'flex', width: 'fit-content' }}>
                 <motion.div 
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        style={{ display: 'flex', gap: '2.5rem', padding: '0 1rem' }}
                    >
                        {/* Duplicate the array for a seamless loop */}
                        {[...certificates, ...certificates].map((cert, idx) => (
                            <motion.a 
                                key={`${cert.id}-${idx}`}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -10 }}
                                style={{
                                    width: '380px',
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
                                <div style={{ position: 'relative', height: '230px', overflow: 'hidden', background: '#e5e7eb' }}>
                                    {cert.type === 'image' ? (
                                        <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    ) : (
                                        <>
                                            <iframe 
                                              src={`${cert.link}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                                              title={cert.title} 
                                              style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }} 
                                              scrolling="no" 
                                              tabIndex="-1"
                                            />
                                            {/* Click capture overlay */}
                                            <div style={{ position: 'absolute', inset: 0, zIndex: 10, background: 'transparent' }} />
                                        </>
                                    )}
                                </div>
                                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '180px' }}>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>{cert.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6, flex: 1 }}>
                                        {cert.description}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                        <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>{cert.linkLabel}</span>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(163, 230, 53, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FaExternalLinkAlt style={{ color: 'var(--accent-primary)', fontSize: '0.7rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
