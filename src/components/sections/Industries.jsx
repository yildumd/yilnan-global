import { motion } from 'framer-motion';
import {
  FiCoffee,
  FiSun,
  FiUsers,
  FiBookOpen,
  FiShoppingBag,
  FiMonitor,
  FiBriefcase,
} from 'react-icons/fi';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';

const industries = [
  {
    icon: FiCoffee,
    name: 'Restaurants',
    description: 'Kitchen systems, POS, order flow, staff management',
  },
  {
    icon: FiSun,
    name: 'Agriculture',
    description: 'Supply chain, farm management, IoT integration',
  },
  {
    icon: FiUsers,
    name: 'Startups',
    description: 'Operational foundations, dashboards, automation',
  },
  {
    icon: FiBookOpen,
    name: 'Education',
    description: 'LMS, student portals, certification systems',
  },
  {
    icon: FiShoppingBag,
    name: 'Retail',
    description: 'Inventory, sales tracking, multi‑store systems',
  },
  {
    icon: FiMonitor,
    name: 'Agencies',
    description: 'Client portals, project tracking, reporting',
  },
  {
    icon: FiBriefcase,
    name: 'SMEs',
    description: 'End‑to‑end digital transformation',
  },
];

const Industries = () => {
  return (
    <Section id="industries" className="bg-yilnan-surface/20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Eyebrow>Industry expertise</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-4"
        >
          Transforming businesses{' '}
          <span className="gradient-text">across Africa</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-yilnan-textMuted text-lg"
        >
          We understand the unique challenges of each sector. Our solutions are tailored to your industry.
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
            className="glass-card p-5 text-center group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-yilnan-surface2 border border-yilnan-border p-3 mx-auto mb-4 group-hover:border-yilnan-accentBorder transition-colors">
              <industry.icon className="w-full h-full text-yilnan-textMuted group-hover:text-yilnan-accent transition-colors" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-yilnan-text">{industry.name}</h3>
            <p className="text-xs text-yilnan-textFaint">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Industries;
