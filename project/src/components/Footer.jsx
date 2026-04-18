import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/Prathvikmehra',
    label: 'GitHub',
    hoverColor: '#ffffff',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/prathvik-mehra-9a3398379/',
    label: 'LinkedIn',
    hoverColor: '#0A66C2',
  },
  {
    icon: <SiLeetcode />,
    href: 'https://leetcode.com/u/phantomleo/',
    label: 'LeetCode',
    hoverColor: '#FFA116',
  },
  {
    icon: <FaYoutube />,
    href: 'https://www.youtube.com/@Prathvikmehra-ct3rs',
    label: 'YouTube',
    hoverColor: '#FF0000',
  },
  {
    icon: <FaXTwitter />,
    href: 'https://x.com/prathvik2345',
    label: 'X / Twitter',
    hoverColor: '#ffffff',
  },
];

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--card-border)',
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
    }}>
      {/* Social Icons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.6rem',
        marginBottom: '1.2rem',
        flexWrap: 'wrap',
      }}>
        {socialLinks.map(({ icon, href, label, hoverColor }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              fontSize: '1.5rem',
              color: 'var(--text-secondary)',
              transition: 'color 0.3s ease, transform 0.3s ease',
              display: 'inline-flex',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = hoverColor;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Prathvik. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
