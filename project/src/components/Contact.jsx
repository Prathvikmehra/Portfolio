import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaRegCopy, FaMapMarkerAlt, FaRegCompass } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const [currentTime, setCurrentTime] = useState('');
  const [copyStatus, setCopyStatus] = useState('COPY ADDRESS');

  // Live ticking clock for IST (India Standard Time)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now) + ' IST');
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('prathvikmehra@gmail.com');
    setCopyStatus('COPIED!');
    setTimeout(() => setCopyStatus('COPY ADDRESS'), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    const serviceId = 'service_wg8s5zb';
    const templateId = 'template_x38jahb';
    const publicKey = 'kl5NP5-HpO3EYadlZ';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
          setIsSending(false);
          setSubmitStatus('success');
          formRef.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
      }, (error) => {
          setIsSending(false);
          setSubmitStatus('error');
          console.error("EmailJS Error:", error.text);
      });
  };

  // Common bento box styling
  const bentoBoxStyle = {
    background: 'rgba(20, 22, 30, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '1.25rem',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '0.75rem',
    color: '#fff',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const socialButtonStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '1rem',
    padding: '1.5rem 0',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <section id="contact" style={{ padding: '4rem 2rem' }}>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>

        {/* ── LEFT CARD (FORM) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ ...bentoBoxStyle, flex: '1 1 450px' }}
        >
          {/* Subtle decoration icon */}
          <FaRegCompass style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '2rem', color: 'rgba(255, 255, 255, 0.1)' }} />
          
          <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '0 0 0.5rem 0' }}>Send a Message</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
            Got a project or proposal? Fill out the form.
          </p>

          <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 180px' }}>
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="NAME" 
                  required 
                  style={inputStyle} 
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div style={{ flex: '1 1 180px' }}>
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="EMAIL ADDRESS" 
                  required 
                  style={inputStyle} 
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
            </div>

            <input 
              type="text" 
              name="subject" 
              placeholder="SUBJECT / PROJECT TYPE" 
              style={inputStyle} 
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
            
            <textarea 
              rows="6" 
              name="message" 
              placeholder="HOW CAN I HELP YOU?" 
              required 
              style={{ ...inputStyle, resize: 'none' }} 
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />

            <button 
              type="submit" 
              disabled={isSending} 
              style={{
                background: 'var(--accent-primary)',
                color: '#1a1a2e',
                border: 'none',
                borderRadius: '0.75rem',
                padding: '1.2rem',
                fontSize: '1.05rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                cursor: isSending ? 'not-allowed' : 'pointer',
                opacity: isSending ? 0.7 : 1,
                marginTop: '0.5rem',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => { if(!isSending) e.currentTarget.style.transform = 'scale(1.02)' }}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {isSending ? 'Sending...' : 'Send Message'} <FaPaperPlane />
            </button>

            {submitStatus === 'success' && (
              <p style={{ color: '#25D366', marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'center', fontWeight: 'bold' }}>
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: '#EA4335', marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'center', fontWeight: 'bold' }}>
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* ── RIGHT COLUMN (Stack of Cards) ── */}
        <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* TOP RIGHT: CONNECT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ ...bentoBoxStyle, display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: '0 0 0.3rem 0' }}>Connect</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Socials & Direct Line.</span>
              </div>
              <a href="tel:+917990331154" style={{ 
                display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(0,0,0,0.3)', 
                padding: '0.6rem 1.2rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)',
                textDecoration: 'none', color: '#fff', fontSize: '0.9rem'
              }}>
                <FaPhoneAlt style={{ color: '#10b981' }} /> <span style={{ opacity: 0.5 }}>|</span> +91 7990331154
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a whileHover={{ y: -5, background: 'rgba(255,255,255,0.08)' }} href="https://github.com/Prathvikmehra" target="_blank" rel="noreferrer" style={socialButtonStyle}>
                <FaGithub style={{ fontSize: '1.5rem' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>GITHUB</span>
              </motion.a>
              <motion.a whileHover={{ y: -5, background: 'rgba(255,255,255,0.08)', color: '#0A66C2' }} href="https://www.linkedin.com/in/prathvik-mehra-47101a28a/" target="_blank" rel="noreferrer" style={socialButtonStyle}>
                <FaLinkedin style={{ fontSize: '1.5rem' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>LINKEDIN</span>
              </motion.a>
              <motion.a whileHover={{ y: -5, background: 'rgba(255,255,255,0.08)', color: '#FF0000' }} href="https://youtube.com/@Coding_Gurus_" target="_blank" rel="noreferrer" style={socialButtonStyle}>
                <FaYoutube style={{ fontSize: '1.5rem' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>YOUTUBE</span>
              </motion.a>
              <motion.a whileHover={{ y: -5, background: 'rgba(255,255,255,0.08)', color: '#FFA116' }} href="https://leetcode.com/u/prathvik__mehra/" target="_blank" rel="noreferrer" style={socialButtonStyle}>
                <SiLeetcode style={{ fontSize: '1.5rem' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>LEETCODE</span>
              </motion.a>
            </div>
          </motion.div>

          {/* BOTTOM RIGHT GRID: Email & Location */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            
            {/* EMAIL COPY CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ ...bentoBoxStyle, display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(20, 22, 30, 0.6) 100%)' }}
            >
              <div style={{ background: '#000', padding: '0.8rem', borderRadius: '0.75rem', width: 'fit-content', border: '1px solid rgba(255,255,255,0.05)', marginBottom: 'auto' }}>
                <FaEnvelope style={{ fontSize: '1.2rem', color: '#3b82f6' }} />
              </div>
              <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 0.2rem 0' }}>Prathvik</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>prathvikmehra@gmail.com</p>
              </div>
              <button 
                onClick={handleCopy}
                style={{
                  background: 'transparent', border: 'none', color: 'var(--text-secondary)',
                  display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem',
                  fontWeight: 600, letterSpacing: '0.05em', cursor: 'pointer', padding: 0
                }}
              >
                <FaRegCopy /> {copyStatus}
              </button>
            </motion.div>

            {/* LOCATION CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ ...bentoBoxStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {/* Pulsing Dot Design */}
              <div style={{ position: 'relative', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid #a855f7' }}
                />
                <div style={{ background: '#a855f7', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}>
                  <FaMapMarkerAlt style={{ color: '#fff', fontSize: '1rem' }} />
                </div>
              </div>
              
              <h4 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 2rem 0', letterSpacing: '0.05em' }}>INDIA</h4>
              
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>LOCAL TIME</span>
                  <span style={{ fontSize: '0.8rem', color: '#14b8a6', fontWeight: 600 }}>{currentTime}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>STATUS</span>
                  <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span> 
                    AVAILABLE
                  </span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
