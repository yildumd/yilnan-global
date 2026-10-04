import { motion } from 'framer-motion';
import {
  FiSearch,
  FiBarChart2,
  FiGitBranch,
  FiTool,
  FiZap,
  FiTrendingUp,
} from 'react-icons/fi';
import Section from '../ui/Section';

const steps = [
  {
    number: '01',
    icon: FiSearch,
    title: 'Discover',
    description: 'We get to know your idea, your users, and what success looks like for you.',
  },
  {
    number: '02',
    icon: FiBarChart2,
    title: 'Plan',
    description: 'We scope the work, choose the right tech, and map a clear build roadmap.',
  },
  {
    number: '03',
    icon: FiGitBranch,
    title: 'Design',
    description: 'We design the interface and experience — how it looks and how it feels to use.',
  },
  {
    number: '04',
    icon: FiTool,
    title: 'Build',
    description: 'We develop your website, app, or software with clean, production-ready code.',
  },
  {
    number: '05',
    icon: FiZap,
    title: 'Launch',
    description: 'We test, deploy, and take your product live — on the web or the app stores.',
  },
  {
    number: '06',
    icon: FiTrendingUp,
    title: 'Support & Scale',
    description: 'We maintain, improve, and grow your product as your business grows.',
  },
];

const Process = () => {
  return (
    <Section id="process" className="bg-yilnan-light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider font-semibold text-yilnan-accentOnLight">
          How we work
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-4 text-yilnan-ink"
        >
          A proven <span className="text-yilnan-accentOnLight">6‑step process</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-yilnan-inkMuted text-lg"
        >
          From first idea to launch and beyond — we partner with you every step of the way.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-yilnan-lightBorder bg-yilnan-lightCard p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-yilnan-accent flex items-center justify-center text-yilnan-accentDark font-semibold text-xl">
                  {step.number}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <step.icon className="w-5 h-5 text-yilnan-accentOnLight" />
                  <h3 className="text-xl font-semibold text-yilnan-ink">{step.title}</h3>
                </div>
                <p className="text-yilnan-inkMuted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Process;