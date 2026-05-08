import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base';
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50',
    outline: 'border border-white/20 hover:border-primary-500 text-white hover:text-primary-500 backdrop-blur-sm',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5',
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