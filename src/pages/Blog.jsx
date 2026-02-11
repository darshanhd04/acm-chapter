import React from 'react';
import { Clock, User } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Getting Started with Open Source",
            excerpt: "A beginner's guide to contributing to open source projects and making your first PR.",
            author: "Darshan H D",
            date: "Oct 10, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
        },
        {
            id: 2,
            title: "The Future of AI in 2026",
            excerpt: "Exploring the latest trends in Artificial Intelligence and what to expect in the coming year.",
            author: "Nuthan A M",
            date: "Sept 28, 2025",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
        },
        {
            id: 3,
            title: "Why You Should Join a Student Chapter",
            excerpt: "Benefits of networking, learning, and growing with a community like ACM.",
            author: "Mohammad Shoaib",
            date: "Sept 15, 2025",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80"
        },
        {
            id: 4,
            title: "Web Development Roadmap",
            excerpt: "Step-by-step guide to becoming a full-stack developer in 2025.",
            author: "Likith S",
            date: "Aug 20, 2025",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80"
        },
        {
            id: 5,
            title: "Introduction to Quantum Computing",
            excerpt: "Understanding the basics of Qubits, Superposition, and the future of computation.",
            author: "Darshan H D",
            date: "July 12, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
        },
        {
            id: 6,
            title: "Cybersecurity Best Practices",
            excerpt: "Essential tips to protect your personal data and secure your digital footprint.",
            author: "Mohammad Shoaib",
            date: "June 05, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
                    >Announcements & Blog</motion.h1>
                    <motion.p
                        className="blog-intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >Insights, tutorials, and news from the ACM SIT community.</motion.p>

                    <motion.div
                        className="blog-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {posts.map(post => (
                            <motion.article
                                key={post.id}
                                className="blog-card"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="blog-image">
                                    <img src={post.image} alt={post.title} loading="lazy" />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span><CalendarIcon size={14} /> {post.date}</span>
                                        <span><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                    <h2 className="blog-title">{post.title}</h2>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <div className="blog-author">
                                        <User size={16} />
                                        <span>{post.author}</span>
                                    </div>
                                    <button className="read-more">Read Article</button>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>

                <style>{`
                    .blog-title { /* existing styles logic if needed, but assuming css file handles it */ }
                    .blog-intro { text-align: center; color: var(--text-muted); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto; }
                    .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
                    .blog-card { background: var(--surface); border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); transition: border-color 0.3s ease; }
                    .blog-card:hover { border-color: var(--primary); }
                    .blog-image { height: 200px; overflow: hidden; }
                    .blog-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
                    .blog-card:hover .blog-image img { transform: scale(1.05); }
                    .blog-content { padding: 1.5rem; }
                    .blog-meta { display: flex; gap: 1rem; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem; }
                    .blog-meta span { display: flex; align-items: center; gap: 0.25rem; }
                    .blog-title { font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--text); }
                    .blog-excerpt { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6; }
                    .blog-author { display: flex; align-items: center; gap: 0.5rem; color: var(--text); font-weight: 500; font-size: 0.9rem; margin-bottom: 1rem; }
                    .read-more { background: transparent; border: none; color: var(--primary); font-weight: 600; cursor: pointer; padding: 0; }
                    .read-more:hover { text-decoration: underline; }
                `}</style>
            </div>
        </PageTransition>
    );
};

// Helper component for calendar icon since I missed importing it
const CalendarIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

export default Blog;
