import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiSun, FiBox } from 'react-icons/fi';
import Hero from '../components/sections/Hero';
import CTA from '../components/sections/CTA';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import { services } from '../data/services';

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const trustNames = [
  'AgriSync AI',
  'Mbegu Flavours',
  'Bethstream',
  'Ryaniva',
  'LevyTrack',
  'Yilnan HealthOS',
  'GuardPath',
  'Lee & Ray',
];

const ventures = [
  {
    icon: FiSun,
    category: 'AgriTech',
    title: 'AI-powered agriculture, built in Jos.',
    description: 'AI crop diagnosis, a produce marketplace, and farm GPS registration — all in one platform.',
    url: 'https://agrisyncai.farm',
    urlLabel: 'agrisyncai.farm',
  },
  {
    icon: FiBox,
    category: 'Food & Spice',
    title: 'Export-grade Nigerian spice.',
    description: 'Pepper Soup Spice, Mai Suya, and Naija Everyday — blended and packed from our own factory in Jos.',
    status: 'Factory near-complete · Jos, Nigeria',
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="py-8 border-b border-yilnan-border">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
          >
            <span className="text-xs uppercase tracking-wider text-yilnan-textFaint whitespace-nowrap">
              Products live across Africa
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-yilnan-textMuted">
              {trustNames.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Positioning statement */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-yilnan-text">
              Most agencies build for others.{' '}
              <span className="text-yilnan-accent">We build for others — and for ourselves.</span>
            </p>
            <p className="mt-6 text-yilnan-textMuted text-lg max-w-2xl mx-auto">
              Yilnan is a group. We own and run ventures across tech and food, and we build
              software for businesses across Africa.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Featured ventures — asymmetric, alternating */}
      <Section className="bg-yilnan-surface/30">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="text-xs uppercase tracking-wider text-yilnan-textFaint">Our ventures</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-2">
              Businesses we own and run.
            </h2>
          </motion.div>

          <div className="space-y-14 md:space-y-20">
            {ventures.map((venture, idx) => (
              <div
                key={venture.title}
                className={`flex flex-col lg:items-center gap-8 lg:gap-16 ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex-1 relative"
                >
                  <div className="absolute inset-0 bg-yilnan-accent/10 blur-3xl rounded-full" />
                  <div className="glass-card relative aspect-[4/3] flex items-center justify-center">
                    <venture.icon className="w-16 h-16 md:w-20 md:h-20 text-yilnan-accent" />
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex-1"
                >
                  <span className="text-xs uppercase tracking-wider text-yilnan-textFaint">
                    {venture.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-yilnan-text mt-2 mb-3">
                    {venture.title}
                  </h3>
                  <p className="text-yilnan-textMuted leading-relaxed mb-4">{venture.description}</p>
                  {venture.url ? (
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-yilnan-accent hover:brightness-110 transition-all"
                    >
                      Live at {venture.urlLabel}
                      <FiArrowUpRight />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-sm text-yilnan-textFaint">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {venture.status}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-14"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-yilnan-accent hover:brightness-110 font-medium transition-all"
            >
              See all our work
              <FiArrowRight />
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* What we do — condensed services teaser */}
      <Section>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              What we build.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-3 rounded-xl border border-yilnan-border bg-yilnan-surface2 px-4 py-3"
              >
                <service.icon className="w-5 h-5 text-yilnan-textMuted flex-shrink-0" />
                <span className="text-sm text-yilnan-text leading-tight">{service.title}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-yilnan-accent hover:brightness-110 font-medium transition-all"
            >
              Explore services
              <FiArrowRight />
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Yilnan Builds teaser */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-yilnan-accent/10 blur-3xl" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 md:p-10 text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-yilnan-accent bg-yilnan-accentSoft px-3 py-1 rounded-full mb-4">
              Monthly giveaway
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
              Yilnan Builds — <span className="gradient-text">a free site, every month</span>
            </h2>
            <p className="text-yilnan-textMuted mb-6 max-w-xl mx-auto">
              Selected on need and story, not chance. One business a month gets a site built for
              free — you only cover hosting.
            </p>
            <MotionLink
              to="/yilnan-builds"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base bg-yilnan-accent hover:brightness-95 text-yilnan-accentDark shadow-lg shadow-yilnan-accent/20 hover:shadow-yilnan-accent/30"
            >
              Learn More / Apply
              <FiArrowRight />
            </MotionLink>
          </motion.div>
        </Container>
      </Section>

      {/* 2027 teaser — subtle */}
      <Section className="!py-10 md:!py-14">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mx-auto rounded-2xl border border-dashed border-yilnan-borderStrong px-6 py-5 text-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-yilnan-accent bg-yilnan-accentSoft px-3 py-1 rounded-full mb-2">
              Coming 2027
            </span>
            <p className="text-yilnan-textMuted text-sm">
              The Yilnan Startup Fund — backing a selected founder every 6 months.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTA />
    </>
  );
};

export default HomePage;
