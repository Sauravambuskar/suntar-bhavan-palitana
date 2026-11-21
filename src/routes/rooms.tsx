import { createFileRoute } from "@tanstack/react-router";
import { Bath, Droplets, Fan, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { PageShell, photo, whatsappHref } from "@/components/site-page";
import { breadcrumbSchema, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    ...seoHead({
      title: "AC & Non-AC Rooms in Palitana | Suntar Bhavan",
      description:
        "Explore clean AC and non-AC rooms with attached bathrooms and hot and cold water at Suntar Bhavan Jain dharamshala in Palitana.",
      path: "/rooms",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Rooms", path: "/rooms" },
          ]),
        ),
      },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <PageShell
      kicker="Stay comfortably"
      title="Rooms prepared for rest and reflection."
      copy="Clean, practical accommodation for individuals, families and sanghs visiting Palitana."
      image={photo(2)}
    >
      <section className="page-section section-shell">
        <div className="page-intro">
          <p className="section-kicker">Choose your stay</p>
          <h2>Simple comfort, thoughtfully maintained.</h2>
          <p>
            Both room categories include private attached bathrooms and access to hot and cold
            water. Choose the option that best suits your yatra.
          </p>
        </div>
        <div className="page-room-grid">
          <article>
            <img
              src={photo(2)}
              alt="Standard non-air-conditioned room at Suntar Bhavan"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>Simple & airy</span>
              <h3>Standard room</h3>
              <p>A clean non-AC room for a comfortable and affordable stay.</p>
              <ul>
                <li>
                  <Fan /> Non-AC
                </li>
                <li>
                  <Bath /> Attached bathroom
                </li>
                <li>
                  <Droplets /> Hot & cold water
                </li>
              </ul>
            </div>
          </article>
          <article>
            <img
              src={photo(4)}
              alt="Deluxe air-conditioned room at Suntar Bhavan"
              width={1280}
              height={853}
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>Cool & restful</span>
              <h3>Deluxe room</h3>
              <p>Air-conditioned comfort for families and guests who prefer a cooler room.</p>
              <ul>
                <li>
                  <Sparkles /> Air-conditioned
                </li>
                <li>
                  <Bath /> Attached bathroom
                </li>
                <li>
                  <Droplets /> Hot & cold water
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div className="page-safety">
          <ShieldCheck />
          <div>
            <strong>Make a safe, direct enquiry</strong>
            <p>
              Confirm availability directly with Suntar Bhavan. Do not send advance payments to
              unverified numbers.
            </p>
          </div>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-maroon">
            <MessageCircle /> Enquire now
          </a>
        </div>
      </section>
    </PageShell>
  );
}
