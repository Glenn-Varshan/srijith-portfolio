import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const explore = [
  {
    title: "Profile",
    text: "Lineage, collaborations and the story of a mandolin rooted in raga.",
    href: "/profile",
    cta: "Learn more",
  },
  {
    title: "Media",
    text: "Performances and moments from the stage, in motion.",
    href: "/media",
    cta: "Watch and listen",
  },
  {
    title: "Press kit",
    text: "Photographs, resume and technical rider for organisers and press.",
    href: "/press",
    cta: "Open press kit",
  },
];

const venues = [
  "BRICS Foreign Ministers’ Summit",
  "Bharat Mandapam",
  "India Habitat Centre",
  "IIT Delhi",
  "Indian Fine Arts Society",
  "Carnatica",
];

const delay = (s: string) => ({ "--d": s }) as React.CSSProperties;

export default function Home() {
  return (
    <main className="bg-bg text-ink">
      {/* One gentle page-load sequence; disabled for reduced motion */}
      <style>{`
        @keyframes hero-zoom { from { transform: scale(1); } to { transform: scale(1.06); } }
        @keyframes hero-rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .hero-zoom { animation: hero-zoom 24s ease-out forwards; }
        .hero-rise { opacity: 0; animation: hero-rise 0.9s ease-out forwards; animation-delay: var(--d, 0s); }
        @media (prefers-reduced-motion: reduce) {
          .hero-zoom { animation: none; }
          .hero-rise { opacity: 1; animation: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden px-6 pb-24 pt-32 text-center md:pb-32">
        <div className="hero-zoom absolute inset-0">
          <Image
            src="/images/home.jpg"
            alt="Srijith Poosarla performing on the mandolin"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 via-30% to-transparent to-65%" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-deep/60 to-transparent" />

        <div className="relative z-10 flex flex-col items-center">
          <h1
            className="hero-rise font-heading text-5xl font-semibold tracking-[0.06em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-6xl md:text-7xl"
            style={delay("0.1s")}
          >
            SRIJITH POOSARLA
          </h1>

          <div className="hero-rise mt-7 h-px w-20 bg-ink/60" style={delay("0.4s")} />

          <p
            className="hero-rise mt-6 text-sm font-bold uppercase tracking-[0.22em] text-ink md:text-base"
            style={delay("0.6s")}
          >
            Mandolinist. Performer. Arranger. Curator.
          </p>

          <p
            className="hero-rise mt-3 max-w-xl text-base font-light leading-relaxed text-ink/90 md:text-lg"
            style={delay("0.8s")}
          >
            Classical roots. Live energy. A confluence of Carnatic, folk and
            contemporary music.
          </p>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center justify-center gap-6"
            style={delay("1s")}
          >
            <Link
              href="/media"
              className="border border-accent bg-accent px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-bg transition-colors hover:border-ink hover:bg-ink hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Listen now
            </Link>
            <Link
              href="/press"
              className="text-xs font-bold uppercase tracking-[0.2em] text-ink/85 underline-offset-8 transition-colors hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Book / Press kit
            </Link>
          </div>
        </div>
      </section>

      {/* Each block fades in from the page background to its own colour, then back out */}
      <div>
        {/* INTRO */}
        <section className="feather [--tint:var(--color-panel)] px-6 py-32 md:px-12 md:py-40">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-20">
            <Reveal>
              <h2 className="font-heading text-4xl leading-snug md:text-6xl">
                Rooted in raga. Unbound by genre.
              </h2>
            </Reveal>
            <Reveal delay={150} className="space-y-5 text-base font-light leading-8 text-muted md:text-lg">
              <p>
                Srijith Poosarla is a Carnatic mandolinist from Chennai. A
                student of the legendary Vidwan U. Rajesh, he strives to carry
                forward the traditions of this style with sincerity.
              </p>
              <p>
                His sound brings classical, folk and contemporary music into
                one identity, whether on a concert stage, in a dance
                collaboration or alongside a band.
              </p>
              <Link
                href="/profile"
                className="inline-block border-b border-accent pb-1 text-sm font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Read the full profile
              </Link>
            </Reveal>
          </div>
        </section>

        {/* VENUES */}
        <section className="feather [--tint:color-mix(in_srgb,var(--color-ink)_9%,transparent)] px-6 py-32 md:px-12">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-ink/80">
              Performed at
            </p>
            <ul className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center font-heading text-xl tracking-wide md:text-2xl">
              {venues.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* EXPLORE: open rows, no cards */}
        <section className="feather [--tint:var(--color-deep)] px-6 py-32 md:px-12 md:py-40">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="font-heading text-4xl md:text-6xl">Explore more</h2>
              <div className="mt-5 h-px w-20 bg-ink/60" />
            </Reveal>

            <ul className="mt-14 divide-y divide-line/60">
              {explore.map((item, i) => (
                <li key={item.href}>
                  <Reveal delay={i * 120}>
                    <Link
                      href={item.href}
                      className="group grid items-center gap-4 py-10 md:grid-cols-[1fr_1.6fr_auto] md:gap-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      <h3 className="font-heading text-3xl transition-colors duration-500 group-hover:text-accent md:text-5xl">
                        {item.title}
                      </h3>
                      <p className="text-base font-light leading-7 text-muted">
                        {item.text}
                      </p>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink">
                        <span className="inline-block border-b border-transparent pb-1 transition-colors duration-500 group-hover:border-accent">
                          {item.cta}
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
