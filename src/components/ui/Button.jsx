import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base';
  
  const variants = {
    primary: 'bg-yilnan-accent hover:brightness-95 text-yilnan-accentDark shadow-lg shadow-yilnan-accent/20 hover:shadow-yilnan-accent/30',
    outline: 'border border-yilnan-borderStrong hover:border-yilnan-accent text-yilnan-text hover:text-yilnan-accent',
    ghost: 'text-yilnan-textMuted hover:text-yilnan-text hover:bg-yilnan-surface',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;