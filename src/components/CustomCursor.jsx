import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
            />
            <motion.div
                className="cursor-outline"
                animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
            />
            <style>{`
                .cursor-dot {
                    width: 8px;
                    height: 8px;
                    background-color: #38bdf8;
                    border-radius: 50%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 9999;
                    mix-blend-mode: difference;
                }
                .cursor-outline {
                    width: 40px;
                    height: 40px;
                    border: 1px solid rgba(56, 189, 248, 0.5);
                    border-radius: 50%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 9999;
                }
                @media (pointer: coarse) {
                    .cursor-dot, .cursor-outline {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
