import { motion } from 'framer-motion';
import { FiArrowRight, FiTrendingUp, FiZap, FiLayers } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-600/20 border border-primary-500/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs md:text-sm font-medium">Trusted Digital Transformation Partner</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Helping African Businesses{' '}
              <span className="gradient-text">Build Smarter Operations</span>
            </h1>

            <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed">
              We provide consulting, digital systems, automation and operational solutions for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="group">
                Book Consultation
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">View Projects</Button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
              {[
                { icon: FiLayers, value: '2', label: 'Ventures Owned' },
                { icon: FiZap, value: '5', label: 'Live Client Products' },
                { icon: FiTrendingUp, value: '6+', label: 'Sectors' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold">{item.value}</div>
                  <div className="text-xs md:text-sm text-white/50">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-5 md:p-6 relative z-10 shadow-2xl">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs text-white/40 font-mono">system_dashboard</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-xs text-white/50">Operational Efficiency</div>
                  <div className="text-xl md:text-2xl font-bold">+42%</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <div className="text-xs text-white/50">Digital Adoption</div>
                  <div className="text-xl md:text-2xl font-bold">94%</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 mb-5">
                <div className="text-xs text-white/60 mb-2 flex justify-between">
                  <span>Monthly Growth</span>
                  <span className="text-primary-400">+38%</span>
                </div>
                <div className="flex items-end gap-1.5 h-28">
                  {[28, 45, 38, 65, 72, 88, 94].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.8 }}
                      className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-md"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-white/50">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>Live automation active</span>
                </div>
                <span>Sync: Real-time</span>
              </div>
            </div>

            <motion.div
              className="absolute -top-5 -right-4 glass-card p-3 z-20 hidden sm:flex items-center gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <FiZap className="text-yellow-400" />
              <span className="text-sm font-medium">Workflow Automation</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;