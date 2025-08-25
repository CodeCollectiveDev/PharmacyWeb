import { Pill, Stethoscope, Package, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Prescription Services",
      description:
        "Fast and reliable prescription filling with medication counseling tailored to your needs.",
    },
    {
      icon: Stethoscope,
      title: "Health Consultations",
      description:
        "One-on-one sessions with our pharmacists to answer your health and wellness questions.",
    },
    {
      icon: Package,
      title: "Over-the-Counter Products",
      description:
        "Wide selection of vitamins, supplements, and everyday healthcare essentials.",
    },
    {
      icon: ClipboardCheck,
      title: "Medication Reviews",
      description:
        "Personalized reviews to ensure your medications are safe, effective, and up-to-date.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-trust py-16 text-trust-foreground">
        <div className="container text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg opacity-90">
            At Metmma Pharmacy, we offer a range of professional services
            designed to support your health and wellness journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {services.map((s, i) => (
            <Card
              key={i}
              className="border-0 shadow-card hover:shadow-cta transition-smooth"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-trust mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
