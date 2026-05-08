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

const industries = [
  {
    icon: FiCoffee,
    name: 'Restaurants',
    description: 'Kitchen systems, POS, order flow, staff management',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: FiSun,
    name: 'Agriculture',
    description: 'Supply chain, farm management, IoT integration',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiUsers,
    name: 'Startups',
    description: 'Operational foundations, dashboards, automation',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiBookOpen,
    name: 'Education',
    description: 'LMS, student portals, certification systems',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: FiShoppingBag,
    name: 'Retail',
    description: 'Inventory, sales tracking, multi‑store systems',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: FiMonitor,
    name: 'Agencies',
    description: 'Client portals, project tracking, reporting',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: FiBriefcase,
    name: 'SMEs',
    description: 'End‑to‑end digital transformation',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

const Industries = () => {
  return (
    <Section id="industries" className="bg-dark-200/20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-primary-500 font-semibold"
        >
          Industry expertise
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4"
        >
          Transforming businesses{' '}
          <span className="gradient-text">across Africa</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg"
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
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.gradient} p-3 mx-auto mb-4 group-hover:scale-110 transition-transform`}>
              <industry.icon className="w-full h-full text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
            <p className="text-xs text-white/50">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Industries;