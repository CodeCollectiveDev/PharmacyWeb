import { useEffect } from "react";
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600">Learn about our pharmacy and services.</p>
      </div>
    </div>
  );
};

export default About;
