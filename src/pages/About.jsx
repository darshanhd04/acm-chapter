import React from 'react';
import { Target, Eye, History } from 'lucide-react';
import '../styles/about.css';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <PageTransition>
            <div className="page-container">
                <div className="about-hero">
                    <div className="container">
                        <motion.h1
                            className="section-title"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >About ACM SIT</motion.h1>
                        <motion.p
                            className="about-subtitle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Fostering innovation and excellence in computing since 2003.
                        </motion.p>
                    </div>
                </div>

                <div className="container about-content">
                    <section className="about-section">
                        <motion.div
                            className="about-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Target size={48} className="about-icon" />
                            <h2>Our Mission</h2>
                            <p>
                                To create a collaborative environment where students can learn, share, and grow their technical skills.
                                We aim to bridge the gap between academic learning and industry requirements through workshops, hackathons, and projects.
                            </p>
                        </motion.div>
                        <motion.div
                            className="about-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Eye size={48} className="about-icon" />
                            <h2>Our Vision</h2>
                            <p>
                                To be a premier student chapter that cultivates a community of ethical, skilled, and innovative computing professionals
                                who contribute positively to society.
                            </p>
                        </motion.div>
                    </section>

                    <motion.section
                        className="history-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2><History size={32} style={{ display: 'inline', marginRight: '1rem' }} /> Our History</h2>
                        <p>
                            The ACM Student Chapter at SIT was established with the goal of bringing the global computing community to our campus.
                            Over the years, we have grown from a small group of enthusiasts to one of the most active student clubs in the region.
                            We have hosted numerous flagship events, including national-level hackathons and technical symposiums.
                        </p>
                    </motion.section>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;
