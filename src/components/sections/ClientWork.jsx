import { motion } from 'framer-motion';
import { FiArrowUpRight, FiServer, FiTruck, FiClipboard, FiActivity, FiShield, FiUsers } from 'react-icons/fi';
import Section from '../ui/Section';

const clientWork = [
  {
    name: 'Bethstream Solutions',
    category: 'Networking & Security',
    image: '/work/bethstream.jpg',
    description:
      'Company site for a networking/security business, with WhatsApp ordering and an admin dashboard.',
    status: 'Live',
    url: 'https://bethstreamsolutions.com',
    urlLabel: 'bethstreamsolutions.com',
    tags: ['React', 'Vite', 'Firebase', 'Cloudinary'],
    icon: FiServer,
  },
  {
    name: 'Ryaniva',
    category: 'Logistics',
    image: '/work/ryaniva.jpg',
    description: 'Logistics platform built for a growing delivery operation.',
    status: 'Alpha · Play Store closed testing',
    url: 'https://ryaniva.com.ng',
    urlLabel: 'ryaniva.com.ng',
    tags: ['Logistics', 'Mobile'],
    icon: FiTruck,
  },
  {
    name: 'LevyTrack',
    category: 'GovTech',
    image: '/work/levytrack.jpg',
    description:
      'Digital trader registration and levy collection system for Plateau State informal markets.',
    status: 'Government-partnership pathway',
    tags: ['Flutter', 'Firebase', 'GovTech'],
    icon: FiClipboard,
  },
  {
    name: 'Yilnan HealthOS',
    category: 'Health',
    image: '/work/healthos.jpg',
    description:
      'Hospital management system for Hope Haven Hospital — seven department accounts, patient e-wallet, pharmacy inventory, and YILAI, an AI assistant.',
    status: 'Deployed',
    url: 'https://yilnan.vercel.app',
    urlLabel: 'yilnan.vercel.app',
    tags: ['React', 'Vite', 'Supabase', 'AI'],
    icon: FiActivity,
  },
  {
    name: 'GuardPath',
    category: 'Security',
    image: '/work/guardpath.jpg',
    description: 'Community security intelligence platform for Plateau State.',
    status: 'In development',
    tags: ['React Native', 'Expo', 'Firebase'],
    icon: FiShield,
  },
  {
    name: 'Lee & Ray Agency',
    category: 'Recruitment / Talent Solutions',
    image: '/work/lee-ray.jpg',
    description:
      'Recruitment and talent outsourcing agency connecting businesses with vetted African talent. Built as a multi-page marketing site with WhatsApp enquiry, a talent-pool signup, and services/contact pages.',
    status: 'Live',
    url: 'https://lee-ray-agency.vercel.app/',
    urlLabel: 'lee-ray-agency.vercel.app',
    tags: ['Web', 'Marketing Site', 'WhatsApp Integration'],
    icon: FiUsers,
  },
];

const ClientWork = () => {
  return (
    <Section id="client-work" className="bg-yilnan-light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider font-semibold text-yilnan-accentOnLight">
          Our work
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-4 text-yilnan-ink"
        >
          Client <span className="text-yilnan-accentOnLight">solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-yilnan-inkMuted text-lg"
        >
          Software we've built for founders and institutions across sectors.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientWork.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-yilnan-lightBorder bg-yilnan-lightCard overflow-hidden group shadow-sm hover:shadow-lg transition-shadow"
          >
            {/* image banner */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-yilnan-light border-b border-yilnan-lightBorder">
              <project.icon className="absolute inset-0 m-auto w-12 h-12 text-yilnan-accent" />
              <img
                src={project.image}
                alt={project.name}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-yilnan-accentOnLight bg-yilnan-accentSoft px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-3 mb-2 text-yilnan-ink">{project.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-yilnan-light border border-yilnan-lightBorder p-2 flex-shrink-0">
                  <project.icon className="w-full h-full text-yilnan-inkMuted" />
                </div>
              </div>

              <p className="text-yilnan-inkMuted text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-yilnan-ink">{project.status}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-yilnan-light text-yilnan-inkMuted border border-yilnan-lightBorder"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-yilnan-accentOnLight hover:brightness-110 transition-all"
                >
                  Visit {project.urlLabel}
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

export default ClientWork;