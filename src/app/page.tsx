
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Music2,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Performances", href: "#performances" },
  { label: "Gallery", href: "#gallery" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#151512] text-[#eee8dc]">
      {/* Navigation */}
      <header className="absolute top-0 z-20 w-full border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
          <a href="#" className="text-xl font-semibold tracking-[0.2em]">
            SRIJITH<span className="text-[#b99462]">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.18em] text-white/70 transition hover:text-[#c5a477]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="border border-[#b99462]/70 px-5 py-3 text-xs uppercase tracking-[0.15em] transition hover:bg-[#b99462] hover:text-black"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[760px] items-center overflow-hidden md:min-h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Srijith Poosarla performing on the mandolin"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151512]/95 via-[#151512]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151512] via-transparent to-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 lg:px-12">
          <p className="mb-7 text-xs uppercase tracking-[0.35em] text-[#c5a477]">
            Independent Mandolin Artist
          </p>

          <h1 className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            SRIJITH
            <br />
            <span className="text-[#c5a477]">POOSARLA.</span>
          </h1>

          <div className="mt-9 max-w-lg">
            <p className="text-lg leading-relaxed text-white/75 md:text-xl">
              Exploring the expressive possibilities of the mandolin through
              tradition, melody and contemporary musical expression.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#music"
              className="group flex items-center gap-4 bg-[#b99462] px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#151512] transition hover:bg-[#d0b487]"
            >
              Explore the music
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#about"
              className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
            >
              Discover the artist
              <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-12 z-10 hidden text-right md:block">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
            Music beyond boundaries
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:items-center lg:px-12 lg:py-36"
      >
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b99462]">
            01 / The Artist
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            An instrument.
            <br />
            <span className="text-[#b99462]">Many expressions.</span>
          </h2>
        </div>

        <div className="space-y-6 text-base leading-8 text-white/60">
          <p>
            Music is a conversation between tradition and individuality.
            Through the mandolin, Srijith Poosarla explores melodies,
            musical ideas and the possibilities of instrumental performance.
          </p>
          <p>
            Discover the artist, explore his recordings and experience
            moments from his musical journey.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-b border-[#b99462] pb-2 text-sm text-[#c5a477] transition hover:text-white"
          >
            More about Srijith <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Music */}
      <section id="music" className="border-y border-white/10 bg-[#1b1b17]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b99462]">
            02 / Discography
          </p>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-5xl md:text-7xl">
              Listen to the <span className="text-[#b99462]">music.</span>
            </h2>
            <p className="max-w-sm text-sm leading-7 text-white/50">
              A collection of musical explorations and performances.
              Recordings will be added here.
            </p>
          </div>

          <div className="mt-14 border-t border-white/10 py-10">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center border border-[#b99462]/40 text-[#b99462]">
                <Music2 size={24} />
              </div>
              <div>
                <p className="text-sm tracking-wide">Featured recording</p>
                <p className="mt-1 text-xs text-white/40">
                  Audio coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performances */}
      <section
        id="performances"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-12"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b99462]">
          03 / Performances
        </p>
        <h2 className="font-serif text-5xl md:text-7xl">
          Moments in <span className="text-[#b99462]">music.</span>
        </h2>
        <div className="mt-12 flex min-h-64 items-center justify-center border border-white/10 bg-[#1b1b17]">
          <div className="text-center">
            <Camera className="mx-auto mb-4 text-[#b99462]" size={32} />
            <p className="text-sm text-white/60">
              Performance videos coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#1b1b17]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b99462]">
            04 / Gallery
          </p>
          <h2 className="font-serif text-5xl md:text-7xl">
            Beyond the <span className="text-[#b99462]">stage.</span>
          </h2>
          <p className="mt-6 text-sm text-white/50">
            A visual collection of performances, rehearsals and musical moments.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Srijith performing"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="flex aspect-[4/5] items-center justify-center border border-white/10 text-center text-xs uppercase tracking-widest text-white/30">
              More photographs
              <br />
              coming soon
            </div>
            <div className="hidden aspect-[4/5] items-center justify-center border border-white/10 text-center text-xs uppercase tracking-widest text-white/30 md:flex">
              More photographs
              <br />
              coming soon
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-20 md:flex-row md:items-end lg:px-12">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b99462]">
              Get in touch
            </p>
            <h2 className="font-serif text-5xl md:text-7xl">
              Let's connect<span className="text-[#b99462]">.</span>
            </h2>
            <p className="mt-5 text-sm text-white/50">
              For performances, collaborations and enquiries.
            </p>
          </div>

          <div className="flex gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="border border-white/20 p-4 text-white/70 transition hover:border-[#b99462] hover:text-[#b99462]"
            >
              <Camera size={20} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="border border-white/20 p-4 text-white/70 transition hover:border-[#b99462] hover:text-[#b99462]"
            >
              <Camera size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-6 text-center text-[10px] uppercase tracking-[0.2em] text-white/30">
          © {new Date().getFullYear()} Srijith Poosarla. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
