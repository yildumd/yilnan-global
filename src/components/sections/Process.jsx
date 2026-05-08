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
    description: 'We analyze your current operations, pain points, and business goals.',
  },
  {
    number: '02',
    icon: FiBarChart2,
    title: 'Analyze',
    description: 'Deep dive into data, workflows, and inefficiencies across your business.',
  },
  {
    number: '03',
    icon: FiGitBranch,
    title: 'Structure',
    description: 'Define clear operational frameworks, SOPs, and team roles.',
  },
  {
    number: '04',
    icon: FiTool,
    title: 'Build',
    description: 'Develop custom systems, dashboards, and automation tools.',
  },
  {
    number: '05',
    icon: FiZap,
    title: 'Automate',
    description: 'Deploy workflows, integrations, and real-time automation.',
  },
  {
    number: '06',
    icon: FiTrendingUp,
    title: 'Support & Scale',
    description: 'Continuous optimization, training, and scaling support.',
  },
];

const Process = () => {
  return (
    <Section id="process">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-primary-500 font-semibold"
        >
          How we work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4"
        >
          A proven <span className="gradient-text">6‑step process</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg"
        >
          From discovery to scale – we partner with you every step of the way.
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
                <p className="text-white/60 text-sm leading-relaxed">
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