import {
  ArrowRight,
  Shield,
  Heart,
  Users,
  Clock,
  MessageCircle,
  MapPinHouse,
  Pill,
  Stethoscope,
  UserCheck,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import { useSEO } from "@/hooks/use-seo-tags";
import { defaultSEO } from "@/lib/seo";

const Index = () => {
  // Set SEO tags for homepage
  useSEO(defaultSEO);
  const handleContactClick = () => {
    try {
      // Replace with your actual API call
      window.open(
        "https://wa.me/265994399885?text=Hello%20Metmma%20Pharmacy,%20I%20need%20assistance",
        "_blank"
      );
      toast.success("Opening WhatsApp", {
        description: "Chat window is opening...",
      });
    } catch {
      toast.error("Error", {
        description: "Failed to open WhatsApp. Please try again.",
      });
    }
  };
  const services = [
    {
      icon: Pill,
      title: "Prescription Fills & Refills",
      description:
        "Fast, accurate prescription services with convenient pickup.",
    },
    {
      icon: Stethoscope,
      title: "Health Screenings",
      description:
        "Blood pressure and weight checks for better health tracking.",
    },
    {
      icon: Shield,
      title: "Medical Tests",
      description: "Basic lab test services including Malaria and more.",
    },
    {
      icon: UserCheck,
      title: "Medication Counseling",
      description:
        "Talk to a pharmacist for safe and effective medication use.",
    },
  ];

  const stats = [
    { number: "1+", label: "Years Serving Community" },
    { number: "100+", label: "Products Available" },
    { number: "Daily", label: "Service" },
    { number: "Trusted", label: "By Local Families" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background for Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/pharma-bg-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Image Background for Mobile */}
        <div 
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/images/pharmacy-bg.jpg)` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up font-display tracking-tight">
            Help families heal.
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Join us in providing accessible healthcare and compassionate care to children and families in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <MapPinHouse className="w-5 h-5 mr-2" />
              Visit Our Pharmacy
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleContactClick}
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 h-auto font-semibold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Help Now
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" style={{ animationDelay: '0.6s' }}>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up font-display tracking-tight">
              Hi, we are Metmma Pharmacy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
              We are a trusted community pharmacy dedicated to providing accessible healthcare and compassionate service to families in our neighborhood. With your support, we ensure that every person has access to the quality healthcare they deserve.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <NavLink
                to="/about"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-lg transition-all duration-300 hover:scale-105 group"
              >
                Who We Are 
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 animate-fade-in-up font-display tracking-tight">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
              Our work reflects compassionate care by ensuring quality medications and health services are accessible to all, while building lasting relationships with our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up" 
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 border border-gray-100/50">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-125 bg-gradient-to-br ${
                    index === 0 ? 'from-green-100 to-green-50' :
                    index === 1 ? 'from-green-100 to-green-50' :
                    index === 2 ? 'from-emerald-100 to-emerald-50' :
                    'from-teal-100 to-teal-50'
                  }`}>
                    <service.icon className={`w-8 h-8 transition-all duration-300 group-hover:scale-110 ${
                      index === 0 ? 'text-green-600' :
                      index === 1 ? 'text-green-600' :
                      index === 2 ? 'text-emerald-600' :
                      'text-teal-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4 font-medium">Patient Story</Badge>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 font-display tracking-tight">
                  Maria's Story of Recovery
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                  "When my child fell ill, I was worried about finding the right medication and care. The team at Metmma Pharmacy not only provided the medicines we needed but also took the time to explain everything and check on our progress."
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  "Their compassionate service made all the difference in our healing journey. Now my family is healthy and we know we have a trusted partner in our healthcare."
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow group"
              >
                <Play className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                Watch Her Story
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Happy family at pharmacy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                    <Play className="w-6 h-6 text-gray-900 ml-1 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in group" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-3 font-display bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg opacity-90 font-medium group-hover:opacity-100 transition-opacity duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up font-display tracking-tight">
              Ready to Experience Quality Healthcare?
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
              We're here every day to serve you and your family. Visit us for prescriptions, health consultations, or simply to learn more about maintaining your wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-8 py-4 h-auto font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <MapPinHouse className="w-5 h-5 mr-2" />
                Visit Our Location
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
                className="border-white text-white hover:bg-white/20 text-lg px-8 py-4 h-auto font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Help Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 animate-fade-in-up font-display">Visit Us Today</h3>
            <div className="space-y-4 text-lg text-gray-600">
              <p className="flex items-center justify-center animate-fade-in-up font-medium" style={{ animationDelay: '0.1s' }}>
                <MessageCircle className="w-5 h-5 mr-3 text-primary" />
                (+265) 994 399 885
              </p>
              <p className="flex items-center justify-center animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
                <MapPinHouse className="w-5 h-5 mr-3 text-primary" />
                Nanjiri, P/Bag 323
              </p>
              <p className="flex items-center justify-center animate-fade-in-up font-medium" style={{ animationDelay: '0.3s' }}>
                <Heart className="w-5 h-5 mr-3 text-primary" />
                metmmapharmacy@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
