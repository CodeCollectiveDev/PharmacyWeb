import { useEffect } from "react";
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

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600">Explore our pharmacy services.</p>
      </div>
    </div>
  );
};

export default Services;
