import { createFileRoute } from "@tanstack/react-router";

import { PageShell, photo } from "@/components/site-page";
import { breadcrumbSchema, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    ...seoHead({
      title: "Suntar Bhavan Photos | Rooms & Facilities, Palitana",
      description:
        "See photos of Suntar Bhavan rooms, courtyard, Jain Bhojanshala and gathering spaces before planning your stay in Palitana.",
      path: "/gallery",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
        ),
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const imageDescriptions = [
    "Suntar Bhavan courtyard and gathering space",
    "Standard non-air-conditioned guest room",
    "Deluxe air-conditioned guest room",
    "Jain Bhojanshala dining area",
    "Indoor common area at Suntar Bhavan",
    "Pilgrim gathering space at Suntar Bhavan",
    "Suntar Bhavan exterior and entrance",
    "Indoor seating area for guests",
    "Open courtyard at Suntar Bhavan",
  ];

  return (
    <PageShell
      kicker="See the property"
      title="Spaces prepared with care."
      copy="Take a closer look at the rooms, courtyards and gathering areas that welcome our yatris."
      image={photo(7)}
    >
      <section className="page-section gallery-page section-shell">
        {[10, 2, 4, 6, 8, 9, 1, 5, 7].map((number, index) => (
          <figure key={number} className={index === 0 || index === 5 ? "wide" : ""}>
            <img
              src={photo(number)}
              alt={imageDescriptions[index]}
              width={number === 1 ? 829 : number === 10 ? 927 : 1280}
              height={
                number === 1 ? 758 : number === 10 ? 772 : [2, 6, 9].includes(number) ? 960 : 853
              }
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </section>
    </PageShell>
  );
}
