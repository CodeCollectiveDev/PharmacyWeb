import { Users, Heart, Stethoscope, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Your health and well-being always come first. We listen and personalize our services.",
    },
    {
      icon: Stethoscope,
      title: "Professional Expertise",
      description:
        "Our licensed pharmacists are always available to provide trusted medical advice.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Serving Nanjiri and surrounding areas with compassion and dedication.",
    },
    {
      icon: Award,
      title: "Quality & Safety",
      description:
        "We ensure every prescription and product meets strict safety standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-wellness py-16">
        <div className="container text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
            About Metmma Pharmacy
          </h1>
          <p className="text-lg text-muted-foreground">
            Your trusted partner in health and wellness, providing compassionate,
            reliable, and professional care in our community.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 items-center">
          <div>
            <h2 className="text-3xl font-bold text-trust mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded with a vision to make healthcare more accessible and
              reliable, Metmma Pharmacy has been serving the Nanjiri community
              with dedication. Our mission is to provide patient-centered care
              while fostering a culture of compassion and innovation.
            </p>
            <p className="text-muted-foreground">
              From humble beginnings to a fully stocked, modern pharmacy, we
              continue to grow while maintaining our motto:
              <span className="font-semibold text-trust">
                {" "}
                "To serve customers with courtesy."
              </span>
            </p>
          </div>
          <div className="bg-muted h-64 rounded-lg flex items-center justify-center shadow-card">
            <Users className="w-20 h-20 text-primary" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container text-center px-4">
          <h2 className="text-3xl font-bold text-trust mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <Card
                key={i}
                className="border-0 shadow-card hover:shadow-cta transition-smooth"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <val.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-trust mb-2">
                    {val.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {val.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
