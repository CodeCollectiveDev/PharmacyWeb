import { useEffect } from "react";
import { useSEO } from "@/hooks/use-seo-tags";
import { business } from "@/config/business";

const ContactSeo = () => {
  useSEO({
    title: "Contact Us",
    description: "Get in touch with Metmma Pharmacy. Call, email, or visit us in Lilongwe, Malawi.",
    canonical: `${business.domain}/contact`,
    ogTitle: "Contact Metmma Pharmacy",
    ogDescription: "Contact details for Metmma Pharmacy in Lilongwe, Malawi",
    ogUrl: `${business.domain}/contact`,
  });

  useEffect(() => {
    const existing = document.querySelectorAll('script[data-seo="contact"]');
    existing.forEach((el) => el.remove());
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "contact");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      url: `${business.domain}/contact`,
      mainEntity: {
        "@type": "Organization",
        name: business.name,
        telephone: business.phone,
        email: business.email.primary,
      },
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return null;
};

export default ContactSeo;
