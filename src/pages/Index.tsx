import { ArrowRight, Shield, Heart, Users, Clock, MessageCircle, MapPinHouse, Pill, Stethoscope, UserCheck, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const services = [
    {
      icon: Pill,
      title: 'Prescription fills & Refills',
      description: 'Fast, accurate prescription filling with convenient pickup and delivery options.',
      color: 'text-primary'
    },
    {
      icon: Stethoscope,
      title: 'Health Screenings',
      description: 'Blood pressure, and weight check for better health management.',
      color: 'text-accent'
    },
    {
      icon: Shield,
      title: 'Medical tests',
      description: 'Complete lab test services including Malaria...',
      color: 'text-trust'
    },
    {
      icon: UserCheck,
      title: 'Medication Counseling',
      description: 'Expert pharmacist consultations to ensure safe and effective medication use.',
      color: 'text-wellness-foreground'
    }
  ];

  const stats = [
    { number: '1+', label: 'Years Serving Community' },
    { number: '100+', label: 'Products' },
    { number: 'Daily', label: 'Service' },
    { number: 'Total', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>               
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  Your Trusted <span className="text-accent">Reliable</span> Pharmacy
                </h1>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  We are committed to being the community’s most trusted and convenient partner in health and wellness. With compassion, innovation, and patient-centered care at the heart of everything we do, our mission is simple — to serve every customer with courtesy while promoting healthier lives.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta">
                  <MapPinHouse className="w-5 h-5 mr-2" />
                  Visit Us
                </Button>
                {/* CTA Button to link to whatsapp with a preset message */}
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
                  className="px-5 py-2 border text-black font-medium rounded-lg transition-colors hover:bg-transparent hover:text-white shadow-sm flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Us
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
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
                  <span>Customer-centered</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust mb-6">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are committed to offer the best pharmaceutical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-cta transition-smooth group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-trust">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-wellness">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-trust/20 rounded-lg shadow-card flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Pharmacist Consultation</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <Badge className="bg-primary/20 text-primary mb-4">
                  About Metmma Pharmacy
                </Badge>
                <h2 className="text-4xl font-bold text-trust mb-6">
                  Providing patient-centered care.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Metmma Pharmacy is a cornerstone of healthcare 
                  in the community. We combine traditional pharmaceutical care with 
                  modern technology and clinical expertise.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-trust font-medium">Licensed pharmacist with 2+ years experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-trust font-medium">Personalized medication counseling and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-trust font-medium">Comprehensive health screenings and medication</span>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" variant="outline" className="hover:bg-trust hover:text-trust-foreground">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-trust text-trust-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Trusted by families for quality care, Metmma Pharmacy makes getting your medicines simple. 
              Visit us today or call to transfer your prescriptions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta">
                <MapPinHouse className="w-5 h-5 mr-2" />
                Visit Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                type="button"
                onClick={() =>
                  window.open(
                    "https://wa.me/265994399885?text=Hello%20Metmma%20Pharmacy,%20I%20need%20assistance",
                    "_blank"
                  )}
                variant="outline" 
                size="lg" 
                className="px-5 py-2 border text-black 
                  font-medium rounded-lg transition-colors 
                  hover:bg-transparent hover:text-white shadow-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                Message Us
              </Button>
            </div>

            {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-trust-foreground/10 rounded-lg p-6">
                <Clock className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Extended Hours</h3>
                <p className="text-sm opacity-90">Mon-Fri 8AM-8PM<br/>Weekends 9AM-6PM</p>
              </div>
              <div className="bg-trust-foreground/10 rounded-lg p-6">
                <Phone className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">24/7 Emergency</h3>
                <p className="text-sm opacity-90">Emergency line available<br/>for urgent needs</p>
              </div>
              <div className="bg-trust-foreground/10 rounded-lg p-6">
                <Heart className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Personal Care</h3>
                <p className="text-sm opacity-90">One-on-one consultations<br/>with licensed pharmacists</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
