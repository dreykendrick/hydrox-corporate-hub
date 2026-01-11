import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, CheckCircle2, Building2, Factory, Droplets, Phone, Wrench, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";
import chillerImage from "@/assets/product-chiller.jpg";
import coolantImage from "@/assets/product-coolant.jpg";
import filtrationImage from "@/assets/product-filtration.jpg";

const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Clients Served", value: "200+" },
  { label: "System Uptime", value: "99.5%" },
  { label: "Support Availability", value: "24/7" },
];

const services = [
  {
    icon: Wrench,
    title: "Site Audits & Diagnostics",
    description: "Comprehensive system evaluations to identify inefficiencies and prevent failures.",
  },
  {
    icon: Building2,
    title: "Installation & Commissioning",
    description: "Professional deployment of cooling and filtration systems with minimal downtime.",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs to extend equipment life and ensure reliability.",
  },
  {
    icon: Clock,
    title: "Emergency Response",
    description: "Rapid response team available around the clock for critical system failures.",
  },
];

const products = [
  {
    image: coolantImage,
    title: "Industrial Coolants",
    description: "High-performance cooling fluids for industrial and commercial HVAC systems.",
    href: "/products",
  },
  {
    image: chillerImage,
    title: "Commercial Chillers",
    description: "Energy-efficient chiller units for hotels, factories, and large facilities.",
    href: "/products",
  },
  {
    image: filtrationImage,
    title: "Water Filtration",
    description: "Advanced filtration solutions for clean, safe water in any environment.",
    href: "/products",
  },
];

const industries = [
  { name: "Hotels & Hospitality", icon: Building2 },
  { name: "Manufacturing", icon: Factory },
  { name: "Water Utilities", icon: Droplets },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial cooling systems"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        
        <div className="relative section-container py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-primary-foreground mb-6">
              Reliable Cooling & Filtration Solutions for Hotels & Industry
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 leading-relaxed">
              Reducing downtime, controlling costs, and keeping critical systems running across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Site Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-card border-b border-border">
        <div className="section-container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Trusted Across Industries
            </p>
            <h2 className="text-foreground">
              Serving Critical Infrastructure
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {industries.map((industry) => (
              <div key={industry.name} className="flex items-center gap-3 text-muted-foreground">
                <industry.icon className="w-8 h-8 text-accent" />
                <span className="text-lg font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
                Our Solutions
              </p>
              <h2 className="text-foreground">
                Industrial-Grade Products
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.title}
                to={product.href}
                className="group card-elevated card-hover overflow-hidden"
              >
                <div className="aspect-square bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-foreground mb-2">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Professional Services
            </p>
            <h2 className="text-primary-foreground">
              End-to-End Support
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mt-4">
              From initial consultation to ongoing maintenance, we provide comprehensive support for your cooling and filtration systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                <service.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">{service.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
                Why HydroX
              </p>
              <h2 className="text-foreground mb-6">
                A Partner You Can Trust
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 15 years of experience in East Africa, HydroX has built a reputation for reliability, technical expertise, and long-term partnerships with leading organizations.
              </p>
              <ul className="space-y-4">
                {[
                  "Local expertise with international standards",
                  "Certified technicians and engineers",
                  "Genuine parts and quality products",
                  "Transparent pricing with no hidden costs",
                  "Proven track record across industries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-8 lg:p-12">
              <h3 className="text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact our team for a free consultation and site assessment. We'll help you find the right solutions for your facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+254700000000">
                    <Phone className="w-4 h-4" />
                    +254 700 000 000
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent">
        <div className="section-container py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-accent-foreground mb-2">Need Immediate Assistance?</h2>
              <p className="text-accent-foreground/80 text-lg">
                Our support team is available 24/7 for emergency calls.
              </p>
            </div>
            <Button variant="heroOutline" size="xl" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10" asChild>
              <a href="tel:+254700000000">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
