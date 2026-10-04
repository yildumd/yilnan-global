import { motion } from 'framer-motion';
import {
  FiSun,
  FiHeart,
  FiTruck,
  FiBriefcase,
  FiShield,
  FiCoffee,
  FiBookOpen,
  FiUsers,
} from 'react-icons/fi';
import Section from '../ui/Section';

const industries = [
  {
    icon: FiSun,
    name: 'Agriculture',
    description: 'AI crop diagnosis and farm platforms — AgriSync AI',
  },
  {
    icon: FiHeart,
    name: 'Health',
    description: 'Hospital management and patient systems — Yilnan HealthOS',
  },
  {
    icon: FiTruck,
    name: 'Logistics',
    description: 'Delivery and logistics platforms — Ryaniva',
  },
  {
    icon: FiBriefcase,
    name: 'Government',
    description: 'Revenue and registration systems — LevyTrack',
  },
  {
    icon: FiShield,
    name: 'Security',
    description: 'Community safety intelligence — GuardPath',
  },
  {
    icon: FiCoffee,
    name: 'Food',
    description: 'Spice production and food brands — Mbegu Flavours',
  },
  {
    icon: FiBookOpen,
    name: 'Education',
    description: 'Learning platforms and school systems',
  },
  {
    icon: FiUsers,
    name: 'Startups & SMEs',
    description: 'MVPs, websites, and digital foundations',
  },
];

const Industries = () => {
  return (
    <Section id="industries" className="bg-yilnan-light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider font-semibold text-yilnan-accentOnLight">
          Where we work
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-4 text-yilnan-ink"
        >
          Building across Africa's{' '}
          <span className="text-yilnan-accentOnLight">key sectors</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-yilnan-inkMuted text-lg"
        >
          From agriculture to healthcare, we build real software for the sectors that move Africa forward.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="rounded-2xl border border-yilnan-lightBorder bg-yilnan-lightCard p-5 text-center group cursor-pointer shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-yilnan-light border border-yilnan-lightBorder p-3 mx-auto mb-4 group-hover:border-yilnan-accentBorder transition-colors">
              <industry.icon className="w-full h-full text-yilnan-inkMuted group-hover:text-yilnan-accentOnLight transition-colors" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-yilnan-ink">{industry.name}</h3>
            <p className="text-xs text-yilnan-inkMuted">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Industries;