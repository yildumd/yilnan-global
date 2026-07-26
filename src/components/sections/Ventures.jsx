import { motion } from 'framer-motion';
import { FiArrowUpRight, FiSun, FiBox } from 'react-icons/fi';
import Section from '../ui/Section';

const ventures = [
  {
    name: 'AgriSync AI',
    category: 'AgriTech',
    description:
      'AI-powered agricultural platform for African farmers — AI crop diagnosis, a produce marketplace, farm GPS registration, carbon scoring, and SOS safety, delivered as a PWA with an Android app.',
    status: 'Live',
    url: 'https://agrisyncai.farm',
    urlLabel: 'agrisyncai.farm',
    tags: ['React', 'Vite', 'Firebase', 'Capacitor', 'AI'],
    icon: FiSun,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Mbegu Flavours',
    category: 'Food & Spice',
    description:
      "Yilnan's export-grade spice brand, built from a near-complete factory in Jos — Pepper Soup Spice, Mai Suya (Classic & Hot), and Naija Everyday blends.",
    status: 'Factory near-complete · Jos, Nigeria',
    tags: ['Export-grade', 'Spice Blends', 'Food Production'],
    icon: FiBox,
    gradient: 'from-orange-500 to-red-500',
  },
];

const Ventures = () => {
  return (
    <Section id="ventures" className="bg-dark-200/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-primary-500 font-semibold"
        >
          Our ventures
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4"
        >
          Businesses we <span className="gradient-text">own and run</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg"
        >
          Yilnan builds products we believe in enough to own — across tech and food.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {ventures.map((venture, index) => (
          <motion.div
            key={venture.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass-card overflow-hidden group"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-primary-400 bg-primary-500/10 px-2 py-1 rounded">
                    {venture.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-3 mb-2">{venture.name}</h3>
                </div>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${venture.gradient} p-2`}>
                  <venture.icon className="w-full h-full text-white" />
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {venture.description}
              </p>

              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-white/80">{venture.status}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {venture.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {venture.url && (
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Visit {venture.urlLabel}
                  <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Ventures;
