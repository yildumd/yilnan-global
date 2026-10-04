import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Section from '../ui/Section';

const inputClasses =
  'w-full bg-yilnan-light border border-yilnan-lightBorder rounded-lg px-4 py-2.5 text-yilnan-ink placeholder:text-yilnan-inkMuted/60 focus:outline-none focus:border-yilnan-accent transition-colors';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Yilnan Global, my name is ${form.name}. My email is ${form.email}.\n\n${form.message}`;
    window.open(`https://wa.me/2348164083309?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <Section id="contact" className="bg-yilnan-light">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-wider font-semibold text-yilnan-accentOnLight">
          Get in touch
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-4 text-yilnan-ink"
        >
          Let's <span className="text-yilnan-accentOnLight">work together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-yilnan-inkMuted text-lg"
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
          <a
            href="mailto:dyildum@gmail.com"
            className="rounded-2xl border border-yilnan-lightBorder bg-yilnan-lightCard shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-yilnan-accentSoft flex items-center justify-center">
              <FiMail className="w-6 h-6 text-yilnan-accentOnLight" />
            </div>
            <div>
              <h3 className="text-sm text-yilnan-inkMuted">Email</h3>
              <p className="text-yilnan-ink font-medium">dyildum@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+2348164083309"
            className="rounded-2xl border border-yilnan-lightBorder bg-yilnan-lightCard shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-yilnan-accentSoft flex items-center justify-center">
              <FiPhone className="w-6 h-6 text-yilnan-accentOnLight" />
            </div>
            <div>
              <h3 className="text-sm text-yilnan-inkMuted">Phone</h3>
              <p className="text-yilnan-ink font-medium">+234 816 408 3309</p>
            </div>
          </a>
          <div className="rounded-2xl border border-yilnan-lightBorder bg-yilnan-lightCard shadow-sm p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yilnan-accentSoft flex items-center justify-center">
              <FiMapPin className="w-6 h-6 text-yilnan-accentOnLight" />
            </div>
            <div>
              <h3 className="text-sm text-yilnan-inkMuted">Location</h3>
              <p className="text-yilnan-ink font-medium">Jos, Plateau State</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-yilnan-lightBorder bg-yilnan-lightCard shadow-sm p-6"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-yilnan-inkMuted mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-yilnan-inkMuted mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-yilnan-inkMuted mb-2">Message</label>
              <textarea
                rows="4"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-[10px] bg-yilnan-accent px-7 py-3.5 text-sm font-semibold text-yilnan-accentDark transition hover:brightness-95"
            >
              Send Message <FiSend />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;