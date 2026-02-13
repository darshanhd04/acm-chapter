import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Send } from 'lucide-react';
import logo from '../assets/acm-sit-logo-new.png'; // Assuming logo is available
import { motion } from 'framer-motion';
import '../styles/footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Quick Links",
            links: [
                { name: "Home", path: "/" },
                { name: "Events", path: "/events" },
                { name: "Team", path: "/team" },
                { name: "Gallery", path: "/gallery" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", path: "/blog" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Join ACM", path: "/join" } // Placeholder
            ]
        }
    ];

    return (
        <footer className="footer">
            <div className="container footer-content">
                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="brand-header">
                        <img src={logo} alt="ACM SIT Logo" className="footer-logo" />
                        <h3>ACM SIT</h3>
                    </div>
                    <p className="brand-description">
                        fostering a community of innovators, learners, and leaders.
                        Join us to shape the future of technology at Siddaganga Institute of Technology.
                    </p>
                    <div className="social-links">
                        <motion.a whileHover={{ y: -3 }} href="https://github.com/acm-sit" target="_blank" rel="noopener noreferrer"><Github size={20} /></motion.a>
                        <motion.a whileHover={{ y: -3 }} href="https://linkedin.com/company/acm-sit" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></motion.a>
                        <motion.a whileHover={{ y: -3 }} href="https://instagram.com/acm_sit" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></motion.a>
                        <motion.a whileHover={{ y: -3 }} href="mailto:acm@sit.ac.in"><Mail size={20} /></motion.a>
                    </div>
                </div>

                {/* Links Sections */}
                {footerLinks.map((section, index) => (
                    <div key={index} className="footer-links-section">
                        <h4>{section.title}</h4>
                        <ul>
                            {section.links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.path}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Newsletter Section */}
                <div className="footer-newsletter">
                    <h4>Stay Updated</h4>
                    <p>Subscribe to our newsletter for the latest event updates and tech news.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit" aria-label="Subscribe">
                                <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>&copy; {currentYear} ACM SIT Chapter. All rights reserved.</p>
                    <div className="bottom-actions">
                        <a href="/privacy">Privacy Policy</a>
                        <span className="separator">•</span>
                        <a href="/terms">Terms of Service</a>
                        <motion.button
                            className="scroll-top-btn"
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
