import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';

const About = () => {
  const stats = [
    { icon: FiUsers, value: '2', label: 'Ventures Owned' },
    { icon: FiTrendingUp, value: '7+', label: 'Client Projects Shipped' },
    { icon: FiTarget, value: '6+', label: 'Sectors' },
  ];

  const values = [
    'Operational excellence',
    'Data‑driven decisions',
    'African context first',
    'Long‑term partnership',
  ];

  return (
    <Section id="about" className="bg-yilnan-surface/30">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left side – mission text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow className="mb-4">About Yilnan Global</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-6">
            We don’t just build websites — we build{' '}
            <span className="gradient-text">business systems</span>
          </h2>
          <p className="text-yilnan-textMuted leading-relaxed mb-6">
            Yilnan Global is a modern African business consultancy and digital transformation firm.
            We help restaurants, startups, and growing businesses structure operations, automate workflows,
            digitize systems, and scale efficiently.
          </p>
          <p className="text-yilnan-textMuted leading-relaxed mb-8">
            Our approach combines deep operational understanding with cutting‑edge technology.
            We don’t offer generic templates; we build custom systems that solve real African business challenges.
          </p>

          {/* Quick values list */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {values.map((value, idx) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2"
              >
                <FiCheckCircle className="text-yilnan-accent w-5 h-5 flex-shrink-0" />
                <span className="text-sm text-yilnan-text">{value}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-yilnan-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-yilnan-accent mx-auto mb-2" />
                <div className="text-2xl font-semibold text-yilnan-text">{stat.value}</div>
                <div className="text-xs text-yilnan-textFaint">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right side – visual / digital transformation illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-6 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-mono text-yilnan-textFaint">digital_transformation_log</span>
            </div>
            <div className="space-y-4">
              <div className="bg-yilnan-surface2 rounded-xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-yilnan-textMuted">System modernization</span>
                  <span className="text-yilnan-accent">Active</span>
                </div>
                <div className="w-full bg-yilnan-border rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '87%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-yilnan-accent h-2 rounded-full"
                  />
                </div>
              </div>
              <div className="bg-yilnan-surface2 rounded-xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-yilnan-textMuted">Workflow automation</span>
                  <span className="text-yilnan-accent">94%</span>
                </div>
                <div className="w-full bg-yilnan-border rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '94%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="bg-yilnan-accent h-2 rounded-full"
                  />
                </div>
              </div>
              <div className="bg-yilnan-surface2 rounded-xl p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-yilnan-textMuted">Staff onboarding digitization</span>
                  <span className="text-yilnan-accent">100%</span>
                </div>
                <div className="w-full bg-yilnan-border rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="bg-yilnan-accent h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center text-xs text-yilnan-textFaint">
              Real‑time system health – powered by Yilnan automation
            </div>
          </div>

          {/* Decorative floating badge */}
          <motion.div
            className="absolute -bottom-3 -left-3 glass-card px-3 py-1.5 z-20 hidden sm:block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="flex items-center gap-1 text-xs text-yilnan-text">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span>African‑first approach</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
