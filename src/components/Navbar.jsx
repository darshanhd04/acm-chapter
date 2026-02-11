import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from '../assets/acm-sit-logo-new.png';
import '../styles/navbar.css';

const Navbar = () => {
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
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            variants={navbarVariants}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <div className="container navbar-container">
                {/* Logo Section */}
                <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    <div className="logo-wrapper">
                        <img src={logo} alt="ACM SIT Logo" />
                    </div>
                </Link>

                {/* Centered Navigation Pill */}
                <div
                    className="nav-center-pill desktop-menu"
                    onMouseLeave={() => setHoveredTab(null)}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link-pill ${isActive(link.path) ? 'active' : ''}`}
                            onMouseEnter={() => setHoveredTab(link.path)}
                        >
                            {hoveredTab === link.path && (
                                <motion.div
                                    className="hover-bg"
                                    layoutId="hoverBg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            {isActive(link.path) && !hoveredTab && (
                                <motion.div
                                    className="active-bg"
                                    layoutId="activeBg"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="nav-text">{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Right Icon / Toggle (Placeholder for now) */}
                <div className="navbar-actions">
                    <button className="theme-toggle" aria-label="Toggle Theme">
                        <Moon size={20} />
                    </button>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.ul
                                className="mobile-nav-list"
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
