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

const services = [
  {
    icon: FiBriefcase,
    title: 'Business Consulting',
    description: 'Strategic planning, financial modeling, market entry, and operational audits.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiGitBranch,
    title: 'Operations Structuring',
    description: 'Define workflows, SOPs, team roles, and performance tracking systems.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: FiDatabase,
    title: 'Restaurant Systems',
    description: 'Kitchen workflow automation, POS integration, inventory, and order management.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FiUsers,
    title: 'Staffing Support',
    description: 'Staff sourcing, onboarding systems, attendance, and shift organization.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: FiZap,
    title: 'Automation & Workflows',
    description: 'Smart forms, WhatsApp automation, dashboards, and reporting systems.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: FiMonitor,
    title: 'Website & Dashboard Development',
    description: 'Custom business portals, internal dashboards, and modern websites.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FiCpu,
    title: 'Digital Transformation',
    description: 'End-to-end modernization of legacy processes with scalable tech.',
    color: 'from-purple-500 to-fuchsia-500',
  },
];

const Services = () => {
  return (
    <Section id="services">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-primary-500 font-semibold"
        >
          What we offer
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4"
        >
          Comprehensive <span className="gradient-text">business systems</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg"
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
            className="glass-card p-6 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 cursor-pointer group"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-2.5 mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
              <service.icon className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;