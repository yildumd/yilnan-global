import { Link } from 'react-router-dom';
import { FiLinkedin, FiInstagram, FiMessageCircle, FiMail, FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import Container from '../ui/Container';

const companyLinks = [
  { name: 'About', to: '/about' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Services', to: '/services' },
  { name: 'Yilnan Builds', to: '/yilnan-builds' },
  { name: 'Contact', to: '/contact' },
];

const ventureLinks = [
  { name: 'AgriSync AI', href: 'https://agrisyncai.farm' },
  { name: 'Mbegu Flavours', href: 'https://mbeguflavours.com' },
  { name: 'Lee & Ray Agency', href: 'https://lee-ray-agency.vercel.app' },
  { name: 'Yilnan HealthOS', href: 'https://yilnan.vercel.app' },
];

const socials = [
  { icon: FiLinkedin, href: 'https://linkedin.com/in/david-yildum', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://instagram.com/dyildum', label: 'Instagram' },
  { icon: FiMessageCircle, href: 'https://wa.me/2348164083309', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-yilnan-base border-t border-yilnan-border pt-16 pb-8">
      <Container>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:pr-6">
            <h3 className="text-2xl font-semibold tracking-tight text-yilnan-text mb-3">
              Yilnan<span className="text-yilnan-accent">.</span>
            </h3>
            <p className="text-yilnan-accent text-sm font-medium mb-2">Building. Growing. Delivering.</p>
            <p className="text-yilnan-textFaint text-sm mb-5 leading-relaxed">
              A Jos-based group building across technology, food, and trade.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-yilnan-border flex items-center justify-center text-yilnan-textFaint hover:text-yilnan-accent hover:border-yilnan-accentBorder transition-colors"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-yilnan-text mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-yilnan-textFaint hover:text-yilnan-accent text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="font-semibold text-yilnan-text mb-4 text-sm uppercase tracking-wider">Ventures</h4>
            <ul className="space-y-2.5">
              {ventureLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-yilnan-textFaint hover:text-yilnan-accent text-sm transition-colors"
                  >
                    {link.name}
                    <FiArrowUpRight className="opacity-60" size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-yilnan-text mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:dyildum@gmail.com" className="flex items-center gap-2 text-yilnan-textFaint hover:text-yilnan-accent text-sm transition-colors">
                  <FiMail className="text-yilnan-accent flex-shrink-0" />
                  <span>dyildum@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+2348164083309" className="flex items-center gap-2 text-yilnan-textFaint hover:text-yilnan-accent text-sm transition-colors">
                  <FiPhone className="text-yilnan-accent flex-shrink-0" />
                  <span>+234 816 408 3309</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-yilnan-textFaint text-sm">
                <FiMapPin className="text-yilnan-accent flex-shrink-0" />
                <span>Jos, Plateau State, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 pt-8 border-t border-yilnan-border flex flex-col sm:flex-row items-center justify-between gap-3 text-yilnan-textFaint text-sm">
          <span>&copy; {new Date().getFullYear()} Yilnan Global Concepts. All rights reserved.</span>
          <span>Your idea. Our code.</span>
        </div>
      </Container>

      {/* Big signature wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-6 left-0 right-0 text-center font-semibold tracking-tight leading-none text-yilnan-text/[0.03] whitespace-nowrap"
        style={{ fontSize: 'clamp(4rem, 18vw, 16rem)' }}
      >
        YILNAN GLOBAL
      </div>
    </footer>
  );
};

export default Footer;