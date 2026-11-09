import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#171411] text-[#eee8dc]">
      {/* One gentle page-load sequence; disabled for reduced motion */}
      <style>{`
        @keyframes hero-rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .hero-rise { opacity: 0; animation: hero-rise 0.9s ease-out forwards; animation-delay: var(--d, 0s); }
        @media (prefers-reduced-motion: reduce) {
          .hero-zoom { animation: none; }
          .hero-rise { opacity: 1; animation: none; }
        }
      `}</style>

      {/* Background photograph with slow zoom */}
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

      {/* Bottom gradient for legible text + soft top fade under the transparent navbar */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/95 via-[#171411]/45 via-40% to-transparent to-65%" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#171411]/60 to-transparent" />

      {/* Homepage content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-end px-6 pb-24 pt-32 text-center md:pb-32">
        <h1
          className="hero-rise font-serif text-5xl tracking-[0.08em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] md:text-7xl"
          style={{ "--d": "0.1s" } as React.CSSProperties}
        >
          SRIJITH POOSARLA
        </h1>

        <div
          className="hero-rise mt-7 h-px w-20 bg-[#c6a46a]"
          style={{ "--d": "0.4s" } as React.CSSProperties}
        />

        <p
          className="hero-rise mt-6 text-sm font-medium tracking-[0.12em] text-[#c6a46a] md:text-base"
          style={{ "--d": "0.6s" } as React.CSSProperties}
        >
          Mandolinist. Performer. Arranger. Curator.
        </p>

        <p
          className="hero-rise mt-3 max-w-xl text-sm font-light leading-relaxed tracking-wide text-[#eee8dc]/85 md:text-base"
          style={{ "--d": "0.8s" } as React.CSSProperties}
        >
          Classical roots. Live energy. A confluence of Carnatic, folk and
          contemporary music.
        </p>

        <div
          className="hero-rise mt-9 flex flex-wrap items-center justify-center gap-6"
          style={{ "--d": "1s" } as React.CSSProperties}
        >
        </div>
      </section>
    </main>
  );
}
