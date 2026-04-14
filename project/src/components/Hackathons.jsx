import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import hackPhoto1 from '../assets/hack-photo-1.jpeg';
import hackPhoto2 from '../assets/hack-photo-2.jpeg';

const hackathonData = [
  {
    id: 1,
    title: 'Electrosphere 2k25',
    about: 'Participated in the rigorous 12-hour Electrosphere 2025 hackathon. We worked under tight time constraints to architect and deliver KrishiSaathi, a comprehensive digital platform designed to connect Indian farmers with technology and real-time market intelligence.',
    experience: 'As the UI/UX Designer in a high-pressure 12-hour window, I led the user experience strategy and interface design. I focused on crafting an intuitive, multilingual layout tailored specifically for rural farmers, ensuring complex features like smart crop recommendations and live Mandi rates felt accessible. Collaborating closely with the frontend and backend developers, we successfully shipped a polished and impactful product that empowers agricultural digital inclusion.',
    problemStatement: 'Indian farmers face critical challenges including lack of access to accurate localized crop information, real-time market prices, reliable logistics, and peer knowledge sharing. The core problem was bridging this technology gap by creating a highly scalable, multilingual platform that offers direct market access and actionable agricultural intelligence.',
    liveUrl: 'https://krishi-saathi-elite-hack.vercel.app/',
    githubUrl: 'https://github.com/Jivan-Patel/KrishiSaathi_v2.0',
    certificate: 'https://picsum.photos/seed/cert1/800/600',
    photos: [
      hackPhoto1,
      hackPhoto2
    ]
  },
  {
    id: 2,
    title: 'Web3 Buildathon',
    about: 'A week-long buildathon focused on decentralized applications. Our team created a smart contract-based voting system for transparent remote elections.',
    experience: 'Working with smart contracts taught me a lot about security and decentralized logic. I collaborated with a talented backend developer, which greatly improved my understanding of connecting React frontends directly to the blockchain. We even got a special mention for our clean UI design.',
    problemStatement: 'Current remote voting mechanisms lack transparency and are prone to tampering. Organizers needed a tamper-proof, auditable system to conduct global community votes without relying on a centralized database.',
    projectDetails: 'Our project, "ClearVote", leveraged Solidity smart contracts on the Ethereum testnet. We built a beautiful React dashboard for voters to connect their wallets, cast their verifiable vote, and analyze real-time election result cryptographically. I handled the entire frontend and Web3.js integration.',
    liveUrl: '#',
    githubUrl: '#',
    certificate: 'https://picsum.photos/seed/cert2/800/600',
    photos: [
      'https://picsum.photos/seed/web1/400/300',
      'https://picsum.photos/seed/web2/400/300',
      'https://picsum.photos/seed/web3/400/300',
      'https://picsum.photos/seed/web4/400/300'
    ]
  }
];

const Hackathons = () => {
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [activeView, setActiveView] = useState('details'); // 'details', 'photos', 'problem', 'project'

  const closeModal = () => {
    setSelectedHackathon(null);
    setTimeout(() => setActiveView('details'), 300); // reset after close animation
  };

  const handleFlip = (view) => {
    setActiveView(view);
  };

  return (
    <section id="hackathons">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Hackathons</h2>

        <div className="hack-staggered-container">
          {hackathonData.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              className={`hack-preview-card ${index % 2 === 0 ? 'align-left' : 'align-right'}`}
              onClick={() => setSelectedHackathon(hackathon)}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="hack-preview-img-wrapper">
                <img src={hackathon.certificate} alt={hackathon.title} />
                <div className="hack-preview-overlay">
                  <h3>{hackathon.title}</h3>
                  <span>View Details &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedHackathon && (
          <motion.div
            className="hack-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="hack-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="hack-modal-close" onClick={closeModal}>&times;</button>

              <div className={`hack-modal-inner ${activeView !== 'details' ? 'is-flipped' : ''}`}>

                {/* Front Side: Certificate + Info */}
                <div className="hack-modal-face hack-modal-front">
                  <div className="hack-modal-split">
                    <div className="hack-modal-left">
                      <img src={selectedHackathon.certificate} alt={`${selectedHackathon.title} Certificate`} />
                    </div>
                    <div className="hack-modal-right">
                      <h2>{selectedHackathon.title}</h2>

                      <div className="hack-modal-text-section">
                        <h4>About the Hackathon</h4>
                        <p>{selectedHackathon.about}</p>
                      </div>

                      <div className="hack-modal-text-section">
                        <h4>My Experience</h4>
                        <p>{selectedHackathon.experience}</p>
                      </div>

                      <div className="hack-modal-actions">
                        <button className="btn btn-primary flip-btn" onClick={() => handleFlip('photos')}>
                          View Memories &rarr;
                        </button>
                        <button className="btn btn-secondary flip-btn" onClick={() => handleFlip('problem')}>
                          Problem Statement &rarr;
                        </button>

                        {/* If it's the second hackathon, we still have the projectDetails flip view */}
                        {!selectedHackathon.liveUrl || selectedHackathon.liveUrl === '#' ? (
                          <button className="btn btn-secondary flip-btn" onClick={() => handleFlip('project')}>
                            About My Project &rarr;
                          </button>
                        ) : (
                          <a
                            href={selectedHackathon.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary flip-btn"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                          >
                            View My Project <HiOutlineExternalLink />
                          </a>
                        )}

                        {selectedHackathon.githubUrl && selectedHackathon.githubUrl !== '#' && (
                          <a
                            href={selectedHackathon.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary flip-btn"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                          >
                            GitHub Repo <HiOutlineExternalLink />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side: Dynamic Content */}
                <div className="hack-modal-face hack-modal-back">
                  <div className="hack-photos-container">

                    {activeView === 'photos' && (
                      <>
                        <h2>{selectedHackathon.title} - Memories</h2>
                        <div className="collage-grid">
                          {selectedHackathon.photos.map((photo, i) => (
                            <img key={i} src={photo} alt={`Memory ${i + 1}`} className="collage-img" />
                          ))}
                        </div>
                      </>
                    )}

                    {activeView === 'problem' && (
                      <div className="hack-back-text-content">
                        <h2>Problem Statement</h2>
                        <div className="text-card-lg">
                          <p>{selectedHackathon.problemStatement}</p>
                        </div>
                      </div>
                    )}

                    {activeView === 'project' && selectedHackathon.projectDetails && (
                      <div className="hack-back-text-content">
                        <h2>About My Project</h2>
                        <div className="text-card-lg">
                          <p>{selectedHackathon.projectDetails}</p>
                        </div>
                      </div>
                    )}

                    <button className="btn btn-secondary flip-btn flip-back-btn" onClick={() => handleFlip('details')}>
                      &larr; Back to Details
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hackathons;

