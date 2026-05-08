import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import Section from '../ui/Section';

const testimonials = [
  {
    name: 'Oluwaseun Adebayo',
    role: 'CEO, Lee & Ray Agency',
    content: 'Yilnan Global transformed our operations completely. The dashboard and automation saved us over 30 hours monthly. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Fatima Mohammed',
    role: 'Operations Director, Fiye Foods',
    content: 'The inventory and production tracking system they built for us is world‑class. Our waste reduced by 35% in the first quarter.',
    rating: 5,
  },
  {
    name: 'Chidi Nwosu',
    role: 'Founder, AgriSync AI',
    content: 'Professional, responsive, and deeply knowledgeable. They didn’t just build software – they improved our entire business model.',
    rating: 5,
  },
  {
    name: 'Amina Bello',
    role: 'Managing Partner, AjoX',
    content: 'Yilnan’s team understood our fintech needs right away. The system they delivered is scalable, secure, and users love it.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="testimonials" className="bg-dark-200/30">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-primary-500 font-semibold"
        >
          Client love
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4"
        >
          Trusted by businesses{' '}
          <span className="gradient-text">across Africa</span>
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="glass-card p-8 md:p-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-6">
                “{testimonials[current].content}”
              </p>
              <h4 className="font-bold text-white text-lg">{testimonials[current].name}</h4>
              <p className="text-sm text-white/50">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <FiChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <FiChevronRight className="w-5 h-5 text-white" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current ? 'w-6 bg-primary-500' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;