import { createFileRoute } from "@tanstack/react-router";
import { Bath, Droplets, Fan, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { PageShell, photo, whatsappHref } from "@/components/site-page";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms | Suntar Bhavan, Palitana" },
      {
        name: "description",
        content: "Explore AC and non-AC rooms with attached bathrooms at Suntar Bhavan, Palitana.",
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
            <img src={photo(2)} alt="Standard non-air-conditioned room" />
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
            <img src={photo(4)} alt="Deluxe air-conditioned room" />
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
