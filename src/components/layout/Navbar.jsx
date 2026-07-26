import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Container from '../ui/Container';

const MotionLink = motion(Link);

const outlineButtonClasses =
  'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base border border-white/20 hover:border-primary-500 text-white hover:text-primary-500 backdrop-blur-sm';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Services', to: '/services' },
  { name: 'Yilnan Builds', to: '/yilnan-builds' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
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
          <MotionLink
            to="/"
            className="text-2xl md:text-3xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Yilnan Global
          </MotionLink>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `transition-colors text-sm lg:text-base font-medium ${
                    isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={outlineButtonClasses}
            >
              Book Consultation →
            </MotionLink>
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
                  <NavLink
                    key={link.name}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `py-3 px-4 rounded-lg hover:bg-white/5 ${
                        isActive ? 'text-white bg-white/5' : 'text-white/80 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`${outlineButtonClasses} w-full`}
                >
                  Book Consultation →
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;