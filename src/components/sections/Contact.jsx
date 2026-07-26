import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <Section id="contact" className="bg-dark-200/20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-primary-500 font-semibold"
        >
          Get in touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4"
        >
          Let's <span className="gradient-text">work together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg"
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
            <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
              <FiMail className="w-6 h-6 text-primary-500" />
            </div>
            <div>
              <h3 className="text-sm text-white/50">Email</h3>
              <p className="text-white font-medium">yildumd@gmail.com</p>
            </div>
          </div>
          <a
            href="tel:+2348164083309"
            className="glass-card p-6 flex items-center gap-4 hover:bg-white/5 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
              <FiPhone className="w-6 h-6 text-primary-500" />
            </div>
            <div>
              <h3 className="text-sm text-white/50">Phone</h3>
              <p className="text-white font-medium">+234 816 408 3309</p>
            </div>
          </a>
          <div className="glass-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
              <FiMapPin className="w-6 h-6 text-primary-500" />
            </div>
            <div>
              <h3 className="text-sm text-white/50">Location</h3>
              <p className="text-white font-medium">Lagos, Nigeria</p>
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
              <label className="block text-sm text-white/70 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-white/70 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-white/70 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500 transition-colors"
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