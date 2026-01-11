import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@hydrox.co.ke",
    href: "mailto:info@hydrox.co.ke",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Industrial Area, Nairobi, Kenya",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 8:00 AM - 6:00 PM",
    href: null,
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you for your inquiry. Our team will contact you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary">
        <div className="section-container py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Contact Us</p>
            <h1 className="text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Ready to discuss your cooling or filtration needs? Our team is here to help with quotes, technical questions, or service requests.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-foreground hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-foreground mb-4">Emergency Support</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent system failures, our emergency line is available 24/7.
                </p>
                <Button variant="accent" asChild>
                  <a href="tel:+254700000000">
                    <Phone className="w-4 h-4" />
                    Emergency Line
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-elevated p-8 lg:p-12">
                <h2 className="text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will respond within 24 business hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your requirements or questions..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted">
        <div className="section-container py-16">
          <div className="bg-primary/5 rounded-lg h-80 flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map will be displayed here</p>
              <p className="text-sm text-muted-foreground">Industrial Area, Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
