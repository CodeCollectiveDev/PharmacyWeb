import { useEffect } from "react";
import { setSEOTags, addStructuredData, SEOConfig, pharmacySchema } from "@/lib/seo";

/**
 * Hook to manage SEO tags on page load
 * Usage: useSEO(seoConfig);
 */
export const useSEO = (config: SEOConfig, includeStructuredData = true) => {
  useEffect(() => {
    // Set meta tags
    setSEOTags(config);

    // Add structured data for pharmacy
    if (includeStructuredData) {
      addStructuredData(pharmacySchema);
    }

    // Scroll to top for better UX
    window.scrollTo(0, 0);
  }, [config, includeStructuredData]);
};
