import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad } from 'react-icons/fa';
import cantabilImg from '../assets/cantabil.png';
import stanleyImg from '../assets/stanley.png';
import cutsImg from '../assets/cuts.png';
import colorGuesserImg from '../assets/color-guesser.png';
import typingGameImg from '../assets/typing-game.png';
import whackAMoleImg from '../assets/whack-a-mole.png';
import todoListImg from '../assets/todo-list.png';

const projectsData = [
  {
    title: 'Color Guesser Game',
    description: 'Test your color recognition skills in this fun and interactive RGB guessing game.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: colorGuesserImg,
    link: '/games/color-guesser/index.html',
    isGame: true
  },
  {
    title: 'Typing Speed Game',
    description: 'Challenge your typing speed and accuracy with this neon-styled typing test.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: typingGameImg,
    link: '/games/typing-game/index.html',
    isGame: true
  },
  {
    title: 'Whack-a-Mole',
    description: 'Classic arcade fun! Whack the moles as they pop up to score points.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: whackAMoleImg,
    link: '/games/whack-a-mole/index.html',
    isGame: true
  },
  {
    title: 'To-Do List App',
    description: 'A clean and productive task management app to organize your daily goals.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: todoListImg,
    link: '/games/todo-list/index.html',
    isGame: true
  },
  {
    title: 'Cantabil Clone',
    description: 'A pixel-perfect clone of the Cantabil e-commerce website, featuring responsive design and modern UI/UX.',
    tags: ['HTML', 'CSS', 'Netlify'],
    image: cantabilImg,
    link: 'https://www.youtube.com/@Prathvikmehra-ct3rs'
  },
  {
    title: 'Stanley Clone',
    description: 'A visually stunning landing page clone for Stanley, focusing on product showcase and animations.',
    tags: ['HTML', 'CSS', 'Netlify'],
    image: stanleyImg,
    link: 'https://www.youtube.com/@Prathvikmehra-ct3rs'
  },
  {
    title: 'Cuts Clothing Clone',
    description: 'A clean and minimal clone of the Cuts Clothing website, demonstrating mastery of grid layouts and typography.',
    tags: ['HTML', 'CSS', 'Netlify'],
    image: cutsImg,
    link: 'https://www.youtube.com/@Prathvikmehra-ct3rs'
  },
];

const Projects = () => {
  const games = projectsData.filter(p => p.isGame);
  const otherProjects = projectsData.filter(p => !p.isGame);

  // Duplicate games for infinite scroll effect
  const marqueeGames = [...games, ...games];

  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>

      {/* Games Marquee */}
      <h3 className="subsection-title">Interactive Games</h3>
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeGames.map((game, index) => (
            <div key={index} className="marquee-item">
              <a href={game.link} target="_blank" rel="noopener noreferrer" className="game-card">
                <img src={game.image} alt={game.title} className="game-thumb" />
                <div className="game-info">
                  <h4>{game.title}</h4>
                  <FaGamepad className="game-icon" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Standard Projects Grid */}
      <h3 className="subsection-title" style={{ marginTop: '4rem' }}>Web Projects</h3>
      <div className="grid-projects">
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="card"
            style={{ padding: 0, overflow: 'hidden', position: 'relative' }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </a>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {project.title}
                </a>
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .subsection-title {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
          padding-left: 0.5rem;
          border-left: 4px solid var(--accent-primary);
        }

        .marquee-container {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          background: rgba(0,0,0,0.2);
          padding: 2rem 0;
          position: relative;
        }

        .marquee-container::before,
        .marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
        }
        
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-primary), transparent);
        }
        
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-primary), transparent);
        }

        .marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }

        .marquee-item {
          width: 300px;
          flex-shrink: 0;
        }

        .game-card {
           display: block;
           background: var(--card-bg);
           border: 1px solid var(--card-border);
           border-radius: 12px;
           overflow: hidden;
           text-decoration: none;
           transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .game-card:hover {
           transform: translateY(-5px);
           border-color: var(--accent-primary);
        }

        .game-thumb {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }

        .game-info {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-primary);
        }

        .game-info h4 {
          margin: 0;
          font-size: 1.1rem;
        }

        .game-icon {
          color: var(--accent-primary);
          font-size: 1.2rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;
