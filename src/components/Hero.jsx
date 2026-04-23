import React from 'react';
import { ArrowRight, Play, Users, MapPin, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/hero.css';
import { Magnetic } from './Magnetic';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="hero">
            {/* Animated Background Elements */}
            <div className="hero-background-wrapper">
                <div className="hero-background-gradient"></div>
                <motion.div
                    className="hero-blob blob-1"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="hero-blob blob-2"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        borderRadius: ["50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%"]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <motion.div
                className="container hero-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Status Badge */}
                <motion.div className="status-badge" variants={itemVariants}>
                    <span className="status-dot"></span>
                    <span className="status-text">ACCEPTING NEW MEMBERS</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 className="hero-heading" variants={itemVariants}>
                    Code Your Legacy, <br />
                    <span className="text-highlight">Build The Future</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p className="hero-description" variants={itemVariants}>
                    ACM SIT brings you opportunities to learn, innovate, and connect with
                    the global tech community. Join us to accelerate your growth in computing
                    and shape the future of technology.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div className="hero-actions" variants={itemVariants}>
                    <Magnetic>
                        <motion.a
                            href="https://share.google/Qab24nWU6nEAq11Cw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary-pill"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            BECOME A MEMBER <ArrowRight size={18} />
                        </motion.a>
                    </Magnetic>
                    <Magnetic>
                        <motion.a
                            href="https://forms.gle/45BJ5ocwD94i9zRz5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-accent-pill"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Edit size={18} /> UPDATE REGISTRATION
                        </motion.a>
                    </Magnetic>
                    <Magnetic>
                        <motion.a
                            href="/explore"
                            className="btn-secondary-pill"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Play size={18} fill="currentColor" /> Explore
                        </motion.a>
                    </Magnetic>
                </motion.div>

                {/* Bottom Image / Visual */}
                <motion.div className="hero-visual" variants={itemVariants}>
                    <div className="image-mask">
                        <img
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                            alt="Tech Community"
                            className="hero-image"
                        />
                        <div className="image-overlay-gradient"></div>
                    </div>
                </motion.div>

                {/* Location Map Section */}
                <motion.div className="hero-map-section" variants={itemVariants}>
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
            </motion.div>
        </section >
    );
};

export default Hero;
