import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, CheckCircle2, Building2, Factory, Droplets, Mail, Wrench, Shield, Clock, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from "@/components/ui/AnimatedSection";
import heroImage from "@/assets/hero-industrial.jpg";
import chillerImage from "@/assets/product-chiller.jpg";
import coolantImage from "@/assets/product-coolant.jpg";
import filtrationImage from "@/assets/product-filtration.jpg";

const stats = [
  { label: "Years of Experience", value: "15+", icon: Clock },
  { label: "Clients Served", value: "200+", icon: Building2 },
  { label: "System Uptime", value: "99.5%", icon: Zap },
  { label: "Support Availability", value: "24/7", icon: Mail },
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
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background layers with parallax */}
        <motion.div 
          className="absolute inset-0 gradient-hero"
          style={{ y: heroY }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <img
            src={heroImage}
            alt="Industrial cooling systems"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </motion.div>
        <div className="absolute inset-0 gradient-radial-glow" />
        
        {/* Animated decorative elements */}
        <FloatingElement amplitude={15} duration={5}>
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement amplitude={10} duration={6}>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement amplitude={8} duration={4}>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-aqua-light/10 rounded-full blur-2xl" />
        </FloatingElement>
        
        <motion.div 
          className="relative section-container py-32 md:py-40 lg:py-48 w-full"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="badge-accent mb-6"
            >
              Trusted Industrial Partner
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary-foreground mb-6 text-balance"
            >
              Reliable Cooling & Filtration Solutions for Hotels & Industry
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-foreground/75 mb-10 leading-relaxed max-w-2xl"
            >
              Reducing downtime, controlling costs, and keeping critical systems running across East Africa.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="hero" size="xl" asChild className="shadow-glow-accent animate-pulse-glow">
                  <Link to="/contact">
                    Request Site Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/products">View Products</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Indicators */}
      <section className="relative -mt-16 z-10">
        <div className="section-container">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <motion.div 
                  className="stat-card group cursor-default"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                  >
                    <stat.icon className="w-5 h-5 text-accent mx-auto mb-3" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <p className="badge-accent mb-4">
              Trusted Across Industries
            </p>
            <h2 className="text-foreground">
              Serving Critical Infrastructure
            </h2>
          </AnimatedSection>
          <StaggerContainer staggerDelay={0.15} className="flex flex-wrap justify-center gap-6 md:gap-12">
            {industries.map((industry) => (
              <StaggerItem key={industry.name}>
                <motion.div 
                  className="flex items-center gap-4 px-6 py-4 rounded-xl bg-card border border-border/60 shadow-card"
                  whileHover={{ y: -3, boxShadow: "0 12px 40px hsl(215 60% 15% / 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <industry.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <span className="text-lg font-semibold text-foreground">{industry.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="badge-accent mb-4">
                Our Solutions
              </p>
              <h2 className="text-foreground">
                Industrial-Grade Products
              </h2>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" asChild className="border-2">
                <Link to="/products">
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <StaggerItem key={product.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    to={product.href}
                    className="group card-elevated card-hover overflow-hidden block"
                  >
                    <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-7">
                      <h3 className="text-foreground mb-2 group-hover:text-accent transition-colors">{product.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                      <motion.div 
                        className="mt-4 flex items-center gap-2 text-accent font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">Learn more</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-radial-glow" />
        
        {/* Animated background elements */}
        <FloatingElement amplitude={20} duration={8}>
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement amplitude={15} duration={6}>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        </FloatingElement>
        
        <div className="relative section-container">
          <AnimatedSection className="text-center mb-16">
            <p className="badge-accent bg-accent/20 mb-4">
              Professional Services
            </p>
            <h2 className="text-primary-foreground">
              End-to-End Support
            </h2>
            <p className="text-primary-foreground/65 max-w-2xl mx-auto mt-5 text-lg">
              From initial consultation to ongoing maintenance, we provide comprehensive support for your cooling and filtration systems.
            </p>
          </AnimatedSection>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <motion.div 
                  className="group p-7 rounded-xl glass-dark border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-accent" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-3">{service.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection delay={0.4} className="text-center mt-14">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="hero" size="lg" asChild className="shadow-glow-accent">
                <Link to="/services">
                  Explore All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <p className="badge-accent mb-4">
                Why HydroX
              </p>
              <h2 className="text-foreground mb-6">
                A Partner You Can Trust
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                With over 15 years of experience in East Africa, HydroX has built a reputation for reliability, technical expertise, and long-term partnerships with leading organizations.
              </p>
              <ul className="space-y-5">
                {[
                  "Local expertise with international standards",
                  "Certified technicians and engineers",
                  "Genuine parts and quality products",
                  "Transparent pricing with no hidden costs",
                  "Proven track record across industries",
                ].map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, backgroundColor: "hsl(185 75% 38% / 0.2)" }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </motion.div>
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative">
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl blur-xl"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="relative bg-card rounded-2xl p-10 lg:p-12 shadow-premium border border-border/60"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-foreground mb-4 text-2xl">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Contact our team for a free consultation and site assessment. We'll help you find the right solutions for your facility.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Button variant="accent" size="lg" asChild className="w-full">
                        <Link to="/contact">
                          Contact Us
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                      <Button variant="outline" size="lg" asChild className="w-full border-2">
                        <a href="mailto:hydro-x@intafrica.com">
                          <Mail className="w-4 h-4" />
                          Email Us
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 gradient-accent bg-[length:200%_200%]"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <AnimatedSection className="relative section-container py-20 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-accent-foreground mb-3 text-3xl md:text-4xl">Need Immediate Assistance?</h2>
              <p className="text-accent-foreground/80 text-lg">
                Our support team is available 24/7 for emergency calls.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="xl" 
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" 
                asChild
              >
                <a href="mailto:hydro-x@intafrica.com">
                  <Mail className="w-5 h-5" />
                  Email Now
                </a>
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
}
