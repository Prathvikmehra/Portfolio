import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{ marginBottom: '5rem' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="contact-container"
      >
        <h2>Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="form-input"
          />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
