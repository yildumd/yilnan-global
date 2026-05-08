import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-300/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <Container className="py-4 md:py-5">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl md:text-3xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Yilnan Global
          </motion.a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white/80 hover:text-white transition-colors text-sm lg:text-base font-medium">
                {link.name}
              </a>
            ))}
            <Button variant="outline">Book Consultation →</Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-200/95 backdrop-blur-xl border-b border-white/10"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5">
                    {link.name}
                  </a>
                ))}
                <Button variant="outline" className="w-full justify-center">Book Consultation →</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;