import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import '../styles/events.css';

const EventCard = ({ title, date, time, location, description, image }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="event-card-wrapper"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="event-card"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
            >
                <div style={{ transform: "translateZ(50px)" }} className="event-image-container">
                    <img src={image} alt={title} className="event-image" />
                    <div className="event-date-badge">
                        <span className="month">{date.split(' ')[0]}</span>
                        <span className="day">{date.split(' ')[1].replace(',', '')}</span>
                    </div>
                </div>

                <div className="event-content" style={{ transform: "translateZ(20px)" }}>
                    <h3 className="event-title">{title}</h3>

                    <div className="event-details">
                        <div className="detail-item">
                            <Clock size={16} />
                            <span>{time}</span>
                        </div>
                        <div className="detail-item">
                            <MapPin size={16} />
                            <span>{location}</span>
                        </div>
                    </div>

                    <p className="event-description">{description}</p>

                    <button className="btn btn-outline" style={{ width: '100%', marginTop: 'auto' }}>
                        Register Now
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default EventCard;
