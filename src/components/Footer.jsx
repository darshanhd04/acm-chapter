import React from 'react';
import { Github, Linkedin, Instagram, Mail, Globe } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>ACM SIT</h3>
                    <p>
                        The official student chapter of ACM at Siddaganga Institute of Technology.
                        Innovating, Learning, and Growing together.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect With Us</h4>
                    <div className="social-links">
                        <a href="https://github.com/acm-sit" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                        <a href="https://linkedin.com/company/acm-sit" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                        <a href="https://instagram.com/acm_sit" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                        <a href="mailto:acm@sit.ac.in"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ACM SIT Chapter. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
