"use client";

import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jgcsol.com"
      }
    ];

    if (pathname === "/") {
      return [breadcrumbs[0]];
    }

    const pathSegments = pathname.split("/").filter(Boolean);
    let currentPath = "";

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const capitalizedName = segment.charAt(0).toUpperCase() + segment.slice(1);

      breadcrumbs.push({
        "@type": "ListItem",
        position: index + 2,
        name: capitalizedName,
        item: `https://jgcsol.com${currentPath}`
      });
    });

    return breadcrumbs;
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": "https://jgcsol.com/#breadcrumbs",
    itemListElement: getBreadcrumbs()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
