import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const contactItems = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 7990331154',
    href: 'tel:+917990331154',
    hoverColor: 'var(--accent-primary)',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'prathvikmehra@gmail.com',
    href: 'mailto:prathvikmehra@gmail.com',
    hoverColor: 'var(--accent-primary)',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+91 6351675191',
    href: 'https://wa.me/916351675191',
    hoverColor: 'var(--accent-primary)',
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>

      {/* Two-column layout */}
      <div style={{
        display: 'flex',
        gap: '3rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>

        {/* ── LEFT: Contact Info ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ flex: '1 1 280px', maxWidth: '360px' }}
        >
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Have a project in mind or just want to say hi? Here's how you can reach me directly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactItems.map(({ icon, label, value, href, hoverColor }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.2rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = hoverColor;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${hoverColor}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: `${hoverColor}1a`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: hoverColor,
                  flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.15rem',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                  }}>
                    {value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            flex: '1 1 320px',
            maxWidth: '480px',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            padding: '2rem',
          }}
        >
          <h3 style={{
            fontSize: '1.3rem',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontWeight: 600,
          }}>
            Send Me a Message
          </h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea rows="5" placeholder="Your Message" className="form-input" />
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
