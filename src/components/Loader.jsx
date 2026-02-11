import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/acm-sit-logo-new.png';

const Loader = ({ setLoading }) => {
    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // Faster exit
            onAnimationComplete={() => setLoading(false)}
        >
            <div className="loader-content">
                <motion.div
                    className="loader-logo-wrapper"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} // Faster logo
                >
                    <img src={logo} alt="ACM SIT" className="loader-logo" />
                </motion.div>

                <motion.div
                    className="loader-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }} // Faster text
                >
                    <span className="text-line">Empower.</span>
                    <span className="text-line">Innovate.</span>
                    <span className="text-line">Create.</span>
                </motion.div>

                <motion.div
                    className="progress-bar-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }} // Start sooner
                >
                    <motion.div
                        className="progress-bar"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }} // Faster progress
                    />
                </motion.div>
            </div>

            <style>{`
                .loader-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: #0f172a;
                    z-index: 9999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .loader-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                }
                .loader-logo {
                    width: 100px;
                    height: auto;
                    border-radius: 12px;
                    box-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
                }
                .loader-text {
                    display: flex;
                    gap: 1rem;
                    font-size: 1.2rem;
                    font-weight: 300;
                    color: #94a3b8;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }
                .progress-bar-container {
                    width: 200px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                    overflow: hidden;
                }
                .progress-bar {
                    height: 100%;
                    background: #38bdf8;
                }
            `}</style>
        </motion.div>
    );
};

export default Loader;
