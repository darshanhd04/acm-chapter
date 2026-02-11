import React from 'react';
import EventCard from '../components/EventCard';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Hacktoberfest 2025",
            date: "Oct 15, 2025",
            time: "10:00 AM",
            location: "SIT Campus",
            description: "Celebrating open source with code, workshops, and swag.",
            image: "https://images.unsplash.com/photo-1504384308090-c54be3852f9d?auto=format&fit=crop&q=80"
        },
        {
            id: 2,
            title: "AI Workshop Series",
            date: "Nov 05, 2025",
            time: "2:00 PM",
            location: "CS Dept Seminar Hall",
            description: "Deep dive into Neural Networks and Deep Learning concepts.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
        },
        {
            id: 3,
            title: "Web Dev Bootcamp",
            date: "Sept 20, 2025",
            time: "9:00 AM",
            location: "Online",
            description: "Learn React, Node.js and build a full-stack application.",
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80"
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
                    <motion.h1
                        className="section-title"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >Upcoming Events</motion.h1>

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
