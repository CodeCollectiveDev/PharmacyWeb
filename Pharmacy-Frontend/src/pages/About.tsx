import { useEffect } from "react";
import { ArrowRight, Heart, MapPin, ShieldCheck, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo-tags";
import { business } from "@/config/business";

const About = () => {
  useSEO({
    title: "About Us",
    description: "Learn about Metmma Pharmacy - your trusted community pharmacy serving Lilongwe, Malawi.",
    canonical: `${business.domain}/about`,
    ogTitle: "About Metmma Pharmacy",
    ogDescription: "Learn about Metmma Pharmacy in Lilongwe, Malawi",
    ogUrl: `${business.domain}/about`,
  });

  useEffect(() => {
    // Ensure only this page's JSON-LD exists
    const existing = document.querySelectorAll('script[data-seo="about-org"]');
    existing.forEach((el) => el.remove());
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "about-org");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: business.name,
      url: business.domain,
      address: business.address.physical,
      telephone: business.phone,
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-300 rounded-full -ml-36 -mb-36" />
        </div>
        <div className="container text-center max-w-3xl mx-auto px-4 relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 mb-4">
            Your neighborhood pharmacy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-6 tracking-tight">
            About {business.name}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We’re here to make everyday healthcare feel more approachable, with
            helpful pharmacy services and a caring team ready to listen.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-green-100 to-emerald-50 rotate-2" />
            <img
              src="/images/Pharmacy-shelves.jpg"
              alt="Shelves stocked at Metmma Pharmacy"
              className="relative w-full h-[320px] md:h-[440px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-5 left-4 md:left-8 bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-5 flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-green-600" />
              </span>
              <span>
                <span className="block text-sm font-bold text-gray-900">Care close to home</span>
                <span className="block text-xs text-gray-500">Serving our Lilongwe community</span>
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              <Users className="w-4 h-4" />
              A community-first approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Good health starts with feeling heard.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At {business.name}, we believe a pharmacy should be more than a
              place to collect medicine. It should be a welcoming place to ask
              questions, get practical support, and take the next step toward
              better health.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From prescriptions and basic health checks to medication
              guidance, our team is committed to making care accessible and
              treating every person with patience and respect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-md">
                <NavLink to="/services">
                  Explore our services
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </Button>
              <Button asChild variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                <NavLink to="/contact">Get in touch</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 mb-3">
              What matters to us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Care built around people
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The way we serve is guided by a few simple commitments to every
              person who walks through our doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Compassion first",
                description:
                  "We listen, show understanding, and make every visit feel welcoming.",
              },
              {
                icon: ShieldCheck,
                title: "Clear guidance",
                description:
                  "We help you feel informed about your medicines and the care available to you.",
              },
              {
                icon: Users,
                title: "Community care",
                description:
                  "We work to make trusted pharmacy support more accessible for local families.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-green-600 to-green-500 p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Find us in Lilongwe</h2>
                <p className="text-white/90">{business.address.physical}</p>
              </div>
            </div>
            <Button asChild variant="outline" className="shrink-0 border-white text-black hover:bg-white hover:text-green-700">
              <NavLink to="/contact">Plan your visit</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
