import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from '../assets/ACM.png';
import '../styles/navbar.css';
import { Magnetic } from './Magnetic';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredTab, setHoveredTab] = useState(null);
    const location = useLocation();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
            setIsOpen(false);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'EVENTS', path: '/events' },
        { name: 'GALLERY', path: '/gallery' },
        { name: 'TEAM', path: '/team' },
        { name: 'BLOG', path: '/blog' },
        { name: 'ABOUT', path: '/about' },
        { name: 'CONTACT', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    const navbarVariants = {
        visible: { y: 0, opacity: 1, scale: 1 },
        hidden: { y: -100, opacity: 0, scale: 0.95 }
    };

    return (
        <div className="navbar-wrapper">
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                variants={navbarVariants}
                initial="visible"
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="navbar-container">
                    {/* Logo Section */}
                    <Magnetic>
                        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                            <div className="logo-wrapper">
                                <img src={logo} alt="ACM" />
                            </div>
                        </Link>
                    </Magnetic>

                    {/* Centered Navigation Pill */}
                    <div
                        className="nav-center-pill desktop-menu"
                        onMouseLeave={() => setHoveredTab(null)}
                    >
                        {navLinks.map((link) => (
                            <Magnetic key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`nav-link-pill ${isActive(link.path) ? 'active' : ''}`}
                                    onMouseEnter={() => setHoveredTab(link.path)}
                                    style={{ display: 'flex' }}
                                >
                                    {hoveredTab === link.path && (
                                        <motion.div
                                            className="hover-bg"
                                            layoutId="hoverBg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                        />
                                    )}
                                    {isActive(link.path) && !hoveredTab && (
                                        <motion.div
                                            className="active-bg"
                                            layoutId="activeBg"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="nav-text">{link.name}</span>
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    {/* Right Icon / Toggle */}
                    <div className="navbar-actions">
                        <Magnetic>
                            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                            </button>
                        </Magnetic>
                        <Magnetic>
                            <button className="menu-icon" onClick={toggleMenu}>
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </Magnetic>
                    </div>
                </div>
            </motion.nav>

            {/* Floating Mobile Menu */}
            <AnimatePresence>
                {isOpen && !hidden && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <ul className="mobile-nav-list">
                            {navLinks.map((link, i) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
