import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const educationData = [
  {
    institution: "Swaminarayan University",
    degree: "Computer Engineering",
    score: "Pursuing",
    year: "2025 - Present",
    color: "#a3e635" // Lime
  },
  {
    institution: "Swaminarayan International School (HSC)",
    degree: "Science Stream",
    score: "76.9%",
    year: "2024",
    color: "#65a30d" // Green
  },
  {
    institution: "Kendriya Vidyalaya (SSC)",
    degree: "General",
    score: "82.8%",
    year: "2022",
    color: "#365314" // Dark Green
  }
];

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <section id="education" className="section" ref={ref} style={{ position: 'relative' }}>
      <h2>Education</h2>

      <div className="timeline-container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', padding: '2rem 0' }}>
        {/* Central Line */}
        <motion.div
          style={{
            scaleY: scrollYProgress,
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'var(--accent-primary)',
            originY: 0,
            transform: 'translateX(-50%)',
            zIndex: 0
          }}
        />

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
              alignItems: 'center',
              marginBottom: '4rem',
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Dot on the line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              width: '20px',
              height: '20px',
              background: 'var(--bg-primary)',
              border: `4px solid ${item.color}`,
              borderRadius: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2
            }} />

            {/* Content Card */}
            <div
              className="card"
              style={{
                width: '45%',
                padding: '1.5rem',
                border: '1px solid var(--card-border)',
                backdropFilter: 'blur(10px)',
                textAlign: index % 2 === 0 ? 'right' : 'left'
              }}
            >
              <h3 style={{ 
                color: item.color, 
                marginBottom: '0.5rem',
                fontSize: 'clamp(0.75rem, 1.8vw, 1rem)',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                lineHeight: '1.3'
              }}>
                {item.institution}
              </h3>
              <p style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{item.degree}</p>
              <p style={{ color: 'var(--text-secondary)' }}>{item.year}</p>
              <div className="tag" style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                background: `${item.color}20`,
                color: item.color
              }}>
                {item.score}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
