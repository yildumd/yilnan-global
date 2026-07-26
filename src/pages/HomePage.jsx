import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Hero from '../components/sections/Hero';
import CTA from '../components/sections/CTA';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';

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

      <CTA />
    </>
  );
};

export default HomePage;
