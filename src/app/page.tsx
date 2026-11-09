
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#292522] text-[#eee8dc]">
      {/* Background photograph */}
      <div className="absolute inset-0">
        <Image
          src="/images/home.jpg"
          alt="Srijith Poosarla performing on the mandolin"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-[#171411]/35 to-[#171411]/20" />

      {/* Homepage content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-end px-6 pb-24 pt-32 text-center md:pb-32">
        <p className="mb-5 text-[11px] tracking-[0.4em] text-[#d6b779]">
          MANDOLIN ARTIST
        </p>

        <h1 className="font-serif text-5xl tracking-wide md:text-6xl">
          SRIJITH POOSARLA
        </h1>

        <div className="mt-6 h-px w-16 bg-[#c6a46a]" />

        <p className="mt-6 max-w-xl text-sm leading-8 text-[#eee8dc]/90 md:text-base">
          Exploring the expressive possibilities of music through
          performance, collaboration and a deep engagement with the mandolin.
        </p>
      </section>
    </main>
  );
}
