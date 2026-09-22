/**
 * SEO Utility Functions
 * Manages dynamic meta tags and structured data for SEO
 */

import { businessDetails } from "@/lib/businessDetails";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "business";
  author?: string;
}

/**
 * Update document title and meta tags
 */
export const setSEOTags = (config: SEOConfig) => {
  // Set page title
  document.title = config.title;

  // Update or create meta tags
  updateMetaTag("name", "description", config.description);
  
  if (config.keywords && config.keywords.length > 0) {
    updateMetaTag("name", "keywords", config.keywords.join(", "));
  }

  if (config.author) {
    updateMetaTag("name", "author", config.author);
  }

  // Open Graph tags
  updateMetaTag("property", "og:title", config.title);
  updateMetaTag("property", "og:description", config.description);
  updateMetaTag("property", "og:type", config.type || "website");

  if (config.image) {
    updateMetaTag("property", "og:image", config.image);
  }

  if (config.url) {
    updateMetaTag("property", "og:url", config.url);
  }

  // Twitter Card tags
  updateMetaTag("name", "twitter:title", config.title);
  updateMetaTag("name", "twitter:description", config.description);
  updateMetaTag("name", "twitter:card", "summary_large_image");

  if (config.image) {
    updateMetaTag("name", "twitter:image", config.image);
  }
};

/**
 * Helper to update or create meta tags
 */
const updateMetaTag = (
  attribute: "name" | "property",
  attributeName: string,
  content: string
) => {
  let tag = document.querySelector(
    `meta[${attribute}="${attributeName}"]`
  ) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, attributeName);
    document.head.appendChild(tag);
  }

  tag.content = content;
};

/**
 * Add structured data (JSON-LD) for rich snippets
 */
export const addStructuredData = (data: Record<string, any>) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Pharmacy structured data schema
 */
export const pharmacySchema = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  name: businessDetails.name,
  description: "Medication and health service information from Metmma Pharmacy.",
  url: businessDetails.website,
  telephone: businessDetails.phoneDisplay,
  email: businessDetails.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessDetails.visitingAddress,
    postOfficeBoxNumber: businessDetails.postalBox,
    addressLocality: "Lilongwe",
    addressCountry: "MW",
  },
  image: `${businessDetails.website}/logo.png`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: businessDetails.hours.weekdayOpen,
      closes: businessDetails.hours.weekdayClose,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: businessDetails.hours.sundayOpen,
      closes: businessDetails.hours.sundayClose,
    },
  ],
};

/**
 * Default SEO config for homepage
 */
export const defaultSEO: SEOConfig = {
  title: "Metmma Pharmacy",
  description:
    "Contact Metmma Pharmacy for medication and health service information.",
  keywords: [
    "pharmacy",
    "prescription refills",
    "health screenings",
    "medication counseling",
    "community pharmacy",
    "pharmacy services",
    "Lilongwe pharmacy",
    "pharmacy near me",
    "pharmacist consultation",
    "Malawi pharmacy",
  ],
  image: `${businessDetails.website}/og-image.jpg`,
  author: "Metmma Pharmacy",
  type: "business",
};
