import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import Section from '../ui/Section';

// Array of one for now — swap this render back to the carousel pattern
// (see git history) once more real client quotes come in.
const testimonials = [
  {
    name: 'Chidi Nwosu',
    role: 'Founder, AgriSync AI',
    content: 'Professional, responsive, and deeply knowledgeable. They didn’t just build software – they improved our entire business model.',
    rating: 5,
  },
];

const Testimonials = () => {
  const testimonial = testimonials[0];

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass-card p-8 md:p-10 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FiStar key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-6">
            “{testimonial.content}”
          </p>
          <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
          <p className="text-sm text-white/50">{testimonial.role}</p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Testimonials;
