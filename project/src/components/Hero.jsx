import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                padding: '80px 2rem 2rem', /* 80px top = navbar height */
                maxWidth: '100%',          /* override global section maxWidth */
                margin: '0',               /* override global section margin */
            }}
        >
            {/* Two-column layout */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5rem',
                maxWidth: '1100px',
                width: '100%',
                flexWrap: 'wrap',
            }}>

                {/* ── LEFT: Text Content ── */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        flex: '1 1 320px',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    {/* "Hello, I'm" — use <p> NOT <h2> to avoid global h2::after underline bar */}
                    <p style={{
                        color: 'var(--accent-primary)',
                        fontSize: '1.4rem',
                        fontWeight: 600,
                        marginBottom: '0.4rem',
                        letterSpacing: '0.02em',
                    }}>
                        Hello, I'm
                    </p>

                    {/* Name */}
                    <h1 style={{
                        fontSize: 'clamp(3rem, 7vw, 5rem)',
                        marginBottom: '1rem',
                        lineHeight: 1.05,
                    }}>
                        Prathvik
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        maxWidth: '440px',
                        lineHeight: 1.7,
                    }}>
                        A passionate Developer crafting premium digital experiences.
                    </p>

                    {/* Social Icons */}
                    <div style={{ display: 'flex', gap: '1.4rem', marginBottom: '2.2rem' }}>
                        <a
                            href="https://github.com/Prathvikmehra"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.9rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/prathvik-mehra-9a3398379/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.9rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#0077B5'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://leetcode.com/u/phantomleo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.9rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#FFA116'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <SiLeetcode />
                        </a>
                        <a
                            href="https://www.youtube.com/@Prathvikmehra-ct3rs"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.9rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#FF0000'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://x.com/prathvik2345"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.9rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FaXTwitter />
                        </a>
                    </div>

                    {/* CTA Button */}
                    <Link to="projects" smooth={true} duration={500} offset={-70}>
                        <button
                            className="btn btn-primary"
                            style={{ padding: '0.9rem 2.4rem', fontSize: '1.05rem' }}
                        >
                            View My Work
                        </button>
                    </Link>
                </motion.div>

                {/* ── RIGHT: Profile Photo ── */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        flex: '0 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--accent-primary)',
                            boxShadow: '0 0 40px rgba(59, 130, 246, 0.5)',
                            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 70px rgba(59, 130, 246, 0.8)';
                            e.currentTarget.style.transform = 'scale(1.03)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 40px rgba(59, 130, 246, 0.5)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        <img
                            src={profilePic}
                            alt="Prathvik"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                display: 'block',
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Decorative glow blob */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'var(--accent-primary)',
                borderRadius: '50%',
                filter: 'blur(160px)',
                opacity: 0.07,
                zIndex: -1,
                pointerEvents: 'none',
            }} />
        </section>
    );
};

export default Hero;
