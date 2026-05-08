import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';
import Section from '../ui/Section';
import Button from '../ui/Button';

const projects = [
  {
    name: 'Lee & Ray Agency',
    category: 'Marketing Agency',
    description: 'Complete digital operations overhaul including client portal, campaign dashboards, and automated reporting.',
    impact: '40% faster campaign delivery',
    tags: ['React', 'Node.js', 'MongoDB', 'Analytics'],
    icon: FiCode,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Fiye Foods',
    category: 'Food Production',
    description: 'Production tracking, inventory management, and quality control dashboards for a growing food brand.',
    impact: '35% reduction in waste',
    tags: ['Dashboard', 'Inventory', 'SOPs'],
    icon: FiServer,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'AgriSync AI',
    category: 'AgriTech',
    description: 'Farm management system with IoT integration, crop tracking, and real-time analytics for farmers.',
    impact: '50% improved yield forecasting',
    tags: ['AI', 'IoT', 'Real-time'],
    icon: FiCloud,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'AjoX',
    category: 'Fintech',
    description: 'Operational system for savings groups with automated contributions, payouts, and user dashboards.',
    impact: '10,000+ active users',
    tags: ['Fintech', 'Automation', 'Dashboards'],
    icon: FiDatabase,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'SphereLearn',
    category: 'EdTech',
    description: 'Learning management system with course builder, student progress tracking, and certification automation.',
    impact: '5,000+ courses completed',
    tags: ['LMS', 'Analytics', 'Scalable'],
    icon: FiCode,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Mbegu Flavours',
    category: 'Food & Beverage',
    description: 'Restaurant management system including digital menus, order flow, and kitchen display integration.',
    impact: '25% faster table turnover',
    tags: ['POS', 'Kitchen Display', 'Orders'],
    icon: FiServer,
    gradient: 'from-rose-500 to-orange-500',
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-dark-200/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-primary-500 font-semibold"
        >
          Case studies
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4"
        >
          Real impact for{' '}
          <span className="gradient-text">African businesses</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg"
        >
          From startups to established brands – we build systems that deliver measurable results.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass-card overflow-hidden group"
          >
            <div className="p-6 md:p-8">
              {/* Header with category and icon */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-primary-400 bg-primary-500/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-3 mb-2">{project.name}</h3>
                </div>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} p-2`}>
                  <project.icon className="w-full h-full text-white" />
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <span className="text-sm font-semibold text-primary-400">Impact: </span>
                <span className="text-white/80 text-sm">{project.impact}</span>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="ghost" className="group/btn text-sm p-0 hover:bg-transparent">
                View case study
                <FiArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;