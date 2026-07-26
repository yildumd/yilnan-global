import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';

const inputClasses =
  'w-full bg-yilnan-surface2 border border-yilnan-border rounded-lg px-4 py-2 text-yilnan-text focus:outline-none focus:border-yilnan-accent transition-colors';

const Contact = () => {
  return (
    <Section id="contact" className="bg-yilnan-surface/20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Eyebrow>Get in touch</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-4"
        >
          Let's <span className="gradient-text">work together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-yilnan-textMuted text-lg"
        >
          Have a project in mind? Reach out to us directly.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="glass-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yilnan-accentSoft flex items-center justify-center">
              <FiMail className="w-6 h-6 text-yilnan-accent" />
            </div>
            <div>
              <h3 className="text-sm text-yilnan-textFaint">Email</h3>
              <p className="text-yilnan-text font-medium">yildumd@gmail.com</p>
            </div>
          </div>
          <a
            href="tel:+2348164083309"
            className="glass-card p-6 flex items-center gap-4 hover:bg-yilnan-surface2 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-yilnan-accentSoft flex items-center justify-center">
              <FiPhone className="w-6 h-6 text-yilnan-accent" />
            </div>
            <div>
              <h3 className="text-sm text-yilnan-textFaint">Phone</h3>
              <p className="text-yilnan-text font-medium">+234 816 408 3309</p>
            </div>
          </a>
          <div className="glass-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yilnan-accentSoft flex items-center justify-center">
              <FiMapPin className="w-6 h-6 text-yilnan-accent" />
            </div>
            <div>
              <h3 className="text-sm text-yilnan-textFaint">Location</h3>
              <p className="text-yilnan-text font-medium">Jos, Plateau State</p>
            </div>
          </div>
        </motion.div>

        {/* Simple Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <form>
            <div className="mb-4">
              <label className="block text-sm text-yilnan-textMuted mb-2">Name</label>
              <input
                type="text"
                className={inputClasses}
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-yilnan-textMuted mb-2">Email</label>
              <input
                type="email"
                className={inputClasses}
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-yilnan-textMuted mb-2">Message</label>
              <textarea
                rows="4"
                className={inputClasses}
                placeholder="Tell us about your project..."
              />
            </div>
            <Button variant="primary" className="w-full justify-center gap-2">
              Send Message <FiSend />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
