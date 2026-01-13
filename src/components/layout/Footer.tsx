import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  solutions: [
    { name: "Industrial Coolants", href: "/products" },
    { name: "Commercial Chillers", href: "/products" },
    { name: "Water Filtration", href: "/products" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      {/* Main content */}
      <div className="relative">
        {/* Top section */}
        <div className="section-container pt-20 md:pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Brand column */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">H</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg tracking-tight">HydroX</span>
                  <span className="text-[10px] text-background/60 font-medium uppercase tracking-[0.1em] -mt-0.5">
                    East African Ltd
                  </span>
                </div>
              </Link>
              <p className="text-background/70 text-base leading-relaxed max-w-md mb-8">
                Trusted industrial cooling and water filtration solutions for hotels, 
                factories, and commercial facilities across East Africa.
              </p>
              
              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                  <div className="text-sm text-background/70">
                    <p>Kisutu Street, Nizari Flats 6</p>
                    <p>P.O. Box 4857</p>
                    <p>Dar es Salaam, Tanzania</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-background/50">Contact:</span>
                  <span className="text-sm text-background/90">Dickson Kashura</span>
                </div>
                <a 
                  href="mailto:hydro-x@intafrica.com" 
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors group"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  <span>hydro-x@intafrica.com</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
                <a 
                  href="https://www.hydro-x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors group"
                >
                  <Globe className="w-4 h-4 text-accent" />
                  <span>www.hydro-x.com</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>

            {/* Links columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-background/50 mb-6">
                    Company
                  </h4>
                  <ul className="space-y-4">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.href} 
                          className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-background/50 mb-6">
                    Solutions
                  </h4>
                  <ul className="space-y-4">
                    {footerLinks.solutions.map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.href} 
                          className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                        >
                          {link.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10">
          <div className="section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/40">
              © {new Date().getFullYear()} HydroX East African Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
