import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Bath,
  BedDouble,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Droplets,
  Fan,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  ContactRail,
  emailAddress,
  emailHref,
  mapsEmbedHref,
  mapsHref,
  phoneDisplay,
  phoneHref,
  whatsappHref,
} from "@/components/site-page";
import { seoHead, siteUrl } from "@/lib/seo";

const photo = (number: number) => `/images/suntar-photo-${number}.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    ...seoHead({
      title: "Jain Dharamshala in Palitana | Suntar Bhavan",
      description:
        "Peaceful Jain dharamshala near Taleti, Palitana with AC and non-AC rooms, Jain Bhojanshala, temple, parking and direct booking assistance.",
      path: "/",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LodgingBusiness", "LocalBusiness"],
              "@id": `${siteUrl}/#lodging`,
              name: "Suntar Bhavan",
              url: siteUrl,
              image: `${siteUrl}/images/suntar-photo-3.jpg`,
              logo: `${siteUrl}/images/suntar-bhavan-mark.png`,
              description:
                "A peaceful Jain dharamshala offering rooms, Jain meals and pilgrim-friendly facilities near Taleti in Palitana.",
              foundingDate: "2021",
              telephone: "+91-92824-52502",
              email: "sk6539985@gmail.com",
              priceRange: "₹",
              currenciesAccepted: "INR",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hastgiri Road, Taleti",
                addressLocality: "Palitana",
                addressRegion: "Gujarat",
                postalCode: "364270",
                addressCountry: "IN",
              },
              amenityFeature: [
                "AC and non-AC rooms",
                "Attached bathrooms",
                "Jain Bhojanshala",
                "Temple",
                "Free parking",
                "Hot and cold water",
              ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-92824-52502",
                contactType: "reservations",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
            },
            {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              url: siteUrl,
              name: "Suntar Bhavan",
              inLanguage: "en-IN",
              publisher: { "@id": `${siteUrl}/#lodging` },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const slides = [
  {
    src: photo(3),
    title: "A peaceful beginning to your Palitana yatra.",
    copy: "Clean rooms, Jain bhojan and heartfelt seva at the foot of Shatrunjaya.",
  },
  {
    src: photo(1),
    title: "Rest well. Rise ready for darshan.",
    copy: "A calm, pilgrim-first stay on Hastgiri Road, close to Taleti.",
  },
  {
    src: photo(7),
    title: "Space for sangh, family and celebration.",
    copy: "Welcoming courtyards and halls for moments shared together.",
  },
  {
    src: photo(5),
    title: "Simple comforts, thoughtfully cared for.",
    copy: "Indoor seating, luggage assistance and warm hospitality throughout your stay.",
  },
];

const services = [
  { icon: BedDouble, title: "AC & non-AC rooms", text: "Comfortable options for every yatri." },
  { icon: Bath, title: "Attached bathrooms", text: "Clean, private and convenient." },
  { icon: Droplets, title: "24-hour water", text: "Hot and cold water available." },
  { icon: UtensilsCrossed, title: "Jain Bhojanshala", text: "Fresh meals at fixed timings." },
  { icon: Landmark, title: "Temple", text: "A quiet space for prayer and reflection." },
  { icon: Car, title: "Free parking", text: "Easy access for families and sanghs." },
  { icon: HeartHandshake, title: "Luggage assistance", text: "Helpful support when you arrive." },
  { icon: ShieldCheck, title: "Safe & peaceful", text: "A respectful pilgrim environment." },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="brand" aria-label="Suntar Bhavan home">
      <img
        src="/images/suntar-bhavan-mark.png"
        alt=""
        className="brand-mark"
        width={256}
        height={280}
      />
      <span>
        <strong className={light ? "text-white" : "text-maroon"}>Suntar Bhavan</strong>
        <small className={light ? "text-white/70" : "text-muted-foreground"}>
          Palitana · Since 2021
        </small>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Stay", "/rooms"],
    ["Bhojanshala", "/bhojanshala"],
    ["Facilities", "/facilities"],
    ["Gallery", "/gallery"],
    ["Visit", "/visit"],
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a href={whatsappHref} target="_blank" rel="noreferrer" className="header-cta">
        <MessageCircle size={18} /> Enquire
      </a>
      <button
        className="menu-button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
      >
        <Menu />
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-head">
          <Brand light />
          <button onClick={() => setOpen(false)} aria-label="Close navigation">
            <X />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {label}
              <ArrowRight />
            </a>
          ))}
        </nav>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="mobile-whatsapp">
          <MessageCircle /> WhatsApp enquiry
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);
  const go = (next: number) => setActive((next + slides.length) % slides.length);

  return (
    <section id="home" className="hero" aria-roledescription="carousel">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt=""
          className={`hero-image ${index === active ? "is-active" : ""}`}
          aria-hidden={index !== active}
          width={1280}
          height={index === 0 ? 622 : index === 1 ? 758 : 853}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "low"}
          decoding="async"
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content" key={active}>
        <p className="hero-kicker">
          <Sparkles size={16} /> સુનતર ભવન · પાલીતાણા
        </p>
        <h1>Jain Dharamshala in Palitana for a peaceful yatra.</h1>
        <p className="hero-copy">
          {slides[active].title} {slides[active].copy}
        </p>
        <div className="hero-actions">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-gold">
            <MessageCircle size={19} /> Enquire on WhatsApp
          </a>
          <a href="/rooms" className="button button-ghost">
            Explore the stay <ArrowDown size={18} />
          </a>
        </div>
      </div>
      <div className="slider-controls">
        <button onClick={() => go(active - 1)} aria-label="Previous image">
          <ChevronLeft />
        </button>
        <span>
          <strong>0{active + 1}</strong> / 0{slides.length}
        </span>
        <button onClick={() => go(active + 1)} aria-label="Next image">
          <ChevronRight />
        </button>
      </div>
      <div className="hero-location">
        <MapPin size={18} /> Hastgiri Road, Taleti, Palitana
      </div>
    </section>
  );
}

const welcomeImages = [
  { src: photo(10), alt: "Suntar Bhavan courtyard in Palitana" },
  { src: photo(7), alt: "Suntar Bhavan gathering courtyard" },
  { src: photo(1), alt: "Suntar Bhavan exterior and entrance" },
];

function WelcomeCarousel() {
  const [active, setActive] = useState(0);
  const dragStart = useRef<number | null>(null);
  const go = (next: number) => setActive((next + welcomeImages.length) % welcomeImages.length);

  return (
    <div className="welcome-visual">
      <div
        className="welcome-slider"
        onPointerDown={(event) => {
          dragStart.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => {
          if (dragStart.current === null) return;
          const distance = event.clientX - dragStart.current;
          if (Math.abs(distance) > 45) go(active + (distance < 0 ? 1 : -1));
          dragStart.current = null;
        }}
        onPointerCancel={() => {
          dragStart.current = null;
        }}
        aria-roledescription="carousel"
        aria-label="Suntar Bhavan property photos"
      >
        <div
          className="welcome-slider-track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {welcomeImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              draggable={false}
              aria-hidden={index !== active}
              width={index === 0 ? 927 : index === 1 ? 1280 : 829}
              height={index === 0 ? 772 : index === 1 ? 853 : 758}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
        <div className="welcome-slider-controls">
          <button onClick={() => go(active - 1)} aria-label="Previous property image">
            <ChevronLeft />
          </button>
          <div className="welcome-slider-dots">
            {welcomeImages.map((image, index) => (
              <button
                key={image.src}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show property image ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
              />
            ))}
          </div>
          <button onClick={() => go(active + 1)} aria-label="Next property image">
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="since-card">
        <strong>2021</strong>
        <span>
          Welcoming yatris
          <br />
          in Palitana
        </span>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="welcome-section">
        <div className="welcome section-shell">
          <div className="welcome-copy">
            <p className="section-kicker">Jai Jinendra</p>
            <h2>A home for pilgrims, close to the sacred hills.</h2>
            <p>
              Established in 2021, Suntar Bhavan offers a clean, peaceful and affordable stay for
              yatris visiting Palitana. From Navkarshi to Chovihar, every detail is kept simple so
              your attention can stay on the yatra.
            </p>
            <div className="welcome-signoff">
              <img src="/images/suntar-bhavan-mark.png" alt="" width={256} height={280} />
              <span>
                <strong>Seva with warmth</strong>
                <small>For every yatri, every day</small>
              </span>
            </div>
          </div>
          <WelcomeCarousel />
        </div>
      </section>

      <section id="rooms" className="rooms-section">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">Rest comfortably</p>
              <h2>Rooms made for a peaceful pause.</h2>
            </div>
            <p>
              Clean, practical accommodation with attached bathrooms and the essentials a pilgrim
              needs.
            </p>
          </div>
          <div className="room-grid">
            <article className="room-card">
              <img
                src={photo(2)}
                alt="Standard non-AC room at Suntar Bhavan"
                width={1280}
                height={960}
                loading="lazy"
                decoding="async"
              />
              <div className="room-info">
                <div>
                  <span>Simple & airy</span>
                  <h3>Standard room</h3>
                </div>
                <ul>
                  <li>
                    <Fan /> Non-AC
                  </li>
                  <li>
                    <Bath /> Attached bath
                  </li>
                </ul>
              </div>
            </article>
            <article className="room-card room-card-offset">
              <img
                src={photo(4)}
                alt="Deluxe air-conditioned room at Suntar Bhavan"
                width={1280}
                height={853}
                loading="lazy"
                decoding="async"
              />
              <div className="room-info">
                <div>
                  <span>Cool & comfortable</span>
                  <h3>Deluxe room</h3>
                </div>
                <ul>
                  <li>
                    <Sparkles /> Air-conditioned
                  </li>
                  <li>
                    <Bath /> Attached bath
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div className="direct-note">
            <ShieldCheck />
            <span>
              <strong>Book directly and safely.</strong> Beware of unverified numbers requesting
              advance payment.
            </span>
          </div>
        </div>
      </section>

      <section id="bhojanshala" className="dining-section">
        <div className="dining-image">
          <img
            src={photo(6)}
            alt="Jain Bhojanshala dining area at Suntar Bhavan"
            width={1280}
            height={960}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="dining-content">
          <p className="section-kicker light">Jain Bhojanshala</p>
          <h2>Fresh, satvik meals at the right time.</h2>
          <p>Simple Jain food is served at fixed timings for a nominal per-plate contribution.</p>
          <div className="meal-times">
            <div>
              <Clock3 />
              <span>
                Navkarshi<small>Up to 9:15 AM</small>
              </span>
            </div>
            <div>
              <Clock3 />
              <span>
                Lunch<small>12:00 – 1:15 PM</small>
              </span>
            </div>
            <div>
              <Clock3 />
              <span>
                Chovihar<small>5:00 PM – sunset</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="facilities" className="facilities section-shell">
        <div className="section-heading centered">
          <p className="section-kicker">Everything that matters</p>
          <h2>Thoughtful facilities for an easier yatra.</h2>
        </div>
        <div className="facility-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-shell gallery-heading">
          <div>
            <p className="section-kicker">A closer look</p>
            <h2>See Suntar Bhavan.</h2>
          </div>
          <p>Rooms, gathering spaces and quiet corners prepared with care.</p>
        </div>
        <div className="gallery-grid">
          {[7, 8, 9, 5, 1].map((number, index) => (
            <figure key={number} className={`gallery-item gallery-item-${index + 1}`}>
              <img
                src={photo(number)}
                alt={`Suntar Bhavan property view ${index + 1}`}
                loading="lazy"
                width={number === 1 ? 829 : 1280}
                height={number === 1 ? 758 : number === 9 ? 960 : 853}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </section>

      <section id="visit" className="visit-section">
        <div className="visit-layout section-shell">
          <div className="visit-map-card">
            <iframe
              src={mapsEmbedHref}
              title="Map showing Suntar Bhavan, Hastgiri Road, Taleti, Palitana"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={mapsHref} target="_blank" rel="noreferrer">
              <MapPin /> Open full map <ArrowRight />
            </a>
          </div>
          <div className="visit-card">
            <img
              src="/images/suntar-bhavan-mark.png"
              alt=""
              width={256}
              height={280}
              loading="lazy"
            />
            <p className="section-kicker">Plan your stay</p>
            <h2>We look forward to welcoming you.</h2>
            <p className="address">
              <MapPin /> Hastgiri Road, Taleti,
              <br />
              Palitana, Gujarat 364270
            </p>
            <div className="visit-contact-list">
              <a href={phoneHref}>
                <Phone />{" "}
                <span>
                  <small>Call us</small>
                  {phoneDisplay}
                </span>
              </a>
              <a href={emailHref}>
                <Mail />{" "}
                <span>
                  <small>Email us</small>
                  {emailAddress}
                </span>
              </a>
            </div>
            <div className="visit-actions">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button button-maroon"
              >
                <MessageCircle /> WhatsApp enquiry
              </a>
              <a href="/visit" className="text-link">
                View contact page <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main section-shell">
          <div>
            <Brand light />
            <p>A peaceful Jain stay near the sacred Shatrunjaya hills.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="/rooms">Rooms</a>
            <a href="/bhojanshala">Bhojanshala</a>
            <a href="/facilities">Facilities</a>
            <a href="/gallery">Gallery</a>
          </div>
          <div>
            <h3>Visit</h3>
            <p>
              Hastgiri Road, Taleti
              <br />
              Palitana, Gujarat 364270
            </p>
            <a href="/visit">Directions and details</a>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <a href={phoneHref}>
              <Phone /> <span>{phoneDisplay}</span>
            </a>
            <a href={emailHref}>
              <Mail /> <span>{emailAddress}</span>
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle /> <span>WhatsApp enquiry</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span>© {new Date().getFullYear()} Suntar Bhavan, Palitana</span>
          <span>Jai Jinendra</span>
        </div>
      </footer>

      <ContactRail />
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle />
        <span>WhatsApp</span>
      </a>
    </main>
  );
}
