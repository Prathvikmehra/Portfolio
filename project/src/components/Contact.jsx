import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
    hoverColor: '#007BFF',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'prathvikmehra@gmail.com',
    href: 'mailto:prathvikmehra@gmail.com',
    hoverColor: '#EA4335',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+91 6351675191',
    href: 'https://wa.me/916351675191',
    hoverColor: '#25D366',
  },
];

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    // Replace the placeholders with your actual EmailJS credentials
    // You can get these by signing up at https://www.emailjs.com/
    const serviceId = 'service_wg8s5zb';
    const templateId = 'template_x38jahb';
    const publicKey = 'kl5NP5-HpO3EYadlZ';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
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
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required className="form-input" style={{ marginBottom: '1rem' }} />
            <input type="email" name="user_email" placeholder="Your Email" required className="form-input" style={{ marginBottom: '1rem' }} />
            <textarea rows="5" name="message" placeholder="Your Message" required className="form-input" style={{ marginBottom: '1.5rem' }} />
            <button type="submit" className="btn btn-primary" disabled={isSending} style={{ width: '100%', opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p style={{ color: '#25D366', marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center', fontWeight: 'bold' }}>
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: '#EA4335', marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center', fontWeight: 'bold' }}>
                Failed to send message. Please check your console or try again later.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
