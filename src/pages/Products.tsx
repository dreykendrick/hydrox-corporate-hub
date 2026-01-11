import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import chillerImage from "@/assets/product-chiller.jpg";
import coolantImage from "@/assets/product-coolant.jpg";
import filtrationImage from "@/assets/product-filtration.jpg";

const productCategories = [
  {
    id: "coolants",
    title: "Industrial Coolants",
    description: "High-performance cooling fluids designed for industrial and commercial HVAC systems. Our coolants provide superior heat transfer, corrosion protection, and extended service life.",
    image: coolantImage,
    features: [
      "Extended service intervals",
      "Corrosion inhibitors included",
      "Compatible with multiple system types",
      "Eco-friendly formulations available",
    ],
    applications: ["Hotels & Resorts", "Manufacturing Plants", "Data Centers", "Commercial Buildings"],
  },
  {
    id: "chillers",
    title: "Commercial Chillers",
    description: "Energy-efficient chiller units ranging from compact systems to large-scale industrial cooling solutions. Designed for reliability and performance in demanding environments.",
    image: chillerImage,
    features: [
      "High energy efficiency ratings",
      "Low noise operation",
      "Remote monitoring capable",
      "Modular designs for scalability",
    ],
    applications: ["Hotels & Hospitality", "Food Processing", "Pharmaceutical", "Industrial Facilities"],
  },
  {
    id: "filtration",
    title: "Water Filtration Systems",
    description: "Advanced water treatment and filtration solutions for clean, safe water in any environment. From point-of-use filters to large-scale treatment plants.",
    image: filtrationImage,
    features: [
      "Multi-stage filtration",
      "Reverse osmosis systems",
      "UV disinfection options",
      "Customizable configurations",
    ],
    applications: ["Municipal Water", "Hotels & Resorts", "Hospitals", "Industrial Process Water"],
  },
];

export default function Products() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary">
        <div className="section-container py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Our Products</p>
            <h1 className="text-primary-foreground mb-6">
              Industrial-Grade Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Premium cooling and filtration products designed for reliability, efficiency, and long-term performance in demanding environments.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-24">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-foreground mb-4">{category.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {category.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {category.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.applications.map((app) => (
                        <span
                          key={app}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="accent" asChild>
                    <Link to="/contact">
                      Request Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 section-padding">
        <div className="section-container text-center">
          <h2 className="text-foreground mb-4">Need Help Choosing?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our technical team can help you select the right products for your specific requirements. Contact us for a free consultation.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
