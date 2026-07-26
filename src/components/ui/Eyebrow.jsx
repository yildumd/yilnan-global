import { motion } from 'framer-motion';

const Eyebrow = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 rounded-full border border-yilnan-accentBorder bg-yilnan-accentSoft px-3.5 py-1.5 text-xs tracking-wide text-yilnan-accent ${className}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-yilnan-accent" />
      {children}
    </motion.div>
  );
};

export default Eyebrow;
