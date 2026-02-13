import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import '../styles/team.css';

const TeamMemberCard = ({ name, role, image, github, linkedin, email, size = "medium", variants }) => {
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]); // Reduced tilt for full image
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const xPct = (e.clientX - rect.left) / width - 0.5;
        const yPct = (e.clientY - rect.top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={`team-card-wrapper size-${size}`}
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={variants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
            <motion.div
                className="team-card"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
            >
                {/* Full Background Image */}
                <div className="team-image-full">
                    <img src={image} alt={name} />
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div className="card-gradient-overlay"></div>

                {/* Content Overlay */}
                <div className="team-info-overlay" style={{ transform: "translateZ(20px)" }}>
                    <div className="info-content">
                        <h3>{name}</h3>
                        <p className="team-role">{role}</p>

                        <div className="team-socials">
                            {github && (
                                <a href={github} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Github size={20} />
                                </a>
                            )}
                            {linkedin && (
                                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Linkedin size={20} />
                                </a>
                            )}
                            {email && (
                                <a href={`mailto:${email}`} className="social-link">
                                    <Mail size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Border Glow */}
                <div className="card-border-glow"></div>
            </motion.div>
        </motion.div>
    );
};

export default TeamMemberCard;
