import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import { BookOpen, Users, Calendar, Trophy, ArrowRight, Code, Briefcase } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import '../styles/home.css';

const Home = () => {
    return (
        <PageTransition>
            <div className="home-container">
                <Hero />

                <Marquee />

                <section className="features-section">
                    <div className="container">
                        <motion.h2
                            className="section-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Why Join ACM?
                        </motion.h2>
                        <div className="features-grid">
                            <motion.div
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <BookOpen className="feature-icon" size={48} />
                                <h3>Technical Workshops</h3>
                                <p>Hands-on sessions on the latest technologies, from AI to Web Development.</p>
                            </motion.div>
                            <motion.div
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Users className="feature-icon" size={48} />
                                <h3>Networking</h3>
                                <p>Connect with like-minded peers, alumni, and industry professionals.</p>
                            </motion.div>
                            <motion.div
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Calendar className="feature-icon" size={48} />
                                <h3>Hackathons</h3>
                                <p>Participate in 24-hour coding marathons and win exciting prizes.</p>
                            </motion.div>
                            <motion.div
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Trophy className="feature-icon" size={48} />
                                <h3>Competitions</h3>
                                <p>Showcase your skills in coding contests and debate competitions.</p>
                            </motion.div>
                            <motion.div
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Code className="feature-icon" size={48} />
                                <h3>Open Source</h3>
                                <p>Contribute to real-world projects and build your GitHub portfolio.</p>
                            </motion.div>
                            <motion.div
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Briefcase className="feature-icon" size={48} />
                                <h3>Career Growth</h3>
                                <p>Gain industry insights, internships, and placement guidance.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <motion.div
                            className="cta-content"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>Ready to Start Your Journey?</h2>
                            <p>Join the ACM Student Chapter today and be part of a global community.</p>
                            <a href="/contact" className="btn btn-primary">
                                Join Now <ArrowRight size={20} />
                            </a>
                        </motion.div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Home;
