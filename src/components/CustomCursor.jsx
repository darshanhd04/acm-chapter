import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    // Exact mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Single advanced spring physics for the elegant trailing ring
    const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';
                
            setIsHovering(isClickable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Hover animation variants for the single advanced ring
    const ringVariants = {
        default: { scale: 1, opacity: 0.6, borderWidth: "1.5px" },
        hover: { scale: 2.5, opacity: 0.9, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderWidth: "1px" },
        click: { scale: 0.8, opacity: 1, borderWidth: "2px" }
    };

    return (
        <>
            {/* The single advanced ring that trails the normal cursor */}
            <motion.div
                className="advanced-trailing-ring"
                style={{ x: cursorX, y: cursorY }}
                variants={ringVariants}
                animate={isClicking ? "click" : (isHovering ? "hover" : "default")}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
            
            <style>{`
                /* We DO NOT hide the cursor here. The user wants the 'normal' cursor visible */
                
                .advanced-trailing-ring {
                    position: fixed;
                    top: -16px; /* Offset by half size (32px / 2) */
                    left: -16px;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 1.5px solid #0ea5e9; /* Sky Blue 500 */
                    pointer-events: none;
                    will-change: transform;
                    z-index: 999999;
                    box-shadow: 0 0 12px rgba(14, 165, 233, 0.4);
                }

                @media (pointer: coarse) {
                    .advanced-trailing-ring {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
