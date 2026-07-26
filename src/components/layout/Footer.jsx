import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Container from '../ui/Container';

const footerLinks = {
  Company: ['About', 'Ventures', 'Client Work', 'Services', 'Industries'],
  Resources: ['Blog', 'Case Studies', 'Documentation', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const Footer = () => {
  return (
    <footer className="bg-dark-200/80 border-t border-white/10 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Yilnan Global</h3>
            <p className="text-white/50 text-sm mb-4">
              Building smarter business systems for African businesses.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-white/40 hover:text-primary-400 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-primary-400 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-primary-400 transition-colors">
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-primary-400 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <FiMail className="text-primary-400 flex-shrink-0" />
                <span>yildumd@gmail.com</span>
              </li>
              <li>
                <a
                  href="tel:+2348164083309"
                  className="flex items-center gap-2 text-white/50 hover:text-primary-400 text-sm transition-colors"
                >
                  <FiPhone className="text-primary-400 flex-shrink-0" />
                  <span>+234 816 408 3309</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <FiMapPin className="text-primary-400 flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Yilnan Global. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;