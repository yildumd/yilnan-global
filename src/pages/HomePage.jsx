import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Hero from '../components/sections/Hero';
import CTA from '../components/sections/CTA';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';

const MotionLink = motion(Link);

const highlights = [
  { value: '2', label: 'Ventures Owned' },
  { value: '5', label: 'Live Client Products' },
  { value: '6+', label: 'Sectors' },
];

const HomePage = () => {
  return (
    <>
      <Hero />

      <Section className="bg-dark-200/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              Yilnan Global Concepts is a Nigeria-based group building across tech and food — we
              own and run real ventures, and we build software for clients through our studio arm.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 md:p-8 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-3 gap-4 mb-6">
              {highlights.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-xs md:text-sm text-white/50">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
              >
                View Portfolio
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-purple-600/20 to-primary-600/20 blur-3xl" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-10 text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full mb-4">
              Monthly giveaway
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Yilnan Builds — <span className="gradient-text">a free site, every month</span>
            </h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Selected on need and story, not chance. One business a month gets a site built for
              free — you only cover hosting.
            </p>
            <MotionLink
              to="/yilnan-builds"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50"
            >
              Learn More / Apply
              <FiArrowRight />
            </MotionLink>
          </motion.div>
        </Container>
      </Section>

      <CTA />
    </>
  );
};

export default HomePage;
