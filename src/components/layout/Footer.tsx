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
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative section-container py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-aqua-light flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground font-bold text-xl">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-primary-foreground">HydroX</span>
                <span className="text-[11px] text-primary-foreground/60 font-medium uppercase tracking-wider -mt-0.5">East African Ltd</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm">
              Trusted industrial cooling and water filtration solutions for hotels, factories, and commercial facilities across East Africa.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  Kisutu Street, Nizari Flats 6<br />
                  P.O. Box 4857<br />
                  Dar es Salaam, Tanzania
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <span className="text-accent font-medium">Contact:</span>
                Dickson Kashura
              </div>
              <a href="mailto:hydro-x@intafrica.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                hydro-x@intafrica.com
              </a>
              <a href="https://www.hydro-x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <span className="text-accent font-medium">Web:</span>
                www.hydro-x.com
              </a>
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
          <p className="text-sm text-primary-foreground/50 font-medium">
            © {new Date().getFullYear()} HydroX East African Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
