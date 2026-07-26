import { motion } from 'framer-motion';
import {
  FiCode,
  FiSmartphone,
  FiCpu,
  FiGrid,
  FiGlobe,
  FiClipboard,
  FiCompass,
  FiCloud,
} from 'react-icons/fi';
import Section from '../ui/Section';
import Eyebrow from '../ui/Eyebrow';

const services = [
  {
    icon: FiCode,
    title: 'Web Application Development',
    description: 'Full-stack web apps and platforms — React, Vite, Firebase, Supabase.',
    proof: 'Bethstream Solutions, Yilnan HealthOS, AgriSync AI',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform Android/iOS apps — Flutter, React Native, Expo, Capacitor.',
    proof: 'Ryaniva, LevyTrack, GuardPath, AgriSync Android',
  },
  {
    icon: FiCpu,
    title: 'AI-Powered Solutions',
    description: 'AI integrated into real products — diagnosis, assistants, and automation via the Claude API.',
    proof: 'AgriSync AI crop diagnosis, YILAI assistant',
  },
  {
    icon: FiGrid,
    title: 'Business & Management Systems',
    description: 'Custom internal platforms — dashboards, inventory, e-wallets, multi-role admin systems.',
    proof: 'Yilnan HealthOS — 7 departments, e-wallet, pharmacy inventory',
  },
  {
    icon: FiGlobe,
    title: 'Company Websites & Digital Presence',
    description: 'Professional marketing sites with WhatsApp ordering, CMS, and custom domains.',
    proof: 'Bethstream Solutions, Mbegu Flavours, this site',
  },
  {
    icon: FiClipboard,
    title: 'GovTech & FinTech Platforms',
    description: 'Digital systems for government partnerships and payments — registration, levy collection, integrations.',
    proof: 'LevyTrack — Plateau State trader registration + levy',
  },
  {
    icon: FiCompass,
    title: 'Product Strategy & MVP Building',
    description: 'Taking an idea to a launched, real product — architecture, build, deploy, iterate.',
    proof: 'AgriSync AI, Mbegu Flavours, and more — idea to launch',
  },
  {
    icon: FiCloud,
    title: 'Deployment, Hosting & Maintenance',
    description: 'Getting products live and keeping them running — hosting, app store submission, ongoing support.',
    proof: 'agrisyncai.farm, bethstreamsolutions.com, yilnan.vercel.app',
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
          Eight things we've actually shipped — not a wish list.
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
            <p className="text-yilnan-textMuted text-sm leading-relaxed mb-4">{service.description}</p>
            <p className="text-xs text-yilnan-textFaint pt-3 border-t border-yilnan-border">
              {service.proof}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
