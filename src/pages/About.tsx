import { Heart, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
// Removed image import to fix 500 error

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every customer like family, providing personalized attention and genuine care.'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Our licensed pharmacists maintain the highest standards of pharmaceutical care and expertise.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Deeply rooted in our community, we understand and serve our neighbors\' unique health needs.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Consistent, timely service you can count on for all your medication and health needs.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson, PharmD',
      role: 'Chief Pharmacist & Owner',
      description: 'With over 15 years of experience, Dr. Johnson founded CarePoint Pharmacy to bring personalized healthcare to our community.',
      credentials: 'PharmD, University of Health Sciences | Board Certified Pharmacist'
    },
    {
      name: 'Michael Chen, PharmD',
      role: 'Clinical Pharmacist',
      description: 'Specializes in medication therapy management and works closely with local physicians to optimize patient care.',
      credentials: 'PharmD, State College of Pharmacy | Certified Diabetes Educator'
    },
    {
      name: 'Lisa Martinez',
      role: 'Lead Pharmacy Technician',
      description: 'With 10+ years in pharmacy services, Lisa ensures every prescription is prepared with precision and care.',
      credentials: 'Certified Pharmacy Technician | CPhT License #PT5678'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-wellness py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
              About Metmma Pharmacy
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Serving our community with trusted pharmaceutical care and genuine compassion since 1995.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-trust mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Metmma Pharmacy is a family company with a simple mission: 
                  to provide exceptional pharmaceutical care in a warm, welcoming environment where 
                  every customer feels valued and cared for.
                </p>
                <p>
                  What started as a small neighborhood pharmacy has grown into a trusted healthcare 
                  partner for thousands of families in our community. We've maintained our commitment 
                  to personalized service while embracing modern technology and clinical expertise.
                </p>
                <p>
                  Today, we're proud to be your local healthcare destination, offering not just 
                  prescription services, but comprehensive wellness support, health screenings, 
                  vaccinations, and educational resources to help you live your healthiest life.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-trust/20 rounded-lg shadow-card flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">CarePoint Pharmacy Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and reflect our commitment to exceptional healthcare service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-cta transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-trust mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced healthcare professionals are dedicated to providing you with the highest quality pharmaceutical care.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-cta transition-smooth">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-trust">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                  <p className="text-xs text-muted-foreground border-t border-border pt-3">
                    <strong>Credentials:</strong> {member.credentials}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-16 bg-gradient-wellness">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-trust mb-6">Our Community Commitment</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're more than just a pharmacy – we're active members of this community, supporting local health 
              initiatives, partnering with schools and senior centers, and participating in health fairs and 
              wellness events throughout the year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-background/80 rounded-lg p-6 shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">25+</div>
                <p className="text-sm text-muted-foreground">Years Serving the Community</p>
              </div>
              <div className="bg-background/80 rounded-lg p-6 shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-sm text-muted-foreground">Families We Serve</p>
              </div>
              <div className="bg-background/80 rounded-lg p-6 shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Community Events Annually</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;