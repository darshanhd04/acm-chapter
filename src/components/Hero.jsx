import React from 'react';
import { ArrowRight, Play, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background-gradient"></div>

            <div className="container hero-container">
                {/* Status Badge */}
                <motion.div
                    className="status-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="status-dot"></span>
                    <span className="status-text">ACCEPTING NEW MEMBERS</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    className="hero-heading"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Empower Your <br />
                    <span className="text-highlight">Tech Journey</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    ACM SIT brings you opportunities to learn, innovate, and connect with
                    the global tech community. Join us to accelerate your growth in computing
                    and shape the future of technology.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <a href="/join" className="btn-primary-pill">
                        BECOME A MEMBER <ArrowRight size={18} />
                    </a>
                    <a href="/explore" className="btn-secondary-pill">
                        <Play size={18} fill="currentColor" /> Explore
                    </a>
                </motion.div>

                {/* Bottom Image / Visual */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1 }}
                >
                    <div className="image-mask">
                        {/* Placeholder for the bottom image seen in reference */}
                        <img
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                            alt="Tech Community"
                            className="hero-image"
                        />
                        <div className="image-overlay-gradient"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
