import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Careers", href: "/contact" },
  ],
  solutions: [
    { name: "Coolants", href: "/products" },
    { name: "Chillers", href: "/products" },
    { name: "Filtration", href: "/products" },
  ],
  services: [
    { name: "Site Audits", href: "/services" },
    { name: "Installation", href: "/services" },
    { name: "Maintenance", href: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight">HydroX</span>
                <span className="text-xs text-primary-foreground/70 -mt-1">East African Ltd</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm">
              Trusted industrial cooling and water filtration solutions for hotels, factories, and commercial facilities across East Africa.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+254700000000" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                +254 700 000 000
              </a>
              <a href="mailto:info@hydrox.co.ke" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                info@hydrox.co.ke
              </a>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-accent" />
                Nairobi, Kenya
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} HydroX East African Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
