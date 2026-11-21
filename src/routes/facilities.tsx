import { createFileRoute } from "@tanstack/react-router";
import {
  Bath,
  BedDouble,
  Car,
  Droplets,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";

import { PageShell, photo } from "@/components/site-page";
import { breadcrumbSchema, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    ...seoHead({
      title: "Dharamshala Facilities in Palitana | Suntar Bhavan",
      description:
        "View Suntar Bhavan facilities: AC and non-AC rooms, Jain Bhojanshala, temple, free parking, attached bathrooms and 24-hour water.",
      path: "/facilities",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Facilities", path: "/facilities" },
          ]),
        ),
      },
    ],
  }),
  component: FacilitiesPage,
});

const items = [
  [BedDouble, "AC & non-AC rooms", "Comfortable accommodation choices for every yatri."],
  [Bath, "Attached bathrooms", "Private, clean and practical facilities."],
  [Droplets, "24-hour water", "Hot and cold water access throughout your stay."],
  [UtensilsCrossed, "Jain Bhojanshala", "Fresh satvik meals at scheduled timings."],
  [Landmark, "Temple", "A peaceful place for prayer and reflection."],
  [Car, "Free parking", "Convenient access for families and sanghs."],
  [HeartHandshake, "Luggage assistance", "Helpful support when you arrive and depart."],
  [ShieldCheck, "Peaceful environment", "A respectful setting centered around the yatra."],
] as const;

function FacilitiesPage() {
  return (
    <PageShell
      kicker="Pilgrim-first details"
      title="Everything needed for an easier yatra."
      copy="Useful facilities, warm assistance and calm shared spaces—all in one welcoming place."
      image={photo(5)}
    >
      <section className="page-section section-shell">
        <div className="page-intro centered">
          <p className="section-kicker">At your service</p>
          <h2>Practical care without unnecessary fuss.</h2>
        </div>
        <div className="page-facility-grid">
          {items.map(([Icon, title, text]) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
