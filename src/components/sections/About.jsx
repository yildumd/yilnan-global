import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiTrendingUp, FiUsers, FiBox, FiBriefcase, FiGift } from 'react-icons/fi';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';

const About = () => {
  const stats = [
    { icon: FiUsers, value: '2', label: 'Ventures Owned' },
    { icon: FiTrendingUp, value: '5', label: 'Live Client Products' },
    { icon: FiTarget, value: '6+', label: 'Sectors' },
  ];

  const values = ['Africa-first', 'We own our work', 'Built to last', 'One idea at a time'];

  const groupStructure = [
    {
      icon: FiBox,
      title: 'Our Ventures',
      description: 'Products we own and run — AgriSync AI, Mbegu Flavours.',
      status: 'Live',
    },
    {
      icon: FiBriefcase,
      title: 'Client Solutions',
      description: 'Software we build for businesses across Africa.',
      status: 'Active',
    },
    {
      icon: FiGift,
      title: 'Yilnan Builds',
      description: 'A free website for one selected business, every month.',
      status: 'Monthly',
    },
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
          <Eyebrow className="mb-4">Who we are</Eyebrow>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-6">
            A group that builds — and{' '}
            <span className="gradient-text">owns</span> — what it believes in.
          </h2>
          <p className="text-yilnan-textMuted leading-relaxed mb-6">
            Yilnan Global Concepts is a Jos-based group building across technology and food. We
            don't just build software for hire — we build and run our own ventures, from an AI
            agricultural platform to an export-grade spice brand. That's the difference: we back
            our own ideas with the same code we write for yours.
          </p>
          <p className="text-yilnan-textMuted leading-relaxed mb-6">
            It started with a simple belief — that world-class products can be built from Plateau
            State, for Nigeria and the wider African market. Since then we've shipped platforms
            across agriculture, health, logistics, governance, security, and food. Some we own.
            Some we built for clients. All of them solve real, local problems.
          </p>
          <p className="text-yilnan-textMuted leading-relaxed mb-8">
            When you work with Yilnan, you're not handing your idea to a shop that's never carried
            the risk itself. We know what it takes to launch, run, and grow a real product —
            because we do it with our own. Your idea. Our code.
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

        {/* Right side – group structure visual */}
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
              <span className="text-sm font-mono text-yilnan-textFaint">yilnan_group_structure</span>
            </div>
            <div className="space-y-4">
              {groupStructure.map((item) => (
                <div key={item.title} className="bg-yilnan-surface2 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-yilnan-accentSoft border border-yilnan-accentBorder flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-yilnan-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-medium text-yilnan-text">{item.title}</span>
                      <span className="text-xs text-yilnan-accent flex-shrink-0">{item.status}</span>
                    </div>
                    <p className="text-xs text-yilnan-textFaint leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center text-xs text-yilnan-textFaint">
              Based in Jos, Plateau State
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
