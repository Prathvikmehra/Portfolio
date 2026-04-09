import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';

import intellipaatPdf from '../assets/intellipaat-certificate.pdf';
import intellipaatImg from '../assets/intellipaat-certificate.png';
import tcsImg from '../assets/tcs-certificate.jpg';
import codingDataImg from '../assets/coding-data-certificate.jpg';
import hackathonPdf from '../assets/hackathon-certificate.pdf';
import claudeCodePdf from '../assets/claude-code-certificate.pdf';

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
    link: claudeCodePdf,
    title: 'Claude Code in Action',
    description: 'Certificate of Completion from Anthropic demonstrating practical proficiency in leveraging advanced AI systems.',
    linkLabel: 'View Certificate',
    type: 'pdf'
  }
];

const PdfPlaceholder = () => (
  <div style={{
    width: '100%',
    height: '100%',
    minHeight: '220px',
    background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(163, 230, 53, 0.05) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid var(--card-border)',
    color: 'var(--text-secondary)'
  }}>
    <FaAward size={64} style={{ color: 'var(--accent-primary)', marginBottom: '1rem', opacity: 0.8 }} />
    <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>Official Credential</span>
    <span style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem' }}>(PDF Document)</span>
  </div>
);

const Certificates = () => {
    return (
        <section id="certificates" className="section">
            <h2>Certifications</h2>
            <div className={`certificates-grid ${certificates.length % 2 !== 0 ? 'odd-layout' : ''}`}>
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        className="card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        style={{
                            padding: '0',
                            overflow: 'hidden',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <div className="cert-media" style={{ flexShrink: 0 }}>
                                {cert.type === 'image' ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <PdfPlaceholder />
                                )}
                            </div>
                            
                            <div className="cert-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{cert.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                    {cert.description}
                                </p>
                                <div style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '0.5rem', 
                                    color: 'var(--text-primary)', 
                                    fontWeight: '600',
                                    padding: '0.6rem 1.2rem',
                                    background: 'rgba(163, 230, 53, 0.1)',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(163, 230, 53, 0.2)',
                                    width: 'fit-content'
                                }}>
                                    <span style={{ color: 'var(--accent-primary)' }}>{cert.linkLabel}</span> <FaExternalLinkAlt size={12} color="var(--accent-primary)" />
                                </div>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
