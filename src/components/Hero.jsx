import React from 'react';
import { ArrowRight, Play, Users, MapPin } from 'lucide-react';
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
                    Code Your Legacy, <br />
                    <span className="text-highlight">Build The Future</span>
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

                {/* Location Map Section */}
                <motion.div
                    className="hero-map-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 1 }}
                >
                    <div className="map-header">
                        <MapPin size={24} className="text-highlight" />
                        <h3>Siddaganga Institute of Technology, Tumkur</h3>
                    </div>
                    <div className="map-frame-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.696349377462!2d77.12392095541992!3d13.326909200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c6b8e4529eb%3A0xe54747eb0214840!2sSiddaganga%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1707890000000!5m2!1sen!2sin"
                            className="map-iframe"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Siddaganga Institute of Technology Location"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
