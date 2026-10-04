import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { services } from '../../data/services';

const Services = () => {
  return (
    <Section id="services" className="bg-yilnan-light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider font-semibold text-yilnan-accentOnLight">
          What we offer
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-4 mb-4 text-yilnan-ink"
        >
          Comprehensive <span className="text-yilnan-accentOnLight">software &amp; digital solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-yilnan-inkMuted text-lg"
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
            className="rounded-2xl border border-yilnan-lightBorder bg-yilnan-lightCard p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-yilnan-light border border-yilnan-lightBorder p-2.5 mb-5 group-hover:border-yilnan-accentBorder transition-colors">
              <service.icon className="w-full h-full text-yilnan-inkMuted group-hover:text-yilnan-accentOnLight transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yilnan-ink">{service.title}</h3>
            <p className="text-yilnan-inkMuted text-sm leading-relaxed mb-4">{service.description}</p>
            <p className="text-xs text-yilnan-inkMuted pt-3 border-t border-yilnan-lightBorder">
              {service.proof}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;