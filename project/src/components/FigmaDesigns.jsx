import React from 'react';
import { motion } from 'framer-motion';
import { FaFigma } from 'react-icons/fa';
import figmaDesignImg from '../assets/figma-design.svg';

const designsData = [
    {
        id: '01',
        title: 'Figma Design of Redbus and Book My Show',
        description: 'A detailed structural layout and visual interface created in Figma, capturing the user experience and design flow for modern ticket booking web applications.',
        image: 'https://res.cloudinary.com/dgg85vi0a/image/upload/v1776426325/Screenshot_2026-04-17_170731_uvmh2z.png',
        link: 'https://www.figma.com/design/XfzKMzydICqBoPDdDhPd0T/Untitled?node-id=0-1&t=RpRkPpuKcMyu9eb5-1',
    },
    {
        id: '02',
        title: 'E-commerce Website Design',
        description: 'A completely original e-commerce interface built from scratch. Rather than relying on clones or templates, this design represents my personal creative process—embracing raw, authentic ideas while focusing on functional user flows and unique structuring.',
        image: 'https://res.cloudinary.com/dgg85vi0a/image/upload/v1776427088/Screenshot_2026-04-17_172256_lfircl.png',
        link: 'https://www.figma.com/design/62UCKixdwueIwXk4GzYCrC/ecommercewebsite-design?node-id=0-1&t=UvEeVAZZpTsbWFAt-1',
    },
    {
        id: '03',
        title: 'BillEase Project Design',
        description: 'An original, bespoke dashboard and billing interface created entirely from my own conceptualization. This raw, custom design dives deep into personal design philosophy, steering clear of standard templates to ensure an authentic and highly functional financial tool experience.',
        image: 'https://res.cloudinary.com/dgg85vi0a/image/upload/v1776427847/Screenshot_2026-04-17_174026_bjaed3.png',
        link: 'https://www.figma.com/design/NaDY36eqxDZNLVHoA0Cqsz/billease-project?node-id=7-18&t=Nd8rDGZqNa60CUIK-1',
    },
    {
        id: '04',
        title: 'Edzo E-Commerce Prototype',
        description: 'A fully conceptualized e-commerce prototype born entirely from imagination. This interactive design maps out a seamless, custom shopping experience—demonstrating innovative user journeys, clean layouts, and a purely original take on modern online retail.',
        image: 'https://res.cloudinary.com/dgg85vi0a/image/upload/v1776428677/Screenshot_2026-04-17_175421_zclrgm.png',
        link: 'https://www.figma.com/proto/WbdDXgocReEKjQfS5zgrTz/edzo--College-?page-id=4297%3A49433&node-id=4462-25957&starting-point-node-id=4462%3A25957&t=0xbMjIURQgO33VQi-1',
    },
    {
        id: '05',
        title: 'Medical Website Design',
        description: 'A clean and professional medical website layout designed to streamline patient appointments, with clear navigation and essential healthcare service sections.',
        image: 'https://res.cloudinary.com/dgg85vi0a/image/upload/v1776486645/Screenshot_2026-04-18_095524_hqzods.png',
        link: 'https://www.figma.com/design/XtKHk9ncvfpAby69E4B51B/Untitled?node-id=0-1&t=zn4Yc8WGz65nnVWS-1',
    }
];

const FigmaDesigns = () => {
    return (
        <section id="figmadesigns" style={{ padding: '4rem 0', background: 'transparent' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <linearGradient id="figma-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop stopColor="#F24E1E" offset="0%" />
                        <stop stopColor="#FF7262" offset="25%" />
                        <stop stopColor="#A259FF" offset="50%" />
                        <stop stopColor="#1ABCFE" offset="75%" />
                        <stop stopColor="#0ACF83" offset="100%" />
                    </linearGradient>
                </svg>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.8rem',
                        marginBottom: '1rem'
                    }}>
                        <span style={{ width: '12px', height: '1px', background: 'var(--accent-primary)' }}></span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>UI / UX</span>
                        <span style={{ width: '12px', height: '1px', background: 'var(--accent-primary)' }}></span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1rem' }}>
                        Figma Designs<span style={{ color: 'var(--accent-primary)' }}>.</span>
                    </h2>
                </div>

                <div className="table-container" style={{ overflowX: 'auto', paddingBottom: '1rem', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                    <style>{`
                        .table-container::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 1.2rem', minWidth: '800px', border: 'none' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: 'none' }}>
                                <th style={{ padding: '0 1.5rem', fontWeight: 600, border: 'none' }}>Preview</th>
                                <th style={{ padding: '0 1.5rem', fontWeight: 600, border: 'none' }}>Project Details</th>
                                <th style={{ padding: '0 1.5rem', fontWeight: 600, textAlign: 'center', border: 'none' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{ border: 'none' }}>
                            {designsData.map((design, index) => (
                                <motion.tr
                                    key={design.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        background: 'var(--bg-secondary)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        border: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.transform = 'scale(1.01)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    {/* Preview Column */}
                                    <td style={{ padding: '1.5rem', borderRadius: '16px 0 0 16px', width: '250px', verticalAlign: 'middle', border: 'none', borderBottom: 'none' }}>
                                        <div style={{ width: '220px', height: '130px', borderRadius: '8px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <img src={design.image} alt={design.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                            <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'rgba(26, 29, 21, 0.9)', color: 'var(--accent-primary)', padding: '0.2rem 0.6rem', borderRadius: '100px', fontSize: '0.55rem', fontWeight: 800, border: '1px solid rgba(163, 230, 53, 0.2)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                <FaFigma /> PROTOTYPE
                                            </div>
                                        </div>
                                    </td>

                                    {/* Project Details Column */}
                                    <td style={{ padding: '1.5rem', verticalAlign: 'middle', border: 'none', borderBottom: 'none' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{design.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '600px' }}>
                                            {design.description}
                                        </p>
                                    </td>

                                    {/* Action Column */}
                                    <td style={{ padding: '1.5rem', borderRadius: '0 16px 16px 0', textAlign: 'center', width: '200px', verticalAlign: 'middle', border: 'none', borderBottom: 'none' }}>
                                        <a
                                            href={design.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.6rem',
                                                padding: '0.8rem 1.8rem',
                                                borderRadius: '8px',
                                                textDecoration: 'none',
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                color: 'var(--text-primary)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                                transition: 'all 0.3s ease',
                                                whiteSpace: 'nowrap'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                            }}
                                        >
                                            <FaFigma style={{ fill: 'url(#figma-grad)', fontSize: '1.2rem' }} /> VIEW
                                        </a>
                                    </td>
                                </motion.tr>
                    ))}
                        </tbody>
                    </table>
                                </div>
            </div>
                    </section>
                    );
};

                    export default FigmaDesigns;
