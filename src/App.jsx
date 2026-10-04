import { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import YilnanBuildsPage from './pages/YilnanBuildsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: 'easeIn' } },
};

function Page({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function AnimatedRoutes({ lenisRef }) {
  const location = useLocation();

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [location.pathname, lenisRef]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><HomePage /></Page>} />
        <Route path="/portfolio" element={<Page><PortfolioPage /></Page>} />
        <Route path="/services" element={<Page><ServicesPage /></Page>} />
        <Route path="/yilnan-builds" element={<Page><YilnanBuildsPage /></Page>} />
        <Route path="/about" element={<Page><AboutPage /></Page>} />
        <Route path="/contact" element={<Page><ContactPage /></Page>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-yilnan-base">
      <Navbar />
      <main>
        <AnimatedRoutes lenisRef={lenisRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;