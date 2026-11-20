import { createFileRoute } from "@tanstack/react-router";
import { Clock3, HeartHandshake, Leaf, UtensilsCrossed } from "lucide-react";

import { PageShell, photo } from "@/components/site-page";

export const Route = createFileRoute("/bhojanshala")({
  head: () => ({
    meta: [
      { title: "Jain Bhojanshala | Suntar Bhavan" },
      {
        name: "description",
        content: "Fresh satvik Jain meals served at fixed timings at Suntar Bhavan, Palitana.",
      },
    ],
  }),
  component: BhojanshalaPage,
});

const meals = [
  ["Navkarshi", "Up to 9:15 AM"],
  ["Lunch", "12:00 PM – 1:15 PM"],
  ["Chovihar", "5:00 PM – sunset"],
];

function BhojanshalaPage() {
  return (
    <PageShell
      kicker="Pure Jain meals"
      title="Fresh, satvik food at the right time."
      copy="Simple meals prepared and served with care, following Jain traditions and yatra timings."
      image={photo(6)}
    >
      <section className="page-section section-shell">
        <div className="page-intro">
          <p className="section-kicker">Meal timings</p>
          <h2>Nourishment that respects your routine.</h2>
          <p>
            Meals are served at set times for a nominal per-plate contribution. Please check current
            availability when you arrive.
          </p>
        </div>
        <div className="meal-page-grid">
          {meals.map(([name, time]) => (
            <article key={name}>
              <Clock3 />
              <span>{name}</span>
              <strong>{time}</strong>
            </article>
          ))}
        </div>
        <div className="food-values">
          <article>
            <Leaf />
            <h3>Satvik preparation</h3>
            <p>Food prepared in keeping with Jain dietary principles.</p>
          </article>
          <article>
            <UtensilsCrossed />
            <h3>Freshly served</h3>
            <p>Simple meals offered at clear, fixed timings.</p>
          </article>
          <article>
            <HeartHandshake />
            <h3>Seva at heart</h3>
            <p>A welcoming dining space for yatris and families.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
