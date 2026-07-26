import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiTool, FiMessageCircle } from 'react-icons/fi';
import Section from '../ui/Section';

const steps = [
  {
    number: '01',
    icon: FiSend,
    title: 'Apply',
    description: 'Send a short pitch about your business and why a website would help.',
  },
  {
    number: '02',
    icon: FiCheckCircle,
    title: 'We Choose',
    description:
      'David, with a small panel, selects one business based on genuine need, story, and readiness — never by chance.',
  },
  {
    number: '03',
    icon: FiTool,
    title: 'We Build',
    description:
      'A fixed-template site, up to 3 pages, delivered in 5–7 days. You only cover hosting and the domain.',
  },
];

const whatsappMessage = encodeURIComponent(
  "Hi Yilnan, I'd like to apply for Yilnan Builds. My business is [name] and here's why a website would help: "
);
const applyLink = `https://wa.me/2348164083309?text=${whatsappMessage}`;

const YilnanBuilds = () => {
  return (
    <Section id="yilnan-builds" className="bg-dark-200/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-primary-500 font-semibold"
        >
          Community giveaway
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4"
        >
          Yilnan Builds — <span className="gradient-text">one business, every month</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg"
        >
          Every month we build a website for one business, selected on merit — genuine need, a
          real story, and readiness to launch. It's not a raffle and there's no draw: David and a
          small panel read every application and choose deliberately. The selected business only
          covers hosting and the domain.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="glass-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <step.icon className="w-5 h-5 text-primary-400" />
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 md:p-10 text-center max-w-3xl mx-auto mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Think your business is a good fit?
        </h3>
        <p className="text-white/60 mb-6 max-w-xl mx-auto">
          Tell us who you are and why a website would make a real difference. Applications are
          reviewed every month.
        </p>
        <motion.a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50"
        >
          <FiMessageCircle />
          Apply on WhatsApp
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl mx-auto rounded-2xl border border-dashed border-white/15 px-6 py-5 text-center"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full mb-2">
          Coming 2027
        </span>
        <p className="text-white/60 text-sm max-w-xl mx-auto">
          The Yilnan Startup Fund — starting 2027, we plan to invest roughly ₦1M in one selected
          founder every 6 months.
        </p>
      </motion.div>
    </Section>
  );
};

export default YilnanBuilds;
