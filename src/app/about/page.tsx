
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#151512] text-[#eee8dc]">

      {/* Page heading */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-40 lg:px-12">

        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#b99462]">
          The Artist
        </p>

        <h1 className="font-serif text-6xl leading-tight md:text-8xl">
          ABOUT <span className="text-[#b99462]">SRIJITH.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
          A musical journey shaped by melody, tradition and
          the expressive possibilities of the mandolin.
        </p>

      </section>

      {/* Artist introduction */}
      <section className="border-y border-white/10 bg-[#1b1b17]">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center lg:px-12">

          {/* Artist photograph */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Srijith Poosarla with his mandolin"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Biography */}
          <div>

            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b99462]">
              01 / Introduction
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Srijith
              <br />
              <span className="text-[#b99462]">Poosarla.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/60">

              <p>
                Srijith Poosarla is a mandolin instrumentalist
                whose musical journey explores the relationship
                between tradition, melody and individual expression.
              </p>

              <p>
                Through the mandolin, he explores the possibilities
                of instrumental music, bringing together musical
                influences and a personal approach to performance.
              </p>

              <p>
                His work reflects a continuing interest in
                musical exploration, performance and creative
                expression.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Musical identity */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">

        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b99462]">
          02 / Musical Identity
        </p>

        <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Rooted in tradition.
          <br />
          <span className="text-[#b99462]">
            Open to exploration.
          </span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {[
            {
              number: "01",
              title: "The Instrument",
              description:
                "The mandolin as a medium for melody, expression and musical exploration.",
            },
            {
              number: "02",
              title: "The Tradition",
              description:
                "An appreciation for musical heritage and the traditions that shape instrumental music.",
            },
            {
              number: "03",
              title: "The Expression",
              description:
                "Exploring new musical ideas through performance, collaboration and creativity.",
            },
          ].map((item) => (

            <div
              key={item.number}
              className="border-t border-white/15 pt-7"
            >
              <p className="mb-8 text-sm text-[#b99462]">
                {item.number}
              </p>

              <h3 className="font-serif text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {item.description}
              </p>
            </div>

          ))}

        </div>
      </section>

      {/* Explore projects */}
      <section className="border-y border-white/10 bg-[#1b1b17]">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-20 md:flex-row md:items-center lg:px-12">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b99462]">
              Explore Further
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Discover the music.
            </h2>
          </div>

          <Link
            href="/projects"
            className="self-start border border-[#b99462] px-7 py-4 text-xs uppercase tracking-[0.15em] text-[#c5a477] transition hover:bg-[#b99462] hover:text-[#151512] md:self-auto"
          >
            Explore Projects ↗
          </Link>

        </div>
      </section>

    </main>
  );
}
