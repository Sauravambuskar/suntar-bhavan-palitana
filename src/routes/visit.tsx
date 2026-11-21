import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import {
  PageShell,
  emailAddress,
  emailHref,
  mapsEmbedHref,
  mapsHref,
  phoneDisplay,
  phoneHref,
  photo,
  whatsappHref,
} from "@/components/site-page";
import { breadcrumbSchema, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/visit")({
  head: () => ({
    ...seoHead({
      title: "Suntar Bhavan Address & Contact | Palitana",
      description:
        "Find Suntar Bhavan on Hastgiri Road near Taleti, Palitana. Get directions and contact us directly by phone, email or WhatsApp.",
      path: "/visit",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Visit & Contact", path: "/visit" },
          ]),
        ),
      },
    ],
  }),
  component: VisitPage,
});

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
          <img src="/images/suntar-bhavan-mark.png" alt="" width={256} height={280} />
          <p className="section-kicker">Suntar Bhavan</p>
          <h2>At the foot of the sacred hills.</h2>
          <p className="visit-address">
            <MapPin /> Hastgiri Road, Taleti
            <br />
            Palitana, Gujarat 364270
          </p>
          <div className="visit-direct-contact">
            <a href={phoneHref}>
              <Phone />
              <span>
                <small>Phone</small>
                {phoneDisplay}
              </span>
            </a>
            <a href={emailHref}>
              <Mail />
              <span>
                <small>Email</small>
                {emailAddress}
              </span>
            </a>
          </div>
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
        <div className="visit-page-map">
          <iframe
            src={mapsEmbedHref}
            title="Map showing Suntar Bhavan, Hastgiri Road, Taleti, Palitana"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={mapsHref} target="_blank" rel="noreferrer">
            <MapPin /> Open larger map <ArrowRight />
          </a>
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
