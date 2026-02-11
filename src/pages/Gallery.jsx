import React, { useState } from 'react';
import '../styles/gallery.css';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    const photos = [
        { id: 1, url: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80" },
        { id: 2, url: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80" },
        { id: 3, url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80" },
        { id: 4, url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" },
        { id: 5, url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" },
        { id: 6, url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <PageTransition>
            <div className="page-container">
                <div className="container" style={{ paddingTop: '180px', paddingBottom: '4rem' }}>
                    <motion.h1
                        className="section-title"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >Event Highlights</motion.h1>
                    <motion.p
                        className="gallery-intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >Capturing moments of innovation and collaboration.</motion.p>

                    <motion.div
                        className="gallery-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {photos.map((photo) => (
                            <motion.div
                                key={photo.id}
                                className="gallery-item"
                                variants={itemVariants}
                                layoutId={`card-${photo.id}`}
                                onClick={() => setSelectedId(photo.id)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.img
                                    src={photo.url}
                                    alt="Gallery Highlight"
                                    loading="lazy"
                                />
                                <motion.div className="gallery-overlay">
                                    <div className="view-btn">
                                        <ZoomIn size={20} />
                                        <span>View Large</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Lightbox Modal */}
                    <AnimatePresence>
                        {selectedId && (
                            <div className="lightbox-wrapper">
                                <motion.div
                                    className="lightbox-backdrop"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedId(null)}
                                />

                                {photos.filter(p => p.id === selectedId).map(photo => (
                                    <motion.div
                                        key={photo.id}
                                        className="lightbox-content"
                                        layoutId={`card-${photo.id}`}
                                    >
                                        <motion.img
                                            src={photo.url}
                                            className="lightbox-image"
                                        />
                                        <motion.button
                                            className="lightbox-close-btn"
                                            onClick={() => setSelectedId(null)}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <X size={24} />
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </PageTransition>
    );
};

export default Gallery;
