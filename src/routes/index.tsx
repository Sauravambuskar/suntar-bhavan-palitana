import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import p1 from "@/assets/photo-1.png.asset.json";
import p2 from "@/assets/photo-2.png.asset.json";
import p3 from "@/assets/photo-3.png.asset.json";
import p4 from "@/assets/photo-4.png.asset.json";
import p5 from "@/assets/photo-5.png.asset.json";
import p6 from "@/assets/photo-6.png.asset.json";
import p7 from "@/assets/photo-7.png.asset.json";
import p8 from "@/assets/photo-8.png.asset.json";
import p9 from "@/assets/photo-9.png.asset.json";
import p10 from "@/assets/photo-10.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suntar Bhavan — Jain Dharamshala at Taleti, Palitana" },
      { name: "description", content: "AC & Non-AC rooms, Bhojanshala and temple at the foot of Shatrunjay hills, Hastgiri Road, Taleti, Palitana." },
      { property: "og:title", content: "Suntar Bhavan — Jain Dharamshala, Palitana" },
      { property: "og:description", content: "Peaceful, clean and affordable stay for pilgrims at Taleti, Palitana." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  { src: p3.url, kicker: "સુનતર ભવન", title: "A serene stay at the foot of Shatrunjay", sub: "Hastgiri Road, Taleti, Palitana" },
  { src: p1.url, kicker: "Since 2021", title: "Clean, calm & affordable lodging", sub: "For every yatri visiting Palitana" },
  { src: p7.url, kicker: "Celebrations", title: "Grand courtyards for sangh & utsav", sub: "Lit, spacious and welcoming" },
  { src: p5.url, kicker: "Inside", title: "Halls crafted with devotion", sub: "Indoor seating & luggage assistance" },
];

const gallery = [p10, p2, p4, p6, p8, p9];

function Slider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i]!;
  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-maroon">
      {slides.map((sl, k) => (
        <img key={k} src={sl.src} alt={sl.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${k === i ? "opacity-100 ken-burns" : "opacity-0"}`} />
      ))}
      <div className="absolute inset-0 hero-shade" />
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-12 text-primary-foreground">
        <div className="text-lg font-bold tracking-tight">Suntar Bhavan</div>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#rooms" className="opacity-80 hover:opacity-100">Rooms</a>
          <a href="#bhojan" className="opacity-80 hover:opacity-100">Bhojanshala</a>
          <a href="#gallery" className="opacity-80 hover:opacity-100">Gallery</a>
          <a href="#visit" className="opacity-80 hover:opacity-100">Visit</a>
        </nav>
      </header>
      <div key={i} className="absolute inset-x-0 bottom-0 z-10 px-6 pb-20 md:px-12 md:pb-24 text-primary-foreground">
        <p className="rise text-sm uppercase tracking-[0.3em] text-saffron">{s.kicker}</p>
        <h1 className="rise mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-7xl" style={{ animationDelay: "120ms" }}>{s.title}</h1>
        <p className="rise mt-5 text-lg opacity-85" style={{ animationDelay: "240ms" }}>{s.sub}</p>
      </div>
      <div className="absolute bottom-8 right-6 z-10 flex items-center gap-3 md:right-12">
        {slides.map((_, k) => (
          <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)}
            className={`h-1 rounded-full transition-all ${k === i ? "w-12 bg-saffron" : "w-6 bg-primary-foreground/50"}`} />
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Slider />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Jai Jinendra</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">A home for pilgrims, steps from the sacred Palitana hills.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Established in 2021, Suntar Bhavan offers clean and affordable rooms with attached bathrooms and
            24-hour hot & cold water — so your yatra stays peaceful from Navkarshi to Chovihar.
          </p>
        </div>
        <img src={p10.url} alt="Suntar Bhavan courtyard" className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
      </section>

      <section id="rooms" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Rooms</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { n: "Standard", d: "Non Air-Conditioned rooms", img: p2.url },
              { n: "Deluxe", d: "Air-Conditioned rooms", img: p4.url },
            ].map((r) => (
              <article key={r.n} className="group overflow-hidden rounded-[1.5rem] bg-card">
                <div className="overflow-hidden"><img src={r.img} alt={r.n} className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="flex items-end justify-between p-7">
                  <div><h3 className="text-2xl font-bold">{r.n}</h3><p className="mt-1 text-muted-foreground">{r.d}</p></div>
                  <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">Attached bath</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bhojan" className="bg-maroon py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">Bhojanshala</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-4xl">Pure Jain meals at set timings, for a nominal per-plate cost.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-primary-foreground/15 md:grid-cols-3">
            {[
              ["Breakfast", "Navkarshi – 9:15 AM"],
              ["Lunch", "12:00 PM – 1:15 PM"],
              ["Dinner", "5:00 PM – Sunset"],
            ].map(([a, b]) => (
              <div key={a} className="bg-maroon p-8">
                <div className="text-sm opacity-70">{a}</div>
                <div className="mt-3 text-2xl font-bold text-saffron">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-4xl">Services</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {["Free Parking", "Bhojanshala", "Temple", "Hot Water", "Indoor Seating", "Luggage Help", "AC & Non-AC", "24h Water"].map((x, k) => (
            <div key={x} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-sm text-primary">0{k + 1}</div>
              <div className="mt-6 text-lg font-medium">{x}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, k) => (
            <img key={k} src={g.url} alt="Suntar Bhavan" loading="lazy"
              className={`h-full w-full rounded-2xl object-cover ${k === 0 ? "col-span-2 row-span-2" : ""}`} />
          ))}
        </div>
      </section>

      <section id="visit" className="bg-sand py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Visit us</h2>
            <p className="mt-4 text-lg">Hastgiri Road, Taleti, Palitana, Gujarat 364270</p>
          </div>
          <p className="max-w-md rounded-2xl bg-card p-5 text-sm text-muted-foreground">
            <strong className="text-foreground">Caution:</strong> Beware of advance-payment booking scams from unverified phone numbers online. Confirm directly with the dharamshala.
          </p>
        </div>
      </section>

      <footer className="bg-maroon px-6 py-8 text-center text-sm text-primary-foreground/70">© Suntar Bhavan, Palitana</footer>
    </main>
  );
}
