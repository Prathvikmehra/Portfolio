import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineFolderOpen, 
  HiOutlineAcademicCap, 
  HiOutlineBookmark, 
  HiOutlineMail,
  HiOutlineMoon,
  HiOutlineSun
} from 'react-icons/hi';
import { FaMedal } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Update time every second
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    });
  };

  const navItems = [
    { name: 'home', icon: <HiOutlineHome /> },
    { name: 'about', icon: <HiOutlineUser /> },
    { name: 'projects', icon: <HiOutlineFolderOpen /> },
    { name: 'certificates', icon: <FaMedal /> },
    { name: 'education', icon: <HiOutlineAcademicCap /> },
    { name: 'contact', icon: <HiOutlineMail /> },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        {/* Nav Icons */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <div 
              key={item.name} 
              style={{ position: 'relative' }}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                to={item.name}
                smooth="easeInOutQuart"
                duration={800}
                offset={-70}
                spy={true}
                activeClass="active-capsule"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  fontSize: '1.4rem',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <motion.div 
                  className="nav-icon-wrapper"
                  whileTap={{ scale: 0.75 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {item.icon}
                </motion.div>
              </Link>
              
              <AnimatePresence>
                {hoveredItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: '-50%', scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                    exit={{ opacity: 0, y: 5, x: '-50%', scale: 0.9 }}
                    style={{
                      position: 'absolute',
                      bottom: '-35px',
                      left: '50%',
                      background: 'rgba(26, 29, 21, 0.95)',
                      backdropFilter: 'blur(10px)',
                      color: 'var(--accent-primary)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      whiteSpace: 'nowrap',
                      border: '1px solid rgba(163, 230, 53, 0.2)',
                      pointerEvents: 'none',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                      zIndex: 100
                    }}
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          {/* Theme Toggle */}
          <div 
            onClick={toggleTheme}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              fontSize: '1.4rem',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={() => setHoveredItem('theme')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div
              whileTap={{ scale: 0.75, rotate: 180 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style={{ display: 'flex' }}
            >
              {theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}
            </motion.div>
            
            <AnimatePresence>
               {hoveredItem === 'theme' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: '-50%', scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                    exit={{ opacity: 0, y: 5, x: '-50%', scale: 0.9 }}
                    style={{
                      position: 'absolute',
                      bottom: '-35px',
                      left: '50%',
                      background: 'rgba(26, 29, 21, 0.95)',
                      backdropFilter: 'blur(10px)',
                      color: 'var(--accent-primary)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      whiteSpace: 'nowrap',
                      border: '1px solid rgba(163, 230, 53, 0.2)',
                      pointerEvents: 'none',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                      zIndex: 100
                    }}
                  >
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>

        {/* Divider and Time */}
        <div 
          className="clock-wrapper" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.8rem', 
            paddingLeft: '1rem', 
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            marginLeft: '0.5rem',
            position: 'relative'
          }}
          onMouseEnter={() => setHoveredItem('clock')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div style={{ 
            fontSize: '0.85rem', 
            fontFamily: 'monospace', 
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', marginRight: '4px' }}>•</span>
            {formatTime(time)}
            <span style={{ opacity: 0.5, fontSize: '0.7rem' }}>IST</span>
          </div>

          <AnimatePresence>
            {hoveredItem === 'clock' && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: '-50%', scale: 0.9 }}
                animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                exit={{ opacity: 0, y: 5, x: '-50%', scale: 0.9 }}
                style={{
                  position: 'absolute',
                  bottom: '-35px',
                  left: '50%',
                  background: 'rgba(26, 29, 21, 0.95)',
                  backdropFilter: 'blur(10px)',
                  color: 'var(--accent-primary)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  whiteSpace: 'nowrap',
                  border: '1px solid rgba(163, 230, 53, 0.2)',
                  pointerEvents: 'none',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  zIndex: 100
                }}
              >
                Local Time (IST)
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
