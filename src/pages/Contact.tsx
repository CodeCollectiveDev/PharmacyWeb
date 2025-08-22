import { MapPin, Phone, Mail, Clock, Send, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', 'Emergency: (555) 123-HELP'],
      description: 'Call us for prescriptions, questions, or emergencies'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@carepointpharmacy.com', 'prescriptions@carepointpharmacy.com'],
      description: 'Email us for non-urgent inquiries and prescription transfers'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Main Street', 'Community City, ST 12345'],
      description: 'Convenient downtown location with parking available'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 9:00 AM - 6:00 PM'],
      description: 'Extended hours to serve you better'
    }
  ];

  const quickContacts = [
    { title: 'Prescription Refills', phone: '(555) 123-4567', desc: 'Press 1' },
    { title: 'New Prescriptions', phone: '(555) 123-4567', desc: 'Press 2' },
    { title: 'Insurance Questions', phone: '(555) 123-4567', desc: 'Press 3' },
    { title: 'Pharmacist Consultation', phone: '(555) 123-4567', desc: 'Press 4' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-wellness py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
              Contact CarePoint Pharmacy
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help with all your medication needs and health questions. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-cta transition-smooth text-center group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-trust mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-foreground font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold text-trust mb-6">Find Us</h2>
              <div className="bg-background rounded-lg shadow-card p-6 mb-6">
                {/* Placeholder for map - in a real implementation, you'd use Google Maps or similar */}
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">123 Main Street, Community City</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-soft">
                  <Navigation className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-trust">Easy Parking Available</p>
                    <p className="text-sm text-muted-foreground">Free parking in front and rear of building</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-soft">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-trust">Accessible Location</p>
                    <p className="text-sm text-muted-foreground">Wheelchair accessible with automatic doors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-trust mb-6">Send Us a Message</h2>
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-trust">First Name</Label>
                        <Input id="firstName" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-trust">Last Name</Label>
                        <Input id="lastName" placeholder="Smith" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-trust">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.smith@email.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-trust">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-trust">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-trust">Message</Label>
                      <Textarea 
                        id="message" 
                        rows={6}
                        placeholder="Please provide details about your inquiry..."
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust mb-4">Quick Contact Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For faster service, use our dedicated phone lines for specific services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContacts.map((contact, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-smooth">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-lg text-trust">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-primary font-semibold text-lg mb-1">{contact.phone}</p>
                  <p className="text-muted-foreground text-sm">{contact.desc}</p>
                  <Button variant="outline" size="sm" className="mt-4 hover:bg-primary hover:text-primary-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-trust text-trust-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Emergency Services</h2>
            <p className="text-lg mb-8 opacity-90">
              For urgent medication needs outside regular business hours, we provide 24/7 emergency services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-trust-foreground/10 rounded-lg p-6">
                <Phone className="w-12 h-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">24/7 Emergency Line</h3>
                <p className="text-lg font-bold text-accent mb-2">(555) 123-HELP</p>
                <p className="text-sm opacity-90">
                  For urgent prescription needs and emergency pharmacist consultation
                </p>
              </div>
              <div className="bg-trust-foreground/10 rounded-lg p-6">
                <Clock className="w-12 h-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Emergency Refills</h3>
                <p className="text-lg font-bold text-accent mb-2">Available 24/7</p>
                <p className="text-sm opacity-90">
                  Emergency supplies for critical medications when regular pharmacy is closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;