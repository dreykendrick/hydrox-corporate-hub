import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Building2, Factory, Droplets, Wrench, Shield, Clock, Zap, CheckCircle2, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement, GlowingOrb, Counter, MagneticButton, ScrollProgress } from "@/components/ui/AnimatedSection";
import heroImage from "@/assets/hero-industrial.jpg";
import chillerImage from "@/assets/product-chiller.jpg";
import coolantImage from "@/assets/product-coolant.jpg";
import filtrationImage from "@/assets/product-filtration.jpg";

const stats = [
  { label: "Years Experience", value: 15, suffix: "+", icon: Clock },
  { label: "Clients Served", value: 200, suffix: "+", icon: Building2 },
  { label: "System Uptime", value: 99.5, suffix: "%", icon: Zap },
];

const services = [
  {
    icon: Wrench,
    title: "Site Audits",
    description: "Comprehensive system evaluations to identify inefficiencies.",
  },
  {
    icon: Building2,
    title: "Installation",
    description: "Professional deployment with minimal downtime.",
  },
  {
    icon: Shield,
    title: "Maintenance",
    description: "Scheduled programs to extend equipment life.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Rapid response for critical system failures.",
  },
];

const products = [
  {
    image: coolantImage,
    title: "Industrial Coolants",
    description: "High-performance cooling fluids for industrial HVAC systems.",
    href: "/products",
  },
  {
    image: chillerImage,
    title: "Commercial Chillers",
    description: "Energy-efficient units for hotels and large facilities.",
    href: "/products",
  },
  {
    image: filtrationImage,
    title: "Water Filtration",
    description: "Advanced solutions for clean, safe water everywhere.",
    href: "/products",
  },
];

const industries = [
  { name: "Hotels & Hospitality", icon: Building2, description: "Comfort systems for guests" },
  { name: "Manufacturing", icon: Factory, description: "Industrial-grade solutions" },
  { name: "Water Utilities", icon: Droplets, description: "Municipal infrastructure" },
];

const features = [
  "Local expertise with international standards",
  "Certified technicians and engineers",
  "Genuine parts and quality products",
  "Transparent pricing with no hidden costs",
];

export default function Index() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <Layout>
      <ScrollProgress />
      
      {/* Hero Section - Immersive & Bold */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0">
          <motion.img
            src={heroImage}
            alt="Industrial cooling systems"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: "grayscale(30%)" }}
          />
        </div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 gradient-mesh" />
        
        {/* Glowing orbs */}
        <GlowingOrb className="top-1/4 -right-20" size="600px" blur="150px" />
        <GlowingOrb className="bottom-1/4 -left-32" size="500px" blur="120px" color="hsl(187 100% 65% / 0.15)" />
        
        {/* Hero content */}
        <motion.div 
          className="relative section-container pt-32 pb-24 w-full"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="badge-dark">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Trusted Industrial Partner
              </span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-white mb-8"
            >
              Cooling & Filtration
              <br />
              <span className="text-gradient-accent">Solutions</span> for Industry
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed max-w-2xl font-light"
            >
              Reducing downtime, controlling costs, and keeping critical systems 
              running across East Africa since 2009.
            </motion.p>
            
            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Button variant="hero" size="xl" asChild className="group">
                  <Link to="/contact">
                    Request Site Audit
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="heroOutline" size="xl" asChild className="group">
                  <Link to="/products">
                    View Products
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Floating cards */}
      <section className="relative -mt-24 z-10 pb-16">
        <div className="section-container">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div 
                  className="stat-card group"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Section - Horizontal scroll feel */}
      <section className="section-padding-sm">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="badge-premium mb-6 inline-flex">Industries We Serve</span>
            <h2 className="text-foreground">
              Trusted Across Sectors
            </h2>
          </AnimatedSection>
          
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <StaggerItem key={industry.name}>
                <motion.div 
                  className="group p-8 rounded-2xl bg-muted/30 border border-border/50 hover:bg-card hover:shadow-xl hover:border-accent/20 transition-all duration-500"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                    <industry.icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Products Section - Editorial layout */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="badge-premium mb-6 inline-flex">Our Solutions</span>
              <h2 className="text-foreground">
                Industrial-Grade Products
              </h2>
            </div>
            <Button variant="outline" size="lg" asChild className="group w-fit">
              <Link to="/products">
                View All
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </AnimatedSection>
          
          <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <StaggerItem key={product.title}>
                <Link to={product.href} className="group block">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-card"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section - Dark immersive */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 noise" />
        
        <GlowingOrb className="top-0 right-1/4" size="500px" blur="150px" />
        <GlowingOrb className="bottom-0 left-1/4" size="400px" blur="120px" color="hsl(187 100% 65% / 0.1)" />
        
        <div className="relative section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="badge-dark mb-6 inline-flex">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Professional Services
            </span>
            <h2 className="text-white mb-6">End-to-End Support</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              From consultation to ongoing maintenance, comprehensive support for your systems.
            </p>
          </AnimatedSection>
          
          <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div 
                  className="group p-8 rounded-2xl card-glass h-full"
                  whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/services">
                Explore Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us - Split layout */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="right">
              <span className="badge-premium mb-6 inline-flex">Why HydroX</span>
              <h2 className="text-foreground mb-6">
                A Partner You Can Trust
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                With over 15 years of experience in East Africa, we've built a reputation for 
                reliability, technical expertise, and lasting partnerships.
              </p>
              
              <ul className="space-y-4">
                {features.map((item, index) => (
                  <motion.li 
                    key={item}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.2}>
              <motion.div 
                className="relative"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl" />
                
                <div className="relative bg-card rounded-3xl p-10 lg:p-12 shadow-xl border border-border/50">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Contact our team for a free consultation and site assessment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="accent" size="lg" asChild className="flex-1 group">
                      <Link to="/contact">
                        Contact Us
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="flex-1 group">
                      <a href="mailto:hydro-x@intafrica.com">
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal and bold */}
      <section className="relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 gradient-accent"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        <div className="relative section-container py-20 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <AnimatedSection>
              <h2 className="text-white text-3xl md:text-4xl font-semibold mb-2">
                Need Immediate Assistance?
              </h2>
              <p className="text-white/70 text-lg">
                Our support team is available 24/7 for emergency calls.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <MagneticButton>
                <Button 
                  size="xl" 
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm rounded-full group" 
                  asChild
                >
                  <a href="mailto:hydro-x@intafrica.com">
                    <Mail className="w-5 h-5" />
                    Email Now
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </MagneticButton>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
