import { ArrowLeft, ArrowRight, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export const photo = (number: number) => `/images/suntar-photo-${number}.jpg`;
export const whatsappHref =
  "https://wa.me/917379349473?text=Jai%20Jinendra%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay%20at%20Suntar%20Bhavan%2C%20Palitana.";
export const phoneDisplay = "+91 73793 49473";
export const phoneHref = "tel:+917379349473";
export const emailAddress = "sk6539985@gmail.com";
export const emailHref = "mailto:sk6539985@gmail.com";
export const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Hastgiri+Road+Taleti+Palitana+Gujarat+364270";
export const mapsEmbedHref =
  "https://www.google.com/maps?q=Hastgiri+Road%2C+Taleti%2C+Palitana%2C+Gujarat+364270&output=embed";

const links = [
  ["Home", "/"],
  ["Stay", "/rooms"],
  ["Bhojanshala", "/bhojanshala"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["Visit", "/visit"],
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="brand" aria-label="Suntar Bhavan home">
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

function PageHeader() {
  const [open, setOpen] = useState(false);

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
        {links.slice(1).map(([label, href]) => (
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
        <div className="mobile-contact-links">
          <a href={phoneHref}>
            <Phone /> {phoneDisplay}
          </a>
          <a href={emailHref}>
            <Mail /> {emailAddress}
          </a>
        </div>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
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
  );
}

export function ContactRail() {
  return (
    <aside className="contact-rail" aria-label="Quick contact">
      <a href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
        <Phone />
        <span>
          <small>Call us</small>
          {phoneDisplay}
        </span>
      </a>
      <a href={emailHref} aria-label={`Email ${emailAddress}`}>
        <Mail />
        <span>
          <small>Email</small>
          {emailAddress}
        </span>
      </a>
      <a href={mapsHref} target="_blank" rel="noreferrer" aria-label="Open address in Google Maps">
        <MapPin />
        <span>
          <small>Location</small>Taleti, Palitana
        </span>
      </a>
    </aside>
  );
}

export function PageShell({
  kicker,
  title,
  copy,
  image,
  children,
}: {
  kicker: string;
  title: string;
  copy: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <main className="inner-page">
      <PageHeader />
      <section className="page-hero">
        <img src={image} alt="" width={1280} height={853} fetchPriority="high" decoding="async" />
        <div className="page-hero-shade" />
        <div className="page-hero-content section-shell">
          <a href="/" className="page-back">
            <ArrowLeft /> Back home
          </a>
          <p className="section-kicker light">{kicker}</p>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
      </section>
      {children}
      <PageFooter />
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
