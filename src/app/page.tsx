
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#292522] text-[#eee8dc]">

      <section className="flex flex-col items-center px-5 pb-20 pt-32 md:px-12 md:pt-36">

        {/* ARTIST PHOTOGRAPH */}
        <div className="relative w-full max-w-[1050px]">
          <div className="absolute -inset-2 border border-[#b99a63]/40" />

          <div className="relative aspect-[16/9] overflow-hidden bg-[#1d1917]">
            <Image
              src="/images/home.jpg"
              alt="Srijith Poosarla performing on the mandolin"
              fill
              priority
              sizes="(max-width: 768px) 95vw, 1050px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* ARTIST NAME */}
        <div className="mt-10 text-center">
          <h1 className="font-serif text-4xl tracking-wide md:text-6xl">
            Srijith Poosarla
          </h1>

          <p className="mt-4 text-[11px] tracking-[0.4em] text-[#c6a46a]">
            MANDOLIN ARTIST
          </p>
        </div>

        {/* INTRODUCTION */}
        <p className="mt-7 max-w-xl text-center text-sm leading-8 text-[#d0c5b8] md:text-base">
          Srijith Poosarla is a mandolin artist exploring the
          expressive possibilities of music through performance,
          collaboration and a deep engagement with his instrument.
        </p>

      </section>
    </main>
  );
}
