import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Building2, Shield, Clock, ClipboardCheck, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Site Audits & Diagnostics",
    description: "Comprehensive assessment of your existing cooling and water systems to identify inefficiencies, potential failures, and optimization opportunities.",
    details: [
      "Full system performance analysis",
      "Energy efficiency evaluation",
      "Equipment condition assessment",
      "Detailed recommendations report",
    ],
  },
  {
    icon: Building2,
    title: "Installation & Commissioning",
    description: "Professional installation of cooling and filtration systems by certified technicians, ensuring optimal performance from day one.",
    details: [
      "Project planning and coordination",
      "Professional equipment installation",
      "System testing and commissioning",
      "Operator training and handover",
    ],
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs designed to extend equipment life, maintain efficiency, and prevent unexpected breakdowns.",
    details: [
      "Regular inspection schedules",
      "Filter and fluid replacements",
      "Performance monitoring",
      "Predictive maintenance alerts",
    ],
  },
  {
    icon: Wrench,
    title: "Repairs & Servicing",
    description: "Expert repair services for all major cooling and filtration equipment brands, using genuine parts and proven techniques.",
    details: [
      "Diagnosis and troubleshooting",
      "Component repair and replacement",
      "System optimization",
      "Quality assurance testing",
    ],
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Round-the-clock emergency support for critical system failures, minimizing downtime and protecting your operations.",
    details: [
      "Immediate response team dispatch",
      "Remote diagnostic support",
      "Priority parts sourcing",
      "Temporary solutions when needed",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Problem Reporting",
    description: "Structured issue reporting and tracking system to ensure all problems are documented, addressed, and resolved efficiently.",
    details: [
      "Formal issue documentation",
      "Priority-based resolution",
      "Progress tracking",
      "Root cause analysis",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary">
        <div className="section-container py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Our Services</p>
            <h1 className="text-primary-foreground mb-6">
              Comprehensive Support for Your Systems
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From installation to emergency response, we provide end-to-end services to keep your cooling and water systems operating at peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-elevated p-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              How We Work
            </p>
            <h2 className="text-foreground">
              Our Service Process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Contact", description: "Reach out via phone, email, or our contact form" },
              { step: "02", title: "Assessment", description: "We evaluate your needs and propose solutions" },
              { step: "03", title: "Execution", description: "Our team delivers professional service" },
              { step: "04", title: "Follow-up", description: "We ensure your satisfaction and ongoing support" },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="section-container text-center">
          <h2 className="text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your service requirements. Our team is ready to help you maintain peak system performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+254700000000">Call +254 700 000 000</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
