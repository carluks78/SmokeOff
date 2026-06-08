import { SITE_URL, COMPANY_FULL, PHONE, EMAIL, ADDRESS, LAT, LNG, POSTAL_CODE } from "../lib/seoData";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
        "@id": SITE_URL,
        name: COMPANY_FULL,
        alternateName: "SmokeOff Évreux",
        description:
          "Centre spécialisé en sevrage tabagique au laser auriculaire, auriculothérapie et réflexologie faciale à Évreux (27). Arrêtez de fumer en 1 séance. Forfait Solo 180€ — Forfait Duo 350€.",
        url: SITE_URL,
        telephone: PHONE,
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "34 rue des Alouettes",
          addressLocality: "Évreux",
          addressRegion: "Normandie",
          postalCode: POSTAL_CODE,
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: LAT,
          longitude: LNG,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`,
        areaServed: [
          { "@type": "City", name: "Évreux" },
          { "@type": "City", name: "Louviers" },
          { "@type": "City", name: "Vernon" },
          { "@type": "City", name: "Pacy-sur-Eure" },
          { "@type": "City", name: "Conches-en-Ouche" },
          { "@type": "City", name: "Bernay" },
          { "@type": "City", name: "Val-de-Reuil" },
          { "@type": "City", name: "Gaillon" },
          { "@type": "State", name: "Eure" },
          { "@type": "State", name: "Normandie" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Credit Card, Chèque",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "89",
          bestRating: "5",
        },
        sameAs: [`https://www.smokeoff.fr`],
        image: `${SITE_URL}/og-logo.png`,
        logo: `${SITE_URL}/og-logo.png`,
        founder: { "@type": "Person", name: "SmokeOff" },
      },
      {
        "@type": "Service",
        name: "Sevrage tabagique au laser auriculaire",
        provider: { "@id": SITE_URL },
        description: "Séance de biostimulation laser sur les points auriculaires pour supprimer l'envie de fumer.",
        offers: [
          {
            "@type": "Offer",
            name: "Forfait Solo",
            price: "180",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "Forfait Duo",
            price: "350",
            priceCurrency: "EUR",
          },
        ],
        areaServed: { "@type": "City", name: "Évreux" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "SmokeOff — Sevrage Tabagique Laser Évreux",
        inLanguage: "fr-FR",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
