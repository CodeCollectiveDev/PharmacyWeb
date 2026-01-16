import { MapPin, Phone, Mail, Clock, Send, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNewsletter } from "@/hooks/use-newsletter";

const Contact = () => {
  const { email, setEmail, subscribe, isLoading } = useNewsletter();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    subscribe(email);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["265 994 399 885"],
      description: "Call us for prescriptions, questions, or emergencies",
      color: "from-blue-100 to-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@metmmapharmacy.com", "prescriptions@metmmapharmacy.com"],
      description:
        "Email us for non-urgent inquiries and prescription transfers",
      color: "from-green-100 to-green-50",
      textColor: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Nanjiri", "along M1, Lilongwe", "Malawi"],
      description:
        "Convenient alongside the road location with parking available",
      color: "from-purple-100 to-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sat: 8:00 AM - 5:00 PM", "Sun & Holidays: 8:00 AM - 2:00 PM"],
      description: "Extended hours to serve you better",
      color: "from-orange-100 to-orange-50",
      textColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full -mr-48 -mt-48"></div>
        </div>
        <div className="container text-center max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Contact Metmma Pharmacy
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're here to help with all your medication needs and health
            questions. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100/50 animate-fade-in-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className={`w-8 h-8 ${info.textColor}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">{info.title}</h3>
              {info.details ? (
                <div className="space-y-1 mb-4 text-center">
                  {info.details.map((d, i) => (
                    <p key={i} className="text-gray-900 font-medium text-sm">
                      {d}
                    </p>
                  ))}
                </div>
              ) : null}
              <p className="text-gray-600 text-xs text-center leading-relaxed">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          {/* Map */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-8 tracking-tight">Find Us</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100/50">
              <div className="w-full h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center border-2 border-green-200/50 group hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-900 font-semibold">Interactive Map</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Nanjiri, along M1, Lilongwe
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-md border border-gray-100/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                  <Navigation className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Easy Parking</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Free parking in front of the pharmacy
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-md border border-gray-100/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Accessible Location</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Alongside Main Road (M1)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="animate-slide-in-right">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-8 tracking-tight">
              Send Us a Message
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100/50">
              <form className="space-y-5" aria-label="Contact form">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold text-sm">
                    Name <span className="text-red-500" aria-label="required">*</span>
                  </Label>
                  <Input 
                    id="name" 
                    placeholder="John Wayne" 
                    required
                    aria-required="true"
                    className="mt-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none rounded-lg transition-all" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold text-sm">
                    Email <span className="text-red-500" aria-label="required">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="email@example.com" 
                    required
                    aria-required="true"
                    className="mt-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none rounded-lg transition-all" 
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold text-sm">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(265) 987-654-321" 
                    className="mt-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none rounded-lg transition-all" 
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-semibold text-sm">
                    Subject <span className="text-red-500" aria-label="required">*</span>
                  </Label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help?" 
                    required
                    aria-required="true"
                    className="mt-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none rounded-lg transition-all" 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold text-sm">
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Please provide details about your inquiry..."
                    required
                    aria-required="true"
                    className="mt-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none rounded-lg transition-all"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container text-center max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Stay Informed</h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            Subscribe to our newsletter for updates, tips, and advice from our
            pharmacists.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white/95 border-0 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all duration-300"
              required
              disabled={isLoading}
            />
            <Button
              type="submit"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 transition-all duration-300 shadow-md hover:shadow-lg rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-xs mt-6 opacity-80">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
