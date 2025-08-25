import { Pill, Heart, Shield, Stethoscope, Thermometer, UserCheck, Clock, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// Removed image import to fix 500 error

const Services = () => {
  const mainServices = [
    {
      icon: Pill,
      title: 'Prescription Refills',
      description: 'Fast, accurate prescription filling with automatic refill reminders and convenient pickup options.',
      features: ['Same-day filling', 'Automatic refill reminders']
    },
    {
      icon: Stethoscope,
      title: 'Health Screenings',
      description: 'Comprehensive health screenings to monitor your wellness and catch potential issues early.',
      features: ['Blood pressure monitoring', 'Diabetes screening']
    },
    {
      icon: Shield,
      title: 'Medical Tests',
      description: 'Stay informed of your health status.',
      features: ['Malaria Tests', 'Pregnancy Tests']
    },
    {
      icon: UserCheck,
      title: 'Medication Counseling',
      description: 'Expert guidance on medication management, interactions, and proper usage.',
      features: ['Dosage optimization', 'Side effect management', 'Adherence coaching']
    },
    {
      icon: Heart,
      title: 'Wellness Consultations',
      description: 'Personalized wellness advice to help you achieve your health goals.',
      features: ['Nutrition guidance', 'Supplement recommendations', 'Lifestyle counseling', 'Preventive care tips']
    },
    {
      icon: Thermometer,
      title: 'Health Monitoring',
      description: 'Regular monitoring services to track your health progress over time.',
      features: ['Medication therapy management', 'Chronic disease support', 'Health goal tracking', 'Progress reports']
    }
  ];

  const additionalServices = [
    { name: 'Compounding Services', description: 'Custom medication preparations for unique patient needs' },
    { name: 'Medication Synchronization', description: 'Align all your refills to one convenient pickup date' },
    { name: 'Blister Packaging', description: 'Organized packaging for complex medication regimens' },
    { name: 'Home Delivery', description: 'Free local delivery for qualifying prescriptions' },
    { name: 'Insurance Assistance', description: 'Help navigating insurance coverage and prior authorizations' },
    { name: 'Medication Disposal', description: 'Safe disposal of unused or expired medications' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-wellness py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
              Comprehensive Pharmacy Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From prescription medications to preventive care, we provide complete healthcare solutions tailored to your needs.
            </p>
            {/* <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-cta">
              <Phone className="w-4 h-4 mr-2" />
              Call (555) 123-4567
            </Button> */}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional healthcare services designed to keep you healthy and manage your medications effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-cta transition-smooth group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-trust">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-trust mb-6">
                Personalized Medication Counseling
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our experienced pharmacists provide one-on-one consultations to ensure you understand 
                your medications, manage side effects, and achieve the best possible health outcomes.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Free 15-minute consultations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <UserCheck className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Licensed pharmacist guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Personalized care plans</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Consultation
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-trust/20 rounded-lg shadow-card flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <UserCheck className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Pharmacist Consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go beyond traditional pharmacy services to provide comprehensive healthcare support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-trust mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Emergency Services */}
      {/* <section className="py-16 bg-gradient-trust text-trust-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Emergency & After-Hours Support</h2>
            <p className="text-lg mb-8 opacity-90">
              We understand that health needs don't follow business hours. Our emergency services ensure 
              you can access critical medications and advice when you need them most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-trust-foreground/10 rounded-lg p-6">
                <Phone className="w-8 h-8 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">24/7 Emergency Line</h3>
                <p className="text-sm opacity-90 mb-4">
                  Call our emergency number for urgent medication needs and pharmacist consultation.
                </p>
                <p className="text-accent font-semibold">(555) 123-HELP</p>
              </div>
              <div className="bg-trust-foreground/10 rounded-lg p-6">
                <Clock className="w-8 h-8 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Emergency Refills</h3>
                <p className="text-sm opacity-90 mb-4">
                  Emergency supplies available for critical medications outside regular hours.
                </p>
                <p className="text-accent font-semibold">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;