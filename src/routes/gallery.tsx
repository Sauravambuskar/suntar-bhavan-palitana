import { createFileRoute } from "@tanstack/react-router";

import { PageShell, photo } from "@/components/site-page";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Suntar Bhavan" },
      {
        name: "description",
        content: "Explore rooms, courtyards and gathering spaces at Suntar Bhavan, Palitana.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
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
            <img src={photo(number)} alt={`Suntar Bhavan view ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </section>
    </PageShell>
  );
}
