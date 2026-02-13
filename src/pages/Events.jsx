import React from 'react';
import EventCard from '../components/EventCard';
import { Plus } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

import hacktoberfestImg from '../assets/hacktoberfest.svg';
import aiWorkshopImg from '../assets/ai_workshop.svg';
import webBootcampImg from '../assets/web_bootcamp.svg';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Hacktoberfest 2025",
            date: "Oct 15, 2025",
            time: "10:00 AM",
            location: "SIT Campus",
            description: "Celebrating open source with code, workshops, and swag.",
            image: hacktoberfestImg
        },
        {
            id: 2,
            title: "AI Workshop Series",
            date: "Nov 05, 2025",
            time: "2:00 PM",
            location: "CS Dept Seminar Hall",
            description: "Deep dive into Neural Networks and Deep Learning concepts.",
            image: aiWorkshopImg
        },
        {
            id: 3,
            title: "Web Dev Bootcamp",
            date: "Sept 20, 2025",
            time: "9:00 AM",
            location: "Online",
            description: "Learn React, Node.js and build a full-stack application.",
            image: webBootcampImg
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <PageTransition>
            <div className="page-container">
                <div className="container" style={{ paddingTop: '180px', paddingBottom: '4rem' }}>
                    <div className="events-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <motion.h1
                            className="section-title"
                            style={{ marginBottom: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >Upcoming Events</motion.h1>

                        <motion.button
                            className="btn"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                                color: "white",
                                border: "none",
                                position: "relative",
                                overflow: "hidden"
                            }}
                            onClick={() => alert('Add Event functionality coming soon!')}
                        >
                            <motion.div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    transform: "skewX(-20deg) translateX(-150%)"
                                }}
                                animate={{ left: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
                            />
                            <Plus size={20} style={{ marginRight: '8px' }} />
                            Add Event
                        </motion.button>
                    </div>

                    <motion.div
                        className="events-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {events.map(event => (
                            <motion.div key={event.id} variants={itemVariants} whileHover={{ y: -10 }}>
                                <EventCard {...event} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Events;
