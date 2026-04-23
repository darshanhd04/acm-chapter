import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scramble text hook for advanced decoding effect
const useScramble = (text) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = '!<>-_\\/[]{}—=+*^?#_';
    
    useEffect(() => {
        let iteration = 0;
        let interval = null;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
            setDisplayText(text.split("").map((letter, index) => {
                if(index < iteration) {
                    return text[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(""));
            
            if(iteration >= text.length) {
                clearInterval(interval);
            }
            iteration += 1 / 3;
        }, 30);
        
        return () => clearInterval(interval);
    }, [text]);
    
    return displayText;
};

const ScrambleText = ({ text, className }) => {
    const scrambled = useScramble(text);
    return <span className={className}>{scrambled}</span>;
}

const Loader = ({ setLoading }) => {
    const [progress, setProgress] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["INITIALIZING", "CONNECTING", "EMPOWERING"];

    useEffect(() => {
        const duration = 2400; 
        const interval = 20;
        const step = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress(prev => Math.min(prev + step, 100));
        }, interval);

        const wordTimer = setInterval(() => {
            setWordIndex(prev => (prev + 1) % words.length);
        }, 800);

        return () => {
            clearInterval(timer);
            clearInterval(wordTimer);
        };
    }, []);

    const containerVariants = {
        initial: { opacity: 1 },
        visible: { opacity: 1 },
        exit: {
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    return (
        <motion.div
            className="loader-container"
            variants={containerVariants}
            initial="initial"
            animate="visible"
            exit="exit"
        >
            {/* Advanced 3D Cyber-Grid Background */}
            <div className="grid-background">
                <div className="grid-plane"></div>
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
            </div>

            <div className="loader-content">
                {/* Ultra-Advanced Liquid Fill Text with Chromatic Glitch */}
                <div className="liquid-text-wrapper">
                    <h1 className="liquid-text outline glitch" data-text="ACM">ACM</h1>
                    <h1 
                        className="liquid-text fill" 
                        style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
                    >
                        ACM
                        {/* The glowing waterline laser */}
                        <div className="waterline-laser" style={{ top: `${100 - progress}%` }}></div>
                    </h1>
                </div>

                {/* Animated Subtitle */}
                <motion.div
                    className="student-chapter-subtitle"
                    initial={{ opacity: 0, letterSpacing: "20px", filter: "blur(10px)", y: -10 }}
                    animate={{ opacity: 1, letterSpacing: "8px", filter: "blur(0px)", y: 0 }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                >
                    STUDENT CHAPTER
                </motion.div>

                {/* Cyberpunk Progress UI */}
                <div className="progress-details">
                    <div className="progress-bar-container">
                        <div 
                            className="progress-bar-fill"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="progress-comet"></div>
                        </div>
                    </div>
                    <div className="progress-stats">
                        <div className="status-word">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={wordIndex}
                                    initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ScrambleText text={words[wordIndex]} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="percentage">
                            <motion.span 
                                key={Math.round(progress)}
                                initial={{ opacity: 0.5, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.1 }}
                            >
                                {Math.round(progress)}
                            </motion.span>
                            <span className="percent-sign">%</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .loader-container {
                    position: fixed;
                    inset: 0;
                    background-color: #050505;
                    z-index: 99999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }

                .grid-background {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    overflow: hidden;
                    perspective: 1000px;
                }

                .grid-plane {
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    bottom: -50%;
                    left: -50%;
                    background-image: 
                        linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px);
                    background-size: 50px 50px;
                    transform: rotateX(75deg);
                    animation: gridMove 3s linear infinite;
                    mask-image: linear-gradient(to top, rgba(0,0,0,1), transparent 50%);
                    -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1), transparent 50%);
                }

                @keyframes gridMove {
                    0% { transform: rotateX(75deg) translateY(0); }
                    100% { transform: rotateX(75deg) translateY(50px); }
                }

                .ambient-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    animation: floatOrb 10s infinite alternate ease-in-out;
                }

                .orb-1 {
                    width: 40vw; height: 40vw;
                    background: rgba(139, 92, 246, 0.15);
                    top: -10%; left: 10%;
                }

                .orb-2 {
                    width: 30vw; height: 30vw;
                    background: rgba(217, 70, 239, 0.1);
                    bottom: 20%; right: 10%;
                    animation-delay: -5s;
                }

                @keyframes floatOrb {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(5%, -10%) scale(1.1); }
                }

                .loader-content {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 5rem;
                }

                .liquid-text-wrapper {
                    position: relative;
                    font-family: 'Outfit', sans-serif;
                    font-size: 14rem;
                    font-weight: 900;
                    line-height: 1;
                    letter-spacing: -4px;
                }

                .liquid-text {
                    margin: 0;
                    font-size: inherit;
                    font-weight: inherit;
                    letter-spacing: inherit;
                }

                .liquid-text.outline {
                    color: transparent;
                    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.15);
                    position: relative;
                }

                /* Chromatic Aberration Glitch */
                .liquid-text.outline.glitch::before,
                .liquid-text.outline.glitch::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    opacity: 0.6;
                    pointer-events: none;
                }

                .liquid-text.outline.glitch::before {
                    -webkit-text-stroke: 2px rgba(0, 255, 255, 0.5);
                    animation: glitch1 3s infinite linear alternate-reverse;
                }

                .liquid-text.outline.glitch::after {
                    -webkit-text-stroke: 2px rgba(255, 0, 255, 0.5);
                    animation: glitch2 2.5s infinite linear alternate-reverse;
                }

                @keyframes glitch1 {
                    0% { clip-path: inset(20% 0 80% 0); transform: translate(-4px, 2px); }
                    20% { clip-path: inset(60% 0 10% 0); transform: translate(4px, -2px); }
                    40% { clip-path: inset(40% 0 50% 0); transform: translate(-4px, 2px); }
                    60% { clip-path: inset(80% 0 5% 0); transform: translate(4px, -2px); }
                    80% { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 2px); }
                    100% { clip-path: inset(30% 0 50% 0); transform: translate(4px, -2px); }
                }

                @keyframes glitch2 {
                    0% { clip-path: inset(10% 0 60% 0); transform: translate(4px, -2px); }
                    20% { clip-path: inset(30% 0 20% 0); transform: translate(-4px, 2px); }
                    40% { clip-path: inset(70% 0 10% 0); transform: translate(4px, -2px); }
                    60% { clip-path: inset(20% 0 50% 0); transform: translate(-4px, 2px); }
                    80% { clip-path: inset(50% 0 30% 0); transform: translate(4px, -2px); }
                    100% { clip-path: inset(5% 0 80% 0); transform: translate(-4px, 2px); }
                }

                .liquid-text.fill {
                    position: absolute;
                    top: 0; left: 0;
                    color: #fff;
                    background: linear-gradient(to top, #8b5cf6, #d946ef);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    transition: clip-path 0.1s linear;
                    filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.6));
                }

                .waterline-laser {
                    position: absolute;
                    left: -5%;
                    width: 110%;
                    height: 4px;
                    background: #fff;
                    box-shadow: 0 0 15px #fff, 0 0 30px #d946ef, 0 0 60px #8b5cf6;
                    transform: translateY(-50%);
                    z-index: 2;
                    opacity: 0.9;
                    border-radius: 50%;
                    transition: top 0.1s linear;
                }

                .student-chapter-subtitle {
                    color: #fff;
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-top: -3rem; /* Pull up closer to ACM */
                    margin-bottom: 2rem;
                    text-transform: uppercase;
                    text-align: center;
                    text-shadow: 0 0 15px rgba(139, 92, 246, 0.8);
                }

                .progress-details {
                    width: 400px;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .progress-bar-container {
                    width: 100%;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.1);
                    position: relative;
                    border-radius: 4px;
                }

                .progress-bar-fill {
                    position: absolute;
                    top: -1px; left: 0;
                    height: 4px;
                    background: #8b5cf6;
                    box-shadow: 0 0 20px #8b5cf6, 0 0 5px #fff;
                    border-radius: 4px;
                }

                .progress-comet {
                    position: absolute;
                    right: -10px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 24px; height: 24px;
                    background: radial-gradient(circle, #fff 0%, transparent 70%);
                    filter: drop-shadow(0 0 15px #d946ef);
                }

                .progress-stats {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    font-family: 'Outfit', sans-serif;
                }

                .status-word {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.95rem;
                    font-weight: 700;
                    letter-spacing: 5px;
                    text-transform: uppercase;
                    text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
                }

                .percentage {
                    display: flex;
                    align-items: baseline;
                    color: #fff;
                    font-size: 2.5rem;
                    font-weight: 900;
                    line-height: 1;
                    text-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
                }

                .percent-sign {
                    font-size: 1.2rem;
                    color: #d946ef;
                    margin-left: 5px;
                }

                @media (max-width: 768px) {
                    .liquid-text-wrapper { font-size: 8rem; }
                    .student-chapter-subtitle { font-size: 0.8rem; letter-spacing: 4px; margin-top: -1.5rem; margin-bottom: 1rem; }
                    .progress-details { width: 280px; }
                    .status-word { font-size: 0.75rem; }
                    .percentage { font-size: 2rem; }
                }
            `}</style>
        </motion.div>
    );
};

export default Loader;
