import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

import { PageShell, photo, whatsappHref } from "@/components/site-page";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Suntar Bhavan | Palitana" },
      {
        name: "description",
        content: "Find Suntar Bhavan on Hastgiri Road, Taleti, Palitana and make a direct enquiry.",
      },
    ],
  }),
  component: VisitPage,
});

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Hastgiri+Road+Taleti+Palitana+Gujarat+364270";

function VisitPage() {
  return (
    <PageShell
      kicker="Plan your stay"
      title="We look forward to welcoming you."
      copy="Find us near Taleti on Hastgiri Road and confirm your stay directly before travelling."
      image={photo(3)}
    >
      <section className="page-section section-shell visit-page-grid">
        <div className="visit-details">
          <img src="/images/suntar-bhavan-mark.png" alt="" />
          <p className="section-kicker">Suntar Bhavan</p>
          <h2>At the foot of the sacred hills.</h2>
          <p className="visit-address">
            <MapPin /> Hastgiri Road, Taleti
            <br />
            Palitana, Gujarat 364270
          </p>
          <div className="visit-page-actions">
            <a href={mapsHref} target="_blank" rel="noreferrer" className="button button-maroon">
              Open Google Maps <ArrowRight />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button button-outline"
            >
              <MessageCircle /> WhatsApp enquiry
            </a>
          </div>
        </div>
        <div className="visit-photo">
          <img src={photo(10)} alt="Suntar Bhavan courtyard" />
        </div>
        <div className="page-safety compact">
          <ShieldCheck />
          <div>
            <strong>Book safely</strong>
            <p>Use only verified contact details and confirm before making any payment.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
