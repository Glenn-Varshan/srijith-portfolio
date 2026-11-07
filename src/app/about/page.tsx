
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#292522] text-[#eee8dc]">


{/* ARTIST INTRODUCTION */}
<section className="px-5 pb-20 pt-36 md:px-12">

  {/* ARTIST PHOTOGRAPH */}
  <div className="relative mx-auto w-full max-w-[1050px]">
    <div className="absolute -inset-2 border border-[#b99a63]/40" />

    <div className="relative aspect-[16/9] overflow-hidden bg-[#1d1917]">
      <Image
        src="/images/about.JPG"
        alt="Srijith Poosarla performing on the mandolin"
        fill
        priority
        sizes="(max-width: 768px) 95vw, 1050px"
        className="object-cover object-center"
      />
    </div>
  </div>

  {/* OVERLAPPING BIOGRAPHY PANEL */}
  <div className="relative z-10 mx-auto -mt-16 w-[92%] max-w-[850px] border border-[#b99a63]/30 bg-[#292522] px-6 py-10 shadow-2xl md:-mt-24 md:px-16 md:py-14">

    <div className="text-center">
      <p className="text-xs tracking-[0.35em] text-[#c6a46a]">
        ABOUT THE ARTIST
      </p>

      <h1 className="mt-4 font-serif text-4xl md:text-6xl">
        Srijith Poosarla
      </h1>

      <p className="mt-4 text-[11px] tracking-[0.4em] text-[#c6a46a]">
        MANDOLIN ARTIST
      </p>
    </div>

    <div className="mx-auto mt-9 max-w-2xl space-y-5 text-center text-sm leading-8 text-[#d0c5b8] md:text-base">
      <p>
        Srijith Poosarla is a mandolin artist whose musical
        journey explores the expressive possibilities of the
        instrument through performance, collaboration and
        a deep engagement with music.
      </p>

      <p>
        His artistic journey reflects an interest in exploring
        musical traditions while developing his own expression
        through the mandolin.
      </p>
    </div>

  </div>
</section>


      {/* MUSICAL IDENTITY */}
      <section className="border-t border-[#b99a63]/20 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">

          <p className="text-xs tracking-[0.3em] text-[#c6a46a]">
            THE MUSIC
          </p>

          <h2 className="mt-5 font-serif text-3xl md:text-4xl">
            Musical Identity
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-3">

            <div>
              <h3 className="font-serif text-xl">
                The Instrument
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#b9b4a9]">
                The mandolin is at the centre of Srijith's musical
                expression and artistic exploration.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl">
                Exploration
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#b9b4a9]">
                An ongoing exploration of musical ideas,
                interpretations and creative possibilities.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl">
                Performance
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#b9b4a9]">
                Sharing music through performances,
                collaborations and live experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS LINK */}
      <section className="px-6 py-16 text-center">
        <Link
          href="/projects"
          className="inline-block border border-[#b99a63] px-8 py-4 text-xs tracking-[0.2em] text-[#c6a46a] transition-colors hover:bg-[#b99a63] hover:text-[#292522]"
        >
          EXPLORE PROJECTS
        </Link>
      </section>

    </main>
  );
}
