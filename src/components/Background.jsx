import React from 'react';

const Background = () => {
    return (
        <div className="fixed-background">
            <div className="gradient-orbs">
                <div className="orb orb-1 animate-orb-1"></div>
                <div className="orb orb-2 animate-orb-2"></div>
                <div className="orb orb-3 animate-orb-3"></div>
            </div>
            <div className="grid-overlay"></div>

            <style>{`
                .fixed-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: -1;
                    background-color: #0f172a;
                    overflow: hidden;
                    transform: translateZ(0); /* Hardware acceleration */
                }
                
                .gradient-orbs {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    filter: blur(80px); /* Reduced blur for performance */
                    opacity: 0.4;
                    transform: translateZ(0);
                }
                
                .orb {
                    position: absolute;
                    border-radius: 50%;
                    will-change: transform; /* Hint browser for optimization */
                }
                
                .orb-1 {
                    top: -10%;
                    left: -10%;
                    width: 50vw;
                    height: 50vw;
                    background: radial-gradient(circle, #3b82f6, #1d4ed8);
                }
                
                .orb-2 {
                    bottom: -10%;
                    right: -10%;
                    width: 60vw;
                    height: 60vw;
                    background: radial-gradient(circle, #8b5cf6, #5b21b6);
                }
                
                .orb-3 {
                    top: 40%;
                    left: 40%;
                    width: 40vw;
                    height: 40vw;
                    background: radial-gradient(circle, #06b6d4, #0e7490);
                    opacity: 0.6;
                }

                /* CSS Animations on Compositor Thread */
                @keyframes float1 {
                    0% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(100px, 50px) scale(1.1); }
                    66% { transform: translate(-50px, 100px) scale(0.9); }
                    100% { transform: translate(0, 0) scale(1); }
                }

                @keyframes float2 {
                    0% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-100px, -50px) scale(1.2); }
                    66% { transform: translate(50px, -100px) scale(0.8); }
                    100% { transform: translate(0, 0) scale(1); }
                }

                @keyframes float3 {
                    0% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(50px, 100px) scale(1.1); }
                    66% { transform: translate(-100px, 50px) scale(0.9); }
                    100% { transform: translate(0, 0) scale(1); }
                }

                .animate-orb-1 { animation: float1 20s infinite ease-in-out; }
                .animate-orb-2 { animation: float2 25s infinite ease-in-out; }
                .animate-orb-3 { animation: float3 22s infinite ease-in-out; }

                .grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black, transparent 80%);
                    pointer-events: none;
                }
            `}</style>
        </div>
    );
};

export default Background;
