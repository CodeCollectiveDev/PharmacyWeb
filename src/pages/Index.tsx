import { ArrowRight, Shield, Heart, Users, Clock, MessageCircle, MapPinHouse, Pill, Stethoscope, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: Pill,
      title: 'Prescription Fills & Refills',
      description: 'Fast, accurate prescription services with convenient pickup.',
    },
    {
      icon: Stethoscope,
      title: 'Health Screenings',
      description: 'Blood pressure and weight checks for better health tracking.',
    },
    {
      icon: Shield,
      title: 'Medical Tests',
      description: 'Basic lab test services including Malaria and more.',
    },
    {
      icon: UserCheck,
      title: 'Medication Counseling',
      description: 'Talk to a pharmacist for safe and effective medication use.',
    },
  ];

  const stats = [
    { number: '1+', label: 'Years Serving Community' },
    { number: '100+', label: 'Products Available' },
    { number: 'Daily', label: 'Service' },
    { number: 'Trusted', label: 'By Local Families' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-trust">
                Your Local, Reliable Pharmacy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Metmma Pharmacy, we’re here to provide accessible and caring
                service for every member of our community. Our focus is simple —
                safe medicines, helpful advice, and personal care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <MapPinHouse className="w-5 h-5 mr-2" />
                  Visit Us
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://wa.me/265994399885?text=Hello%20Metmma%20Pharmacy,%20I%20need%20assistance",
                      "_blank"
                    )
                  }
                  className="flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Us
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Open Daily</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Licensed Pharmacist</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Friendly Service</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/Pharmacy-shelves.jpg"
                height={20}
                alt="Pharmacy shelves"
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              We provide essential healthcare services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition p-4">
                <CardHeader className="text-center">
                  <service.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground text-sm">
                  {service.description}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <NavLink
              to="/services"
              className="text-primary hover:underline inline-flex items-center"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary">About Us</Badge>
              <h2 className="text-3xl font-bold text-trust">
                Caring for Our Community
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Metmma Pharmacy is proud to serve as a trusted health partner for
                local families. From prescription support to health advice, our
                team is here to help every step of the way.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-primary hover:text-white"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="w-10 h-10 text-primary mb-3" />
              <p className="text-muted-foreground">
                A licensed pharmacist with years of experience, offering
                personalized care and attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/90 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Visit Metmma Pharmacy?
          </h2>
          <p className="mb-8 opacity-90">
            We’re here every day to serve you. Drop by for prescriptions, advice,
            or a friendly chat about your health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <MapPinHouse className="w-5 h-5 mr-2" />
              Find Us
            </Button>
            <Button
              type="button"
              onClick={() =>
                window.open(
                  "https://wa.me/265994399885?text=Hello%20Metmma%20Pharmacy,%20I%20need%20assistance",
                  "_blank"
                )
              }
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Message Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
