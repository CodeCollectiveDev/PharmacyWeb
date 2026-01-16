import { Pill, Stethoscope, Package, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Prescription Services",
      description:
        "Fast and reliable prescription filling with medication counseling tailored to your needs.",
      color: "from-blue-100 to-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200/50",
      image: "/images/PrescriptionServices.jpg",
    },
    {
      icon: Stethoscope,
      title: "Health Consultations",
      description:
        "One-on-one sessions with our pharmacists to answer your health and wellness questions.",
      color: "from-green-100 to-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200/50",
      image: "/images/HealthConsultaion.jpg",
    },
    {
      icon: Package,
      title: "Over-the-Counter Products",
      description:
        "Wide selection of vitamins, supplements, and everyday healthcare essentials.",
      color: "from-purple-100 to-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200/50",
      image: "/images/Pharmacy-shelves.jpg",
    },
    {
      icon: ClipboardCheck,
      title: "Medication Reviews",
      description:
        "Personalized reviews to ensure your medications are safe, effective, and up-to-date.",
      color: "from-orange-100 to-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200/50",
      image: "/images/pharmacy-bg.jpg",
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
            Our Services
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Metmma Pharmacy, we offer a range of professional services
            designed to support your health and wellness journey.
          </p>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border ${s.borderColor} animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="h-40 overflow-hidden relative bg-gray-200">
                  <img 
                    src={s.image} 
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon className={`w-6 h-6 ${s.textColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 transition-colors duration-300">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Explore Our Pharmacy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pharmacy Background */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="/images/pharmacy-bg.jpg" 
                  alt="Modern Pharmacy Environment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Healthcare Environment</h3>
                <p className="text-gray-600">Our state-of-the-art facility is designed to provide professional consultations and prescription services with care and expertise</p>
              </div>
            </div>

            {/* Pharmacy Shelves */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="/images/Pharmacy-shelves.jpg" 
                  alt="Well-Stocked Pharmacy Shelves"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Extensive Product Range</h3>
                <p className="text-gray-600">Our well-stocked shelves feature a comprehensive selection of medications, supplements, and health products for all your wellness needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Why Choose Metmma Pharmacy?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Our team of experienced pharmacists is dedicated to ensuring you receive the best possible care and support. We combine professional expertise with genuine compassion to help you achieve your health goals.
            </p>
            <p className="text-lg">
              Whether you need prescription medications, health advice, or wellness products, we're here to serve you with integrity and excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
