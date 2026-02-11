import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import './index.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  // Reduced simulated load time to 1.8 seconds for a snappier experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Background />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" setLoading={setLoading} />
        ) : (
          <>
            <Navbar />
            <main className="main-content">
              <AnimatedRoutes />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
