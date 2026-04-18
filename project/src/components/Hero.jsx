import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube, FaVideo } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
    const roles = ["UI/UX Designer", "MERN Stack Developer", "Problem Solver"];
    const [currentRoleIdx, setCurrentRoleIdx] = React.useState(0);
    const [displayText, setDisplayText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    React.useEffect(() => {
        const handleTyping = () => {
            const currentFullText = roles[currentRoleIdx];

            if (isDeleting) {
                setDisplayText(currentFullText.substring(0, displayText.length - 1));
            } else {
                setDisplayText(currentFullText.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === currentFullText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIdx]);

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--nav-height)'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4rem',
                maxWidth: '1200px',
                width: '100%',
                flexWrap: 'wrap-reverse',
            }}>
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1 1 500px' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>
                            Welcome to my world
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                        fontWeight: 900,
                        lineHeight: 1,
                        marginBottom: '1.5rem',
                        fontFamily: 'var(--font-main)',
                        background: 'none',
                        color: 'var(--text-primary)',
                        webkitTextFillColor: 'initial'
                    }}>
                        Hi, I'm <br />
                        <span style={{ color: 'var(--text-primary)' }}>Prathvik</span>
                        <span style={{ color: 'var(--accent-primary)' }}>.</span>
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '1px', background: 'var(--text-secondary)' }}></div>
                        <p style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--accent-primary)', fontFamily: 'monospace', margin: 0 }}>
                            {displayText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                                style={{ color: 'var(--accent-primary)', marginLeft: '2px', fontSize: '1.6rem', position: 'relative', top: '2px' }}
                            >
                                |
                            </motion.span>
                        </p>
                    </div>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        maxWidth: '550px',
                        marginBottom: '2.5rem'
                    }}>
                        Building <strong style={{ color: 'var(--text-primary)' }}>fast, scalable MERN apps</strong> with clean UI — from zero to deployed.
                        Passionate about crafting premium digital experiences and solving complex problems.
                    </p>

                    <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                        <RouterLink to="/projects" style={{ textDecoration: 'none' }}>
                            <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', borderRadius: '8px' }}>
                                VIEW FULL PROJECTS <span style={{ fontSize: '1.2rem' }}>→</span>
                            </button>
                        </RouterLink>
                        <a href="https://drive.google.com/file/d/1lANlqw5v7I33wjM28_Li4wMeZmIB0gmB/view" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-secondary" style={{ padding: '1rem 2.5rem', borderRadius: '8px' }}>
                                VIEW RESUME
                            </button>
                        </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Find me on</span>
                        <div style={{ display: 'flex', gap: '0.8rem' }}>
                            {[
                                { icon: <FaGithub />, link: 'https://github.com/Prathvikmehra', color: '#ffffff' },
                                { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/prathvik-mehra-9a3398379/', color: '#0A66C2' },
                                { icon: <SiLeetcode />, link: 'https://leetcode.com/u/phantomleo/', color: '#FFA116' },
                                { icon: <FaYoutube />, link: 'https://www.youtube.com/@Prathvikmehra-ct3rs', color: '#FF0000' },
                                { icon: <FaXTwitter />, link: 'https://x.com/prathvik2345', color: '#ffffff' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-secondary)',
                                        fontSize: '1.2rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = social.color;
                                        e.currentTarget.style.color = social.color;
                                        e.currentTarget.style.background = `${social.color}1a`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Profile Image with Floating Badges */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'relative', padding: '2rem' }}
                >
                    {/* Main Image Container */}
                    <div style={{
                        position: 'relative',
                        width: 'clamp(280px, 40vw, 420px)',
                        height: 'clamp(280px, 40vw, 420px)',
                        borderRadius: '50%',
                        border: '1px solid rgba(163, 230, 53, 0.2)',
                        padding: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {/* Circular Dotted Ring (Visual Decorative) */}
                        <div style={{
                            position: 'absolute',
                            inset: '-10px',
                            borderRadius: '50%',
                            border: '1px dashed rgba(163, 230, 53, 0.3)',
                            animation: 'spin 20s linear infinite'
                        }}></div>

                        <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--bg-secondary)',
                            boxShadow: '0 0 40px rgba(0,0,0,0.5)',
                            background: 'var(--bg-secondary)'
                        }}>
                            <img src={profilePic} alt="Prathvik" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        {/* Floating Badge: Location */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                top: '15%',
                                left: '-20px',
                                background: 'rgba(26, 29, 21, 0.9)',
                                backdropFilter: 'blur(10px)',
                                padding: '0.6rem 1rem',
                                borderRadius: '100px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                                zIndex: 10
                            }}
                        >
                            <span style={{ fontSize: '0.9rem' }}>📍</span>
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.05em' }}>AHMEDABAD, IN</span>
                        </motion.div>

                        {/* Availability Spinning Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            style={{
                                position: 'absolute',
                                bottom: '10%',
                                right: '-30px',
                                width: '120px',
                                height: '120px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10
                            }}
                        >
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                animation: 'spin 15s linear infinite'
                            }}>
                                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                                    <path
                                        id="circlePath"
                                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        fill="none"
                                    />
                                    <text style={{ fontSize: '6.5px', fontWeight: 800, fill: 'var(--accent-primary)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                        <textPath xlinkHref="#circlePath">
                                            • OPEN TO OPPORTUNITIES • AVAILABLE FOR HIRE
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div style={{
                                position: 'absolute',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--accent-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#000',
                                fontSize: '1rem',
                                fontWeight: 900
                            }}>
                                P
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)'
                }}
            >
                <span style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.8 }}>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }}
                ></motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
