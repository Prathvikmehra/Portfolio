import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            borderTop: '1px solid #222',
            color: 'var(--text-secondary)'
        }}>
            <p>&copy; {new Date().getFullYear()} Prathvik. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
