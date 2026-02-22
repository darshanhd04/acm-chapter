import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ setLoading }) => {
    const [progress, setProgress] = React.useState(0);
    const [wordIndex, setWordIndex] = React.useState(0);
    const words = ["EMPOWER", "INNOVATE", "CREATE"];

    // Particle Configuration - Memoized to prevent re-seeding on every render
    const particles = React.useMemo(() =>
        Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 8 + 6,
            delay: Math.random() * 2
        })), []);

    React.useEffect(() => {
        const duration = 2000; // Synchronized with App.jsx pulse
        const interval = 20;
        const step = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress(prev => Math.min(prev + step, 100));
        }, interval);

        const wordTimer = setInterval(() => {
            setWordIndex(prev => (prev + 1) % words.length);
        }, 700);

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
            scale: 1.05,
            filter: "blur(15px)",
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 30, rotateX: -90 },
        visible: i => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
            }
        })
    };

    return (
        <motion.div
            className="loader-container"
            variants={containerVariants}
            initial="initial"
            animate="visible"
            exit="exit"
        >
            {/* Ambient Background Particles */}
            <div className="particles-container">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="particle"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                        }}
                        animate={{
                            y: [0, -60, 0],
                            opacity: [0, 0.4, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="loader-content">
                {/* Cinematic Letter Animation */}
                <div className="acm-text-container">
                    {"ACM".split("").map((letter, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={letterVariants}
                            initial="hidden"
                            animate="visible"
                            className="acm-letter"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Staggered Subtitle */}
                <motion.div
                    className="student-chapter-text"
                    initial={{ opacity: 0, letterSpacing: "15px", filter: "blur(10px)" }}
                    animate={{ opacity: 1, letterSpacing: "4px", filter: "blur(0px)" }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                >
                    Student Chapter
                </motion.div>

                {/* Advanced Progress Section */}
                <div className="progress-outer-wrapper">
                    <div className="progress-container">
                        <motion.div
                            className="progress-fill"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                        {/* Energy Glow Sync */}
                        <motion.div
                            className="progress-glow"
                            animate={{
                                left: `${progress}%`,
                                opacity: [0.2, 0.8, 0.2]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                    <div className="progress-percentage-wrapper">
                        <span className="percentage-num">{Math.round(progress)}</span>
                        <span className="percentage-symbol">%</span>
                    </div>
                </div>

                {/* Dynamic Vision Words */}
                <div className="vision-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={wordIndex}
                            className="rotating-word"
                            initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            exit={{ opacity: 0, filter: "blur(8px)", y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {words[wordIndex]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
                .loader-container {
                    position: fixed;
                    inset: 0;
                    background-color: #09090b;
                    z-index: 9999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    perspective: 1200px;
                }

                .particles-container {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .particle {
                    position: absolute;
                    background: #8b5cf6;
                    border-radius: 50%;
                    pointer-events: none;
                }

                .loader-content {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .acm-text-container {
                    display: flex;
                    gap: 0.3rem;
                    margin-bottom: 0.2rem;
                }

                .acm-letter {
                    font-family: 'Outfit', sans-serif;
                    font-size: 6.5rem;
                    font-weight: 900;
                    color: #ffffff;
                    text-shadow: 0 0 50px rgba(139, 92, 246, 0.3);
                    display: inline-block;
                    line-height: 1;
                }

                .student-chapter-text {
                    color: rgba(255, 255, 255, 0.4);
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 3.5rem;
                    text-align: center;
                    letter-spacing: 4px;
                }

                .progress-outer-wrapper {
                    width: 280px;
                    margin-bottom: 2.5rem;
                }

                .progress-container {
                    position: relative;
                    width: 100%;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #8b5cf6, #d946ef);
                    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
                }

                .progress-glow {
                    position: absolute;
                    top: 0;
                    width: 60px;
                    height: 100%;
                    background: radial-gradient(circle, #ffffff 0%, transparent 80%);
                    transform: translateX(-50%);
                    filter: blur(2px);
                }

                .progress-percentage-wrapper {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 10px;
                    font-family: 'Outfit', sans-serif;
                    color: #8b5cf6;
                    font-size: 0.85rem;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .vision-container {
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .rotating-word {
                    color: #8b5cf6;
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.85rem;
                    font-weight: 700;
                    letter-spacing: 6px;
                    text-transform: uppercase;
                }

                .loader-container::after {
                    content: '';
                    position: absolute;
                    width: 900px;
                    height: 900px;
                    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
                    z-index: -1;
                    animation: pulseBG 5s infinite ease-in-out;
                }

                @keyframes pulseBG {
                    0%, 100% { transform: scale(1); opacity: 0.4; }
                    50% { transform: scale(1.15); opacity: 0.7; }
                }

                @media (max-width: 768px) {
                    .acm-letter { font-size: 4.5rem; }
                    .progress-outer-wrapper { width: 220px; }
                    .student-chapter-text { font-size: 0.8rem; letter-spacing: 3px; }
                }
            `}</style>
        </motion.div>
    );
};

export default Loader;
