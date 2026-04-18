import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <SEO 
        title="Get In Touch | Prathvik Portfolio" 
        description="Let's connect! Reach out to me via Phone, Email or WhatsApp. I'm open to opportunities and ready to build something great."
        url="https://prathvik.com/contact"
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', flex: 1, width: '100%' }}>
         <Link to="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            color: 'var(--accent-primary)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '2rem',
            transition: 'transform 0.3s ease'
         }}
         onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-5px)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
         >
           <FaArrowLeft /> Back to Home
         </Link>
         
         <div style={{ marginTop: '2rem' }}>
            <Contact />
         </div>
      </div>
      
    </motion.div>
  );
};

export default ContactPage;
