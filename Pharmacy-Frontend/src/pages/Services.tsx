import { useEffect } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Clock,
  HeartPulse,
  MessageCircle,
  Pill,
  ShieldCheck,
  Stethoscope,
  TestTubeDiagonal,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo-tags";
import { business } from "@/config/business";

const Services = () => {
  useSEO({
    title: "Our Services",
    description: "Pharmacy services including prescriptions, health advice, and consultations.",
    canonical: `${business.domain}/services`,
    ogTitle: "Pharmacy Services - Metmma Pharmacy",
    ogDescription: "Comprehensive pharmacy services in Lilongwe, Malawi",
    ogUrl: `${business.domain}/services`,
  });

  useEffect(() => {
    const existing = document.querySelectorAll('script[data-seo="services"]');
    existing.forEach((el) => el.remove());
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "services");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: business.name,
      url: business.domain,
      address: business.address.physical,
      telephone: business.phone,
      openingHours: ["Mo-Sa 08:00-17:00", "Su 08:00-14:00"],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  const services = [
    {
      icon: Pill,
      title: "Prescription fills & refills",
      description:
        "Get help with filling a prescription or planning a refill. Bring your current prescription and our pharmacy team can guide you through the next steps.",
      image: "/images/PrescriptionServices.jpg",
      imageAlt: "Prescription service at a pharmacy",
      points: ["Prescription support", "Refill guidance", "Convenient pharmacy pickup"],
    },
    {
      icon: HeartPulse,
      title: "Health screenings",
      description:
        "Keep an eye on everyday health with basic checks in a welcoming setting. Our screenings include blood pressure and weight checks.",
      image: "/images/HealthConsultaion.jpg",
      imageAlt: "A health consultation with a care provider",
      points: ["Blood pressure checks", "Weight checks", "Friendly, practical support"],
    },
    {
      icon: TestTubeDiagonal,
      title: "Basic medical tests",
      description:
        "Access basic lab testing, including malaria testing. Contact us or visit to ask about available testing and what to expect.",
      image: "/images/Pharmacy-shelves.jpg",
      imageAlt: "Healthcare products at Metmma Pharmacy",
      points: ["Basic lab tests", "Malaria testing", "Ask our team about availability"],
    },
    {
      icon: Stethoscope,
      title: "Medication counseling",
      description:
        "Have a question about your medication? Speak with our pharmacy team for guidance on safe and effective use.",
      image: "/images/HealthConsultaion.jpg",
      imageAlt: "A patient speaking with a healthcare provider",
      points: ["Medication-use guidance", "Answers to your questions", "Support for your care"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-300 rounded-full -ml-36 -mb-36" />
        </div>
        <div className="container text-center max-w-3xl mx-auto px-4 relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 mb-4">
            Here to support your wellbeing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Pharmacy services for your everyday health
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            From prescriptions to basic health checks, find friendly support
            for you and your family at {business.name}.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 mb-4">
              <ShieldCheck className="w-4 h-4" />
              Care you can feel good about
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              How we can help
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Visit us in Nanjiri or get in touch with a question about the
              services available at our pharmacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-5 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-5">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-gray-700">
                        <ClipboardCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 mb-3">
                Stop by or reach out
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Your health questions are welcome.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Not sure which service is right for you? Our team is happy to
                help you understand the options available at the pharmacy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 space-y-5">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-700" />
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Opening hours</h3>
                  <p className="text-sm text-gray-600">{business.hours.weekday}</p>
                  <p className="text-sm text-gray-600">{business.hours.weekend}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold">
                  <NavLink to="/contact">
                    Contact our team
                    <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </Button>
                <Button asChild variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  <a href={`tel:${business.phone.replace(/\s/g, "")}`}>
                    <MessageCircle className="w-4 h-4" />
                    Call {business.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
