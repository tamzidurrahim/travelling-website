import { MapPin, Hotel, Lightbulb, Backpack, Mail, Phone, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: 'Destinations', href: '#destinations', icon: MapPin },
      { name: 'Hotels', href: '#hotels', icon: Hotel },
      { name: 'Travel Tips', href: '#inspiration', icon: Lightbulb },
      { name: 'Gear', href: '#gear', icon: Backpack },
    ],
    destinations: [
      { name: "Cox's Bazar", href: '#destinations' },
      { name: 'Sylhet', href: '#destinations' },
      { name: 'Rangamati', href: '#destinations' },
      { name: 'Bandarban', href: '#destinations' },
      { name: "Saint Martin's Island", href: '#destinations' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-emerald-dark text-white">
      {/* Main Footer */}
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-3xl md:text-4xl font-bold text-white">
                Bangladesh
              </span>
              <span className="font-body text-sm uppercase tracking-wider text-emerald ml-2">
                Travel
              </span>
            </a>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Discover the untouched beauty of Bangladesh. From the world's longest beach to lush tea gardens, your adventure begins here.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@bangladesh.travel"
                className="flex items-center gap-3 text-white/70 hover:text-emerald transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">hello@bangladesh.travel</span>
              </a>
              <a
                href="tel:+8801234567890"
                className="flex items-center gap-3 text-white/70 hover:text-emerald transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="font-body text-sm">+880 1234 567 890</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-body text-sm text-white/70 hover:text-emerald transition-colors duration-300 flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display text-lg text-white mb-5">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-body text-sm text-white/70 hover:text-emerald transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-emerald transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-body text-sm text-white/50 text-center md:text-left">
              {currentYear} Bangladesh Travel. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-emerald hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
