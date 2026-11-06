
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#151512] text-[#eee8dc]">

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden">

        <Image
          src="/images/hero.jpg"
          alt="Srijith Poosarla performing on the mandolin"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151512]/95 via-[#151512]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151512] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-12">

          <p className="mb-7 text-xs uppercase tracking-[0.35em] text-[#c5a477]">
            Independent Mandolin Artist
          </p>

          <h1 className="font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            SRIJITH
            <br />
            <span className="text-[#c5a477]">POOSARLA.</span>
          </h1>

          <p className="mt-9 max-w-xl text-lg leading-relaxed text-white/75">
            Exploring the expressive possibilities of the mandolin
            through tradition, melody and contemporary musical expression.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/projects"
              className="bg-[#b99462] px-7 py-4 text-xs uppercase tracking-[0.16em] text-[#151512] transition hover:bg-[#d0b487]"
            >
              Explore Projects ↗
            </Link>

            <Link
              href="/about"
              className="border border-white/40 px-7 py-4 text-xs uppercase tracking-[0.16em] text-white transition hover:border-[#c5a477] hover:text-[#c5a477]"
            >
              Discover the Artist
            </Link>

          </div>
        </div>

        <div className="absolute bottom-10 right-12 z-10 hidden md:block">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Music beyond boundaries
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">

        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b99462]">
          The Artist
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:items-end">

          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            An instrument.
            <br />
            <span className="text-[#b99462]">
              Many expressions.
            </span>
          </h2>

          <div>
            <p className="text-base leading-8 text-white/60">
              Discover the musical world of Srijith Poosarla,
              his creative projects, performances and journey
              with the mandolin.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-block border-b border-[#b99462] pb-2 text-sm text-[#c5a477] transition hover:text-white"
            >
              Read about Srijith ↗
            </Link>
          </div>

        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-y border-white/10 bg-[#1b1b17]">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">

          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b99462]">
            Selected Work
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h2 className="font-serif text-5xl md:text-7xl">
              Creative <span className="text-[#b99462]">Projects.</span>
            </h2>

            <Link
              href="/projects"
              className="text-xs uppercase tracking-[0.15em] text-[#c5a477] hover:text-white"
            >
              View All Projects ↗
            </Link>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            <Link
              href="/projects"
              className="group flex min-h-64 flex-col justify-end border border-white/10 bg-[#22211c] p-8 transition hover:border-[#b99462]/60"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#b99462]">
                Music & Recordings
              </p>

              <h3 className="font-serif text-3xl">
                Explore the Music ↗
              </h3>

              <p className="mt-3 text-sm text-white/50">
                Discover recordings and musical projects.
              </p>
            </Link>

            <Link
              href="/projects"
              className="group flex min-h-64 flex-col justify-end border border-white/10 bg-[#22211c] p-8 transition hover:border-[#b99462]/60"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#b99462]">
                Collaborations
              </p>

              <h3 className="font-serif text-3xl">
                Creative Expressions ↗
              </h3>

              <p className="mt-3 text-sm text-white/50">
                Discover collaborations and performances.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">

        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-center">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b99462]">
              Media & Resources
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Press & Media Kit
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
              Artist biographies, photographs and resources
              for publications and media enquiries.
            </p>
          </div>

          <Link
            href="/press"
            className="self-start border border-[#b99462] px-7 py-4 text-xs uppercase tracking-[0.15em] text-[#c5a477] transition hover:bg-[#b99462] hover:text-[#151512] md:self-auto"
          >
            Explore Press Kit ↗
          </Link>

        </div>
      </section>

    </main>
  );
}
