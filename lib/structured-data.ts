import { vehicles } from "@/data/vehicles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://twain.no";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Twain AS",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Premium bilutleie i Oslo. Lei Tesla eller varebil enkelt via Getaround.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oslo",
      addressCountry: "NO",
    },
    sameAs: [],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Twain AS",
    description: "Premium bilutleie i Oslo. Lei Tesla eller varebil enkelt via Getaround. Fullt digitalt, null stress.",
    url: SITE_URL,
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oslo",
      addressRegion: "Oslo",
      addressCountry: "NO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.9139,
      longitude: 10.7522,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Oslo",
    },
  };
}

export function getVehicleListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tilgjengelige biler hos Twain AS",
    description: "Våre biler tilgjengelig for utleie via Getaround",
    numberOfItems: vehicles.length,
    itemListElement: vehicles.map((vehicle, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Car",
        "@id": `${SITE_URL}/#${vehicle.id}`,
        name: vehicle.name,
        description: vehicle.description,
        vehicleConfiguration: vehicle.type,
        fuelType: vehicle.category === "electric" ? "Electric" : "Gasoline",
        seatingCapacity: vehicle.specs.seats,
        offers: {
          "@type": "Offer",
          url: vehicle.getaroundUrl,
          priceCurrency: "NOK",
          availability: vehicle.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        },
      },
    })),
  };
}

export function getBlogPostSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author || "Twain AS",
    },
    publisher: {
      "@type": "Organization",
      name: "Twain AS",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Twain AS",
    url: SITE_URL,
    description: "Premium bilutleie i Oslo via Getaround",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
