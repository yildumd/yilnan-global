import { Link } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Container from '../ui/Container';

const footerLinks = {
  Company: [
    { name: 'About', to: '/about' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Services', to: '/services' },
    { name: 'Yilnan Builds', to: '/yilnan-builds' },
    { name: 'Contact', to: '/contact' },
  ],
  Resources: ['Blog', 'Case Studies', 'Documentation', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const Footer = () => {
  return (
    <footer className="bg-yilnan-surface/60 border-t border-yilnan-border pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight gradient-text mb-4">Yilnan Global</h3>
            <p className="text-yilnan-textFaint text-sm mb-4">
              Building smarter business systems for African businesses.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-yilnan-textFaint hover:text-yilnan-accent transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-yilnan-textFaint hover:text-yilnan-accent transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-yilnan-textFaint hover:text-yilnan-accent transition-colors">
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-yilnan-text mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) =>
                  typeof link === 'string' ? (
                    <li key={link}>
                      <a href="#" className="text-yilnan-textFaint hover:text-yilnan-accent text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ) : (
                    <li key={link.name}>
                      <Link to={link.to} className="text-yilnan-textFaint hover:text-yilnan-accent text-sm transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-yilnan-text mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-yilnan-textFaint text-sm">
                <FiMail className="text-yilnan-accent flex-shrink-0" />
                <span>yildumd@gmail.com</span>
              </li>
              <li>
                <a
                  href="tel:+2348164083309"
                  className="flex items-center gap-2 text-yilnan-textFaint hover:text-yilnan-accent text-sm transition-colors"
                >
                  <FiPhone className="text-yilnan-accent flex-shrink-0" />
                  <span>+234 816 408 3309</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-yilnan-textFaint text-sm">
                <FiMapPin className="text-yilnan-accent flex-shrink-0" />
                <span>Jos, Plateau State</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-yilnan-border text-center text-yilnan-textFaint text-sm">
          &copy; {new Date().getFullYear()} Yilnan Global. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;