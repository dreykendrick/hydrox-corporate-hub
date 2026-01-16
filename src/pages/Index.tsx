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
        
        {/* Hero content - Enhanced mobile spacing */}
        <motion.div 
          className="relative section-container pt-28 sm:pt-32 pb-20 sm:pb-24 w-full"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 sm:mb-8"
            >
              <span className="badge-dark">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
                Trusted Industrial Partner
              </span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-white mb-5 sm:mb-8"
            >
              Cooling & Filtration
              <br />
              <span className="text-gradient-accent">Solutions</span> for Industry
            </motion.h1>
            
            {/* Subheadline - Better mobile sizing */}
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-8 sm:mb-12 leading-relaxed max-w-2xl font-light"
            >
              Reducing downtime, controlling costs, and keeping critical systems 
              running across East Africa since 2009.
            </motion.p>
            
            {/* CTAs - Stack on mobile with full width */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <MagneticButton>
                <Button variant="hero" size="xl" asChild className="group w-full sm:w-auto justify-center">
                  <Link to="/contact">
                    Request Site Audit
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="heroOutline" size="xl" asChild className="group w-full sm:w-auto justify-center">
                  <Link to="/products">
                    View Products
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator - Hide on small mobile */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block"
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

      {/* Stats Section - Floating cards - Mobile optimized */}
      <section className="relative -mt-16 sm:-mt-20 md:-mt-24 z-10 pb-10 sm:pb-16">
        <div className="section-container">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div 
                  className="stat-card group"
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                      <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 sm:mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Section - Mobile enhanced */}
      <section className="section-padding-sm">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="badge-premium mb-4 sm:mb-6 inline-flex">Industries We Serve</span>
            <h2 className="text-foreground">
              Trusted Across Sectors
            </h2>
          </AnimatedSection>
          
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {industries.map((industry) => (
              <StaggerItem key={industry.name}>
                <motion.div 
                  className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-muted/30 border border-border/50 hover:bg-card hover:shadow-xl hover:border-accent/20 transition-all duration-500 active:scale-[0.98]"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-foreground flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent transition-colors duration-300">
                    <industry.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-background" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">{industry.name}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{industry.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Products Section - Editorial layout - Mobile enhanced */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            <div className="max-w-xl">
              <span className="badge-premium mb-4 sm:mb-6 inline-flex">Our Solutions</span>
              <h2 className="text-foreground">
                Industrial-Grade Products
              </h2>
            </div>
            <Button variant="outline" size="default" asChild className="group w-fit hidden sm:inline-flex">
              <Link to="/products">
                View All
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </AnimatedSection>
          
          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {products.map((product) => (
              <StaggerItem key={product.title}>
                <Link to={product.href} className="group block">
                  <motion.div
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-card"
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
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
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 sm:mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          {/* Mobile View All button */}
          <div className="mt-6 sm:hidden">
            <Button variant="outline" size="lg" asChild className="w-full">
              <Link to="/products">
                View All Products
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Dark immersive - Mobile enhanced */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 noise" />
        
        <GlowingOrb className="top-0 right-1/4 hidden sm:block" size="500px" blur="150px" />
        <GlowingOrb className="bottom-0 left-1/4 hidden sm:block" size="400px" blur="120px" color="hsl(187 100% 65% / 0.1)" />
        
        <div className="relative section-container">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="badge-dark mb-4 sm:mb-6 inline-flex">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
              Professional Services
            </span>
            <h2 className="text-white mb-4 sm:mb-6">End-to-End Support</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              From consultation to ongoing maintenance, comprehensive support for your systems.
            </p>
          </AnimatedSection>
          
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div 
                  className="group p-4 sm:p-5 md:p-8 rounded-xl sm:rounded-2xl card-glass h-full"
                  whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-accent/20 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:bg-accent/30 transition-colors">
                    <service.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1.5 sm:mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <AnimatedSection delay={0.4} className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button variant="hero" size="lg" asChild className="group w-full sm:w-auto">
              <Link to="/services">
                Explore Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us - Split layout - Mobile enhanced */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">
            <AnimatedSection direction="right">
              <span className="badge-premium mb-4 sm:mb-6 inline-flex">Why HydroX</span>
              <h2 className="text-foreground mb-4 sm:mb-6">
                A Partner You Can Trust
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                With over 15 years of experience in East Africa, we've built a reputation for 
                reliability, technical expertise, and lasting partnerships.
              </p>
              
              <ul className="space-y-3 sm:space-y-4">
                {features.map((item, index) => (
                  <motion.li 
                    key={item}
                    className="flex items-start sm:items-center gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.2}>
              <motion.div 
                className="relative"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-accent/5 rounded-2xl sm:rounded-3xl blur-2xl" />
                
                <div className="relative bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-border/50">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                    Contact our team for a free consultation and site assessment.
                  </p>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <Button variant="accent" size="lg" asChild className="w-full group">
                      <Link to="/contact">
                        Contact Us
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="w-full group">
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

      {/* CTA Section - Mobile enhanced */}
      <section className="relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 gradient-accent"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        <div className="relative section-container py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
            <AnimatedSection>
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
                Need Immediate Assistance?
              </h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg">
                Our support team is available 24/7 for emergency calls.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <MagneticButton>
                <Button 
                  size="xl" 
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm rounded-full group w-full sm:w-auto" 
                  asChild
                >
                  <a href="mailto:hydro-x@intafrica.com">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Email Now
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
