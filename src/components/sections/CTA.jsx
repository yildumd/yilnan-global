import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-purple-600/20 to-primary-600/20 blur-3xl" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to{' '}
            <span className="gradient-text">Modernize Your Business?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Let’s discuss how Yilnan Global can help you build smarter operations, automate workflows, and scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="primary" className="group">
              Schedule Consultation
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">Start Your Project</Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-white/60">
            <div className="flex items-center gap-2">
              <FiMail className="text-primary-400" />
              <span>yildumd@gmail.com</span>
            </div>
            <a href="tel:+2348164083309" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
              <FiPhone className="text-primary-400" />
              <span>+234 816 408 3309</span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;