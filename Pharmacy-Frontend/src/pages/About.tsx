import { Users, Heart, Stethoscope, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Your health and well-being always come first. We listen and personalize our services.",
      color: "from-red-100 to-red-50",
      textColor: "text-red-600",
      accentColor: "bg-red-100",
    },
    {
      icon: Stethoscope,
      title: "Professional Expertise",
      description:
        "Our licensed pharmacists are always available to provide trusted medical advice.",
      color: "from-green-100 to-green-50",
      textColor: "text-green-600",
      accentColor: "bg-green-100",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Serving Nanjiri and surrounding areas with compassion and dedication.",
      color: "from-blue-100 to-blue-50",
      textColor: "text-blue-600",
      accentColor: "bg-blue-100",
    },
    {
      icon: Award,
      title: "Quality & Safety",
      description:
        "We ensure every prescription and product meets strict safety standards.",
      color: "from-purple-100 to-purple-50",
      textColor: "text-purple-600",
      accentColor: "bg-purple-100",
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
            About Metmma Pharmacy
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your trusted partner in health and wellness, providing compassionate, reliable, and professional care in our community.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-6 tracking-tight">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Founded with a vision to make healthcare more accessible and reliable, Metmma Pharmacy has been serving the Nanjiri community with dedication. Our mission is to provide patient-centered care while fostering a culture of compassion and innovation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From humble beginnings to a fully stocked, modern pharmacy, we continue to grow while maintaining our motto:
                <span className="font-semibold text-blue-600 block mt-2">
                  "To serve customers with courtesy."
                </span>
              </p>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-green-50 to-green-100 h-80 rounded-2xl flex items-center justify-center shadow-lg border border-green-200/50 group hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-700 font-semibold">Serving Our Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container text-center px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These values guide every decision we make and every service we provide to our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${val.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <val.icon className={`w-8 h-8 ${val.textColor}`} />
                </div>
                <CardTitle className="text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{val.title}</CardTitle>
                <CardContent className="text-gray-600 text-sm leading-relaxed p-0">
                  {val.description}
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
