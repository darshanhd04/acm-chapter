import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ setLoading }) => {
    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={() => setLoading(false)}
        >
            <div className="loader-content">
                <motion.div
                    className="loader-text-container"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.25,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.span variants={itemVariants} className="text-line highlight">Empower.</motion.span>
                    <motion.span variants={itemVariants} className="text-line">Innovate.</motion.span>
                    <motion.span variants={itemVariants} className="text-line highlight">Create.</motion.span>
                </motion.div>

                {/* Minimalist Progress Line */}
                <motion.div
                    className="progress-line-container"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "circOut" }}
                >
                    <div className="progress-line" />
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
                    overflow: hidden;
                }

                /* Subtle animated background mesh */
                .loader-container::before {
                    content: '';
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.03) 0%, transparent 50%);
                    animation: pulse-bg 4s ease-in-out infinite;
                }

                @keyframes pulse-bg {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.1); opacity: 1; }
                }

                .loader-content {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 2;
                }

                .loader-text-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }

                .text-line {
                    font-family: 'Outfit', sans-serif;
                    font-size: 3.5rem; /* Large impact */
                    font-weight: 700;
                    color: #e2e8f0;
                    letter-spacing: -2px;
                    line-height: 1;
                    /* Clip background text for gradient effect if desired, but solid is cleaner for now */
                }

                .text-line.highlight {
                    color: white;
                    text-shadow: 0 0 20px rgba(56, 189, 248, 0.5); /* Glow effect */
                }

                .progress-line-container {
                    margin-top: 3rem;
                    width: 60px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                    overflow: hidden;
                }

                .progress-line {
                    width: 100%;
                    height: 100%;
                    background: #38bdf8;
                    box-shadow: 0 0 10px #38bdf8;
                }

                @media (max-width: 768px) {
                    .text-line {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </motion.div>
    );
};

const itemVariants = {
    hidden: {
        y: 40,
        opacity: 0,
        filter: "blur(10px)",
        rotateX: -20
    },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9], // Custom cubic bezier
        }
    }
};

export default Loader;
