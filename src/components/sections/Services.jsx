import { motion } from 'framer-motion';
import {
  FiBriefcase,
  FiGitBranch,
  FiDatabase,
  FiUsers,
  FiZap,
  FiMonitor,
  FiCpu,
} from 'react-icons/fi';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';

const services = [
  {
    icon: FiBriefcase,
    title: 'Business Consulting',
    description: 'Strategic planning, financial modeling, market entry, and operational audits.',
  },
  {
    icon: FiGitBranch,
    title: 'Operations Structuring',
    description: 'Define workflows, SOPs, team roles, and performance tracking systems.',
  },
  {
    icon: FiDatabase,
    title: 'Restaurant Systems',
    description: 'Kitchen workflow automation, POS integration, inventory, and order management.',
  },
  {
    icon: FiUsers,
    title: 'Staffing Support',
    description: 'Staff sourcing, onboarding systems, attendance, and shift organization.',
  },
  {
    icon: FiZap,
    title: 'Automation & Workflows',
    description: 'Smart forms, WhatsApp automation, dashboards, and reporting systems.',
  },
  {
    icon: FiMonitor,
    title: 'Website & Dashboard Development',
    description: 'Custom business portals, internal dashboards, and modern websites.',
  },
  {
    icon: FiCpu,
    title: 'Digital Transformation',
    description: 'End-to-end modernization of legacy processes with scalable tech.',
  },
];

const Services = () => {
  return (
    <Section id="services">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Eyebrow>What we offer</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-4"
        >
          Comprehensive <span className="gradient-text">business systems</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-yilnan-textMuted text-lg"
        >
          We blend consultancy with technology to deliver real operational impact.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="glass-card p-6 hover:border-yilnan-borderStrong transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-yilnan-surface2 border border-yilnan-border p-2.5 mb-5 group-hover:border-yilnan-accentBorder transition-colors">
              <service.icon className="w-full h-full text-yilnan-textMuted group-hover:text-yilnan-accent transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yilnan-text">{service.title}</h3>
            <p className="text-yilnan-textMuted text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
