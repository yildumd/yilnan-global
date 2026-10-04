import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';
import Container from '../ui/Container';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-yilnan-accent/10 blur-3xl" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-yilnan-text">
            Have an idea?{' '}
            <span className="gradient-text">Let’s build it.</span>
          </h2>
          <p className="text-yilnan-textMuted text-lg mb-8 max-w-2xl mx-auto">
            Whether it’s a website, an app, or a product you want to launch — we turn ideas into
            real software. Your idea. Our code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-yilnan-accent px-7 py-3.5 text-sm font-semibold text-yilnan-accentDark transition hover:brightness-95 group"
            >
              Start a project
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/2348164083309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-yilnan-borderStrong px-7 py-3.5 text-sm font-medium text-yilnan-text transition hover:bg-yilnan-surface"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-yilnan-textMuted">
            <a href="mailto:dyildum@gmail.com" className="flex items-center gap-2 hover:text-yilnan-accent transition-colors">
              <FiMail className="text-yilnan-accent" />
              <span>dyildum@gmail.com</span>
            </a>
            <a href="tel:+2348164083309" className="flex items-center gap-2 hover:text-yilnan-accent transition-colors">
              <FiPhone className="text-yilnan-accent" />
              <span>+234 816 408 3309</span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;