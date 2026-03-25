import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import certPdf from '../assets/intellipaat-certificate.pdf';
import certImg from '../assets/intellipaat-certificate.png';
import soloImg from '../assets/sololearn-certificate.png';

const certificates = [
  {
    id: 1,
    image: certImg,
    link: certPdf,
    title: 'Intellipaat Certification',
    description: 'Professional Certification in Data Science, Python, and Machine Learning.',
    linkLabel: 'View PDF'
  },
  {
    id: 2,
    image: soloImg,
    link: 'https://www.sololearn.com/certificates/CC-5BOB0ENC',
    title: 'Sololearn – Introduction to C',
    description: 'Certificate CC-5BOB0ENC issued by Sololearn, March 2026.',
    linkLabel: 'View Certificate'
  }
];

const Certificates = () => {
    return (
        <section id="certificates" className="section">
            <h2>Certifications</h2>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'center'
                }}
            >
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        className="card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        style={{
                            textAlign: 'center',
                            cursor: 'pointer',
                            padding: '0',
                            overflow: 'hidden',
                            maxWidth: '420px',
                            width: '100%'
                        }}
                    >
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderBottom: '1px solid var(--card-border)'
                                }}
                            />
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{cert.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                    {cert.description}
                                </p>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600' }}>
                                    {cert.linkLabel} <FaExternalLinkAlt size={14} />
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
