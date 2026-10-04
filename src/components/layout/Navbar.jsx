import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Container from '../ui/Container';

const MotionLink = motion(Link);

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Services', to: '/services' },
  { name: 'Yilnan Builds', to: '/yilnan-builds' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const linkClasses = ({ isActive }) =>
  `relative text-sm lg:text-[15px] font-medium transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:rounded-full after:bg-yilnan-accent after:transition-all after:duration-300 ${
    isActive
      ? 'text-yilnan-text after:w-full'
      : 'text-yilnan-text/75 hover:text-yilnan-text after:w-0 hover:after:w-full'
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-yilnan-base/85 backdrop-blur-xl border-b border-yilnan-border shadow-lg'
          : 'bg-gradient-to-b from-yilnan-base/70 to-transparent'
      }`}
    >
      <Container className={`transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="flex items-center justify-between">
          <MotionLink
            to="/"
            className="text-2xl md:text-3xl font-bold tracking-tight text-yilnan-text"
            whileHover={{ scale: 1.04 }}
          >
            Yilnan<span className="text-yilnan-accent">.</span>
          </MotionLink>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.to} end={link.to === '/'} className={linkClasses}>
                {link.name}
              </NavLink>
            ))}
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-yilnan-accent px-5 py-2.5 text-sm font-semibold text-yilnan-accentDark transition hover:brightness-95"
            >
              Start a project →
            </MotionLink>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-yilnan-text p-2"
          >
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
            className="md:hidden bg-yilnan-base/97 backdrop-blur-xl border-b border-yilnan-border"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `py-3 px-4 rounded-lg text-base transition-colors ${
                        isActive
                          ? 'text-yilnan-text bg-yilnan-surface'
                          : 'text-yilnan-text/75 hover:text-yilnan-text hover:bg-yilnan-surface'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 rounded-full bg-yilnan-accent px-5 py-3 text-sm font-semibold text-yilnan-accentDark text-center transition hover:brightness-95"
                >
                  Start a project →
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