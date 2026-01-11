import { Layout } from "@/components/layout/Layout";
import { CheckCircle2, Users, Target, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Reliability",
    description: "We deliver consistent, dependable solutions that keep your systems running without interruption.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build long-term relationships, becoming an extension of your operations team.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Deep understanding of East African industries and infrastructure challenges.",
  },
];

const milestones = [
  { year: "2008", title: "Company Founded", description: "HydroX established in Nairobi, Kenya" },
  { year: "2012", title: "Regional Expansion", description: "Extended operations to Tanzania and Uganda" },
  { year: "2016", title: "ISO Certification", description: "Achieved ISO 9001:2015 quality certification" },
  { year: "2020", title: "200+ Clients", description: "Milestone of serving over 200 organizations" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary">
        <div className="section-container py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">About HydroX</p>
            <h1 className="text-primary-foreground mb-6">
              Your Trusted Partner in Industrial Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              For over 15 years, HydroX East African Ltd has been the region's trusted provider of industrial cooling and water filtration solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To provide reliable, efficient, and cost-effective cooling and water treatment solutions that keep East Africa's critical infrastructure running smoothly.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We understand that downtime costs money and disrupts operations. That's why we've built our company around one principle: reliability. Every product we supply, every system we install, and every service we provide is designed to keep your operations running without interruption.
              </p>
              <ul className="space-y-3">
                {[
                  "Factory-trained technicians and engineers",
                  "24/7 emergency support across East Africa",
                  "Genuine products from trusted manufacturers",
                  "Transparent, competitive pricing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-8 lg:p-12">
              <h3 className="text-foreground mb-8">Our Journey</h3>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Our Values
            </p>
            <h2 className="text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-elevated p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Regional Presence
            </p>
            <h2 className="text-foreground mb-6">
              Serving East Africa
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With headquarters in Nairobi and operations across Kenya, Tanzania, and Uganda, we're positioned to serve clients throughout the region with fast response times and local expertise.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {["Kenya", "Tanzania", "Uganda"].map((country) => (
                <div key={country} className="p-6 bg-muted rounded-lg">
                  <p className="font-semibold text-foreground">{country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
