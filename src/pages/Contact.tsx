import { MapPin, Phone, Mail, Clock, Send, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["265 994 399 885"],
      description: "Call us for prescriptions, questions, or emergencies",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@metmmapharmacy.com", "prescriptions@metmmapharmacy.com"],
      description:
        "Email us for non-urgent inquiries and prescription transfers",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Nanjiri", "along M1, Lilongwe", "Malawi"],
      description:
        "Convenient alongside the road location with parking available",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sat: 8:00 AM - 5:00 PM", "Sun & Holidays: 8:00 AM - 2:00 PM"],
      description: "Extended hours to serve you better",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-wellness py-16">
        <div className="container text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
            Contact Metmma Pharmacy
          </h1>
          <p className="text-lg text-muted-foreground">
            We're here to help with all your medication needs and health
            questions. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {contactInfo.map((info, i) => (
            <Card
              key={i}
              className="border-0 shadow-card hover:shadow-cta transition-smooth text-center group"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <info.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-trust mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, j) => (
                    <p key={j} className="text-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-16 bg-muted">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold text-trust mb-6">Find Us</h2>
            <div className="bg-background rounded-lg shadow-card p-6 mb-6">
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    123 Main Street, Community City
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-soft">
                <Navigation className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-trust">Easy Parking</p>
                  <p className="text-sm text-muted-foreground">
                    Free parking in front & rear
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-soft">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-trust">Accessible Location</p>
                  <p className="text-sm text-muted-foreground">
                    Wheelchair accessible with automatic doors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-trust mb-6">
              Send Us a Message
            </h2>
            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(265) 987-654-321" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-trust text-trust-foreground">
        <div className="container text-center max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter for updates, tips, and advice from our
            pharmacists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-xs mt-4 opacity-75">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
