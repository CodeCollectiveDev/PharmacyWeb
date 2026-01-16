import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

/**
 * Generate breadcrumb items from URL path
 */
const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" },
  ];

  if (pathname === "/") return breadcrumbs;

  const segments = pathname.split("/").filter((s) => s);

  segments.forEach((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    breadcrumbs.push({ label, path });
  });

  return breadcrumbs;
};

export const BreadcrumbNav = () => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  // Don't show breadcrumbs on homepage
  if (breadcrumbs.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 border-b border-gray-200 px-4 py-3"
    >
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 flex-wrap">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={breadcrumb.path} className="flex items-center">
                {index === 0 ? (
                  <Link
                    to={breadcrumb.path}
                    className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium transition-colors"
                    aria-label="Home"
                  >
                    <Home className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    to={breadcrumb.path}
                    className={`${
                      isLast
                        ? "text-gray-700 font-semibold"
                        : "text-green-600 hover:text-green-700 font-medium transition-colors"
                    }`}
                  >
                    {breadcrumb.label}
                  </Link>
                )}

                {!isLast && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `${window.location.origin}${item.path}`,
          })),
        })}
      </script>
    </nav>
  );
};
